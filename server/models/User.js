const { Schema, model, Types } = require("mongoose");

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
    // Number of items in the cart
    counts: {
      type: Integer,
      unique: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model("User", UserSchema);

module.exports = User;
