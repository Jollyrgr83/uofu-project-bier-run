// API UTILITY
// dependencies
import axios from "axios";
import pdfMake from "pdfmake";
// logo images
import bud from "../assets/logos/bud.jpg";
import budLight from "../assets/logos/bud-light.png";
import coorsLight from "../assets/logos/coors-light.jpg";
import blueMoon from "../assets/logos/blue-moon.jpg";
import corona from "../assets/logos/corona.jpg";
import heineken from "../assets/logos/heineken.jpg";
import michelobUltra from "../assets/logos/michelob-ultra.jpg";
import millerLite from "../assets/logos/miller-lite.jpg";

export default {
  // logo images
  images: [
    { name: "Budweiser", logo: bud, id: 0 },
    { name: "Bud Light", logo: budLight, id: 1 },
    { name: "Coors Light", logo: coorsLight, id: 2 },
    { name: "Blue Moon", logo: blueMoon, id: 3 },
    { name: "Corona", logo: corona, id: 4 },
    { name: "Heineken", logo: heineken, id: 5 },
    { name: "Michelob Ultra", logo: michelobUltra, id: 6 },
    { name: "Miller Lite", logo: millerLite, id: 7 },
  ],
  // gets inventory data for customer page
  getInventory: function () {
    return axios.get("/api/customer").then((res) => {
      const receivedData = {};
      for (let i = 0; i < res.data.length; i++) {
        if (!receivedData[res.data[i].beerName]) {
          receivedData[res.data[i].beerName] = [];
        }
        receivedData[res.data[i].beerName].push({
          id: res.data[i]._id,
          beerName: res.data[i].beerName,
          quantity: res.data[i].quantity,
          price: res.data[i].price,
        });
      }
      return receivedData;
    });
  },
  // sends customer order to database server
  sendOrder: function (orderObj) {
    return axios.post("/api/customer", orderObj).then((res) => {
      return res;
    });
  },
  // gets order data for driver page
  getOrders: function() {
    return axios.get("/api/driver").then(res => {
      return res;
    });
  },
  // updates order's selected status
  selectOrder: function(orderID, ETA) {
    return axios.put("/api/driver", { orderID: orderID, ETA: ETA, inProgress: true, complete: false }).then(res => {
      return res;
    });
  },
  // updates order's selected status
  unselectOrder: function(orderID) {
    return axios.put("/api/driver", { orderID: orderID, ETA: "999", inProgress: false, complete: false }).then(res => {
      return res;
    });
  },
  // updates order's complete status
  deliverOrder: function(orderID) {
    return axios.put("/api/driver", { orderID: orderID, ETA: "998", inProgress: false, complete: true }).then(res => {
      return res;
    });
  },
  // retrieves user's active orders
  getUserOrderData: function(userID) {
    return axios.get("/api/customer/active/" + userID).then(res => {
      return res;
    });
  },
  getPDF: function(orderID) {
    return axios.get("/api/customer/receipt/" + orderID).then(res => {
      pdfMake.createPdf(res.data).download();
      return res;
    });
  }
};
