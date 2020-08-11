const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  name: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: String, required: true },
  streetAddress: { type: String, required: true },
  available: { type: Boolean, default: true, required: true },
  date: { type: Date, default: Date.now }
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
