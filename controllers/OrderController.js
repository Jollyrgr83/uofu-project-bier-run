// ORDER CONTROLLER
// bring in models
const db = require("../models");

module.exports = {
  // sends all non-delivered (active) orders
  findAllActiveOrders: function(req, res) {
    db.Order
      .find({
        complete: false
      })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // sends all non-delivered (active) and selected orders by driver ID
  findOrdersByCustomer: function(req, res) {
    db.Order
      .find({
        customerID: req.params.customerID
      })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // creates a new order
  newOrder: function(req, res) {
    db.Order
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // updates order to selected status and adds driver ID
  updateStatus: function(req, res) {
    db.Order
      .findByIdAndUpdate(req.body.orderID, { $set: { inProgress: req.body.inProgress, estimatedTime: parseInt(req.body.ETA), complete: req.body.complete }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // updates order to unselected status and removes driver ID
  driverUnselectOrder: function(req, res) {
    db.Order
      .findByIdAndUpdate(req.body.orderID, { $set: { inProgress: false, driverID: "" }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // updates order status as complete
  completeOrder: function(req, res) {
    db.Order
      .findByIdAndUpdate(req.body.orderID, { $set: { inProgress: false, complete: true, deliveredDate: Date.now }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
