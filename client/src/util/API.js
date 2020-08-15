import axios from "axios";
// logo images
import bud from "../assets/bud.jpg";
import budLight from "../assets/bud-light.png";
import coorsLight from "../assets/coors-light.jpg";
import blueMoon from "../assets/blue-moon.jpg";
import corona from "../assets/corona.jpg";
import heineken from "../assets/heineken.jpg";
import michelobUltra from "../assets/michelob-ultra.jpg";
import millerLite from "../assets/miller-lite.jpg";

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
  // Gets inventory data for customer page
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
  }
};
