// DRIVER API ROUTES (/api/driver)
// router
const router = require("express").Router();
// bring in controllers
const userController = require("../../controllers/UserController");
const orderController = require("../../controllers/OrderController");
const inventoryController = require("../../controllers/InventoryController");
// configure routes
router.route("/")
  // GET: retrieves and sends all active orders for DRIVERPAGE
  .get(orderController.findAllActiveOrders);

module.exports = router;
