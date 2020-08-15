// API INDEX
// router
const router = require("express").Router();
// bring in specific api routes
const customerRoutes = require("./customer");
const driverRoutes = require("./driver");
// configure api routes
router.use("/customer", customerRoutes);
router.use("/driver", driverRoutes);

module.exports = router;
