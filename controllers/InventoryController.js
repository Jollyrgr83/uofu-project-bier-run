const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Inventory
      .find({ available: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
