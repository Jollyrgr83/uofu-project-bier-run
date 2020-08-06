const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Drivers.find(req.query);
  }
};
