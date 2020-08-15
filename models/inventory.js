// INVENTORY MODEL
// dependencies
const mongoose = require("mongoose");
// define schema
const Schema = mongoose.Schema;
// create inventory schema
const inventorySchema = new Schema({
  beerName: { type: String, required: true },
  quantity: { type: String, required: true },
  price: { type: String, required: true },
  date: { type: Date, default: Date.now }
});
// configure schema as model
const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
