const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  beerName: { type: String, required: true },
  quantity: { type: String, required: true },
  price: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
