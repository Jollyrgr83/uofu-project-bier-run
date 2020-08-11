const db = require("../models");

module.exports = {
  findAllActiveOrders: function(req, res) {
    db.Order
      .find({
        inProgress: false
      })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllOrdersByDriver: function(req, res) {
    db.Order
      .find({
        inProgress: true,
        driverID: req.driverID
      })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  newOrder: function(req, res) {
    db.Order
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  driverSelectOrder: function(req, res) {
    db.Order
      .findByIdAndUpdate(req.body.orderID, { $set: { inProgress: true, driverID: req.body.driverID }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  driverUnselectOrder: function(req, res) {
    db.Order
      .findByIdAndUpdate(req.body.orderID, { $set: { inProgress: false, driverID: "" }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  completeOrder: function(req, res) {
    db.Order
      .findByIdAndUpdate(req.body.orderID, { $set: { inProgress: false, complete: true, deliveredDate: Date.now }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
