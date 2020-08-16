// ORDER CONTROLLER
// bring in models
const db = require("../models");
// dependencies
const PdfPrinter = require("pdfmake");
const fs = require("fs");
// fonts for pdf
const fonts = {
  Helvetica: {
    normal: "Helvetica",
    bold: "Helvetic-Bold",
    italics: "Helvetica-Oblique",
    bolditalics: "Helvetica-BoldOblique",
  },
};

module.exports = {
  // creates and sends pdf
  createPDF: function (req, res) {
    db.Order.find({ _id: req.params.orderID }).then((dbModel) => {
      const orderDetails = JSON.parse(dbModel[0].orderDetails);
      const orderTable = [];
      for (let i = 0; i < orderDetails.length; i++) {
        let item = [];
        item.push(`Name: ${orderDetails[i].name}`);
        item.push(`Quantity: ${orderDetails[i].quantity}`);
        item.push(`Subtotal: $${orderDetails[i].subtotal}`);
        orderTable.push(item);
        orderTable.push(["", "", ""]);
      }
      var docDefinition = {
        content: [
          {
            layout: "noBorders",
            table: {
              headerRows: 0,
              widths: ["55%", "15%", "30%"],
              body: [
                [`Order ID: ${dbModel[0]._id}`, "", ""],
                ["", "", ""],
                [`Address: ${dbModel[0].address}`, "", ""],
                ["", "", ""],
                ...orderTable,
                ["", "", ""],
                ["", "", ""],
                ["", "", `Total Items: ${dbModel[0].totalItems}`],
                ["", "", ""],
                ["", "", `Total Price: $${dbModel[0].totalPrice}`],
              ],
            },
          },
        ],
        defaultStyle: {
          font: "Roboto",
          lineHeight: 3
        }
      };
      res.json(docDefinition);
    });
  },
  // sends all non-delivered (active) orders
  findAllActiveOrders: function (req, res) {
    db.Order.find({
      complete: false,
    })
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // sends all non-delivered (active) and selected orders by driver ID
  findOrdersByCustomer: function (req, res) {
    db.Order.find({
      customerID: req.params.customerID,
    })
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // creates a new order
  newOrder: function (req, res) {
    db.Order.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // updates order to selected status and adds driver ID
  updateStatus: function (req, res) {
    db.Order.findByIdAndUpdate(req.body.orderID, {
      $set: {
        inProgress: req.body.inProgress,
        estimatedTime: parseInt(req.body.ETA),
        complete: req.body.complete,
      },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // updates order to unselected status and removes driver ID
  driverUnselectOrder: function (req, res) {
    db.Order.findByIdAndUpdate(req.body.orderID, {
      $set: { inProgress: false, driverID: "" },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // updates order status as complete
  completeOrder: function (req, res) {
    db.Order.findByIdAndUpdate(req.body.orderID, {
      $set: { inProgress: false, complete: true, deliveredDate: Date.now },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
