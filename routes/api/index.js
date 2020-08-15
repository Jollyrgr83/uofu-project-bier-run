const router = require("express").Router();
const customerRoutes = require("./customer");
const driverRoutes = require("./driver");

router.use("/customer", customerRoutes);
router.use("/driver", driverRoutes);

module.exports = router;
