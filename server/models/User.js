const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: "username required!",
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: "email required!",
      unique: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      required: 'Password Required!',
    },
    // Number of items in the cart
    orders: [Order.schema]
  });

  // UserSchema.pre('save', async function(next) {
  //   if (this.isNew || this.isModified('password')) {
  //     const saltRounds = 10;
  //     this.password = await bcrypt.hash(this.password, saltRounds);
  //   }
  
  //   next();
  // });

  UserSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  //   id: false,
  // }


const User = mongoose.model("User", UserSchema);

module.exports = User;
