const { Schema, model, Types } = require("mongoose");

const SauceSchema = new Schema(
  {
    chipotle: {
      type: Integer,
      required: ["_id", "date", "description", "quantity", "price"],
      properties: {
        _id: { bsonType: "objectId" },
        date: { bsonType: "string" },
        description: { bsonType: "string" },
        quantity: { bsonType: "integer" },
        price: { bsonType: "number" },
      },
    },
    honey: {
      type: Integer,
      required: ["_id", "date", "description", "quantity", "price"],
      properties: {
        _id: { bsonType: "objectId" },
        date: { bsonType: "string" },
        description: { bsonType: "string" },
        quantity: { bsonType: "integer" },
        price: { bsonType: "number" },
      },
    },
    original: {
      type: Integer,
      required: ["_id", "date", "description", "quantity", "price"],
      properties: {
        _id: { bsonType: "objectId" },
        date: { bsonType: "string" },
        description: { bsonType: "string" },
        quantity: { bsonType: "integer" },
        price: { bsonType: "number" },
      },
    },
    pineapple: {
      type: Integer,
      required: ["_id", "date", "description", "quantity", "price"],
      properties: {
        _id: { bsonType: "objectId" },
        date: { bsonType: "string" },
        description: { bsonType: "string" },
        quantity: { bsonType: "integer" },
        price: { bsonType: "number" },
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Sauce = model("Sauce", SauceSchema);

module.exports = Sauce;
