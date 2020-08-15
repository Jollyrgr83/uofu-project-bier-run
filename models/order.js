// ORDER MODEL
// dependencies
const mongoose = require("mongoose");
// define schema
const Schema = mongoose.Schema;
// create order schema
const orderSchema = new Schema({
  orderDetails: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  totalItems: { type: Number, required: true },
  customerID: { type: String, required: true },
  inProgress: { type: Boolean, default: false, required: true },
  driverID: { type: String },
  estimatedTime: { type: Number },
  complete: { type: Boolean, default: false, required: true },
  deliveredDate: { type: Date },
  date: { type: Date, default: Date.now, required: true }
});
// configure schema as model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
