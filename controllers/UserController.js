// USER CONTROLLER
// bring in models
const db = require("../models");

module.exports = {
  // sends user info by userID
  findUserByID: function(req, res) {
    db.User
      .find({
        _id: req.body.userID
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
