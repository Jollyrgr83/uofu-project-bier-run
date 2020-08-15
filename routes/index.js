// ROUTES INDEX
// dependencies
const path = require("path");
// router
const router = require("express").Router();
// bring in api routes
const apiRoutes = require("./api");
// configure api routes
router.use("/api", apiRoutes);
// serve react app if not accessing api routes
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
