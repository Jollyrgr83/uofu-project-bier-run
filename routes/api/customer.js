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

router.route("/active/:customerID")
  // GET: retrieves and sends active orders for CUSTOMERPAGE
  .get(orderController.findOrdersByCustomer);

  router.route("/receipt/:orderID")
  // GET: generates and sends pdf
  .get(orderController.createPDF);

module.exports = router;
