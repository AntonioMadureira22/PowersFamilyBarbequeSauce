const { Schema, model, Types } = require("mongoose");

const sauceSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 5
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Sauce = mongoose.model('Sauce', sauceSchema);

module.exports = Sauce;






// const SauceSchema = new Schema(
//   {
//     chipotle: {
//       type: Integer,
//       required: ["_id", "date", "description", "quantity", "price"],
//       properties: {
//         _id: { bsonType: "objectId" },
//         date: { bsonType: "string" },
//         description: { bsonType: "string" },
//         quantity: { bsonType: "integer" },
//         price: { bsonType: "number" },
//       },
//     },
//     honey: {
//       type: Integer,
//       required: ["_id", "date", "description", "quantity", "price"],
//       properties: {
//         _id: { bsonType: "objectId" },
//         date: { bsonType: "string" },
//         description: { bsonType: "string" },
//         quantity: { bsonType: "integer" },
//         price: { bsonType: "number" },
//       },
//     },
//     original: {
//       type: Integer,
//       required: ["_id", "date", "description", "quantity", "price"],
//       properties: {
//         _id: { bsonType: "objectId" },
//         date: { bsonType: "string" },
//         description: { bsonType: "string" },
//         quantity: { bsonType: "integer" },
//         price: { bsonType: "number" },
//       },
//     },
//     pineapple: {
//       type: Integer,
//       required: ["_id", "date", "description", "quantity", "price"],
//       properties: {
//         _id: { bsonType: "objectId" },
//         date: { bsonType: "string" },
//         description: { bsonType: "string" },
//         quantity: { bsonType: "integer" },
//         price: { bsonType: "number" },
//       },
//     },
//   },
//   {
//     toJSON: {
//       getters: true,
//     },
//     id: false,
//   }
// );

const Sauce = model("Sauce", SauceSchema);

module.exports = Sauce;
