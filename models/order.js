const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  // orderDetails: { type: map, of: String },
  totalPrice: { type: Number, required: true },
  customerID: { type: String, required: true },
  inProgress: { type: Boolean, default: false, required: true },
  driverID: { type: String },
  estimatedTime: { type: Number },
  complete: { type: Boolean, default: false, required: true },
  deliveredDate: { type: Date },
  date: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
