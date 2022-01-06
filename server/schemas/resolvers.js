const { AuthenticationError } = require("apollo-server-express");
const { User, Sauce, Category, Order } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    sauces: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Sauce.find(params).populate("category");
    },
    sauce: async (parent, { _id }) => {
      return await Sauce.findById(_id).populate("category");
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.sauces",
          populate: "category",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }
      throw new AuthenticationError("Not Logged In!");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.sauces",
          populate: "category",
        });
        return user.orders.id(_id);
      }
      throw new AuthenticationError("Not Logged In");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ sauces: args.sauces });
      const line_items = [];

      const { sauces } = await order.populate("sauces").execPopulate();

      line_items.push({
        price: price.id,
        quantity: 12,
      });
      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { sauces }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ sauces });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    updateSauce: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Sauce.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
