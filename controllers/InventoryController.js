// INVENTORY CONTROLLER
// bring in models
const db = require("../models");

module.exports = {
  // sends all records in beer selection inventory
  findAll: function(req, res) {
    db.Inventory.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
