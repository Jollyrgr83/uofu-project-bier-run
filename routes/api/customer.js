const router = require("express").Router();
const userController = require("../../controllers/UserController");
const orderController = require("../../controllers/OrderController");
const inventoryController = require("../../controllers/InventoryController");

router
  .route("/")
  .get(inventoryController.findAll)
  .post(orderController.newOrder);

module.exports = router;
