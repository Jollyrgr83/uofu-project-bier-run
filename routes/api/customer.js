// CUSTOMER API ROUTES
// router
const router = require("express").Router();
// bring in controllers
const userController = require("../../controllers/UserController");
const orderController = require("../../controllers/OrderController");
const inventoryController = require("../../controllers/InventoryController");
// configure routes
router.route("/")
  // GET: retrieves and sends all inventory items for CUSTOMERPAGE
  .get(inventoryController.findAll)
  // POST: receives new customer orders from CUSTOMERPAGE
  .post(orderController.newOrder);

module.exports = router;
