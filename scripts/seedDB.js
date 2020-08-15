const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bierRunDB");

const inventorySeed = [
  {
    beerName: "Budweiser",
    quantity: "12-pack Cans",
    price: "10.98"
  },
  {
    beerName: "Budweiser",
    quantity: "6-pack Bottles",
    price: "6.98"
  },
  {
    beerName: "Budweiser",
    quantity: "12-pack Bottles",
    price: "10.48"
  },
  {
    beerName: "Bud Light",
    quantity: "12-pack Cans",
    price: "10.48"
  },
  {
    beerName: "Bud Light",
    quantity: "30-pack Cans",
    price: "20.73"
  },
  {
    beerName: "Bud Light",
    quantity: "12-pack Bottles",
    price: "10.48"
  },
  {
    beerName: "Bud Light",
    quantity: "24-pack Bottles",
    price: "18.98"
  },
  {
    beerName: "Coors Light",
    quantity: "12-pack Cans",
    price: "10.48"
  },
  {
    beerName: "Coors Light",
    quantity: "30-pack Cans",
    price: "20.98"
  },
  {
    beerName: "Coors Light",
    quantity: "6-pack Bottles",
    price: "5.98"
  },
  {
    beerName: "Coors Light",
    quantity: "12-pack Bottles",
    price: "10.48"
  },
  {
    beerName: "Miller Lite",
    quantity: "12-pack Cans",
    price: "11.48"
  },
  {
    beerName: "Miller Lite",
    quantity: "30-pack Cans",
    price: "20.98"
  },
  {
    beerName: "Miller Lite",
    quantity: "6-pack Bottles",
    price: "6.98"
  },
  {
    beerName: "Miller Lite",
    quantity: "12-pack Bottles",
    price: "10.48"
  },
  {
    beerName: "Michelob Ultra",
    quantity: "12-pack Cans",
    price: "12.98"
  },
  {
    beerName: "Michelob Ultra",
    quantity: "24-pack Cans",
    price: "20.98"
  },
  {
    beerName: "Michelob Ultra",
    quantity: "12-pack Bottles",
    price: "12.98"
  },
  {
    beerName: "Michelob Ultra",
    quantity: "18-pack Bottles",
    price: "17.98"
  },
  {
    beerName: "Heineken",
    quantity: "12-pack Cans",
    price: "14.48"
  },
  {
    beerName: "Heineken",
    quantity: "6-pack Bottles",
    price: "9.48"
  },
  {
    beerName: "Heineken",
    quantity: "12-pack Bottles",
    price: "14.27"
  },
  {
    beerName: "Corona",
    quantity: "12-pack Cans",
    price: "14.48"
  },
  {
    beerName: "Corona",
    quantity: "6-pack Bottles",
    price: "8.98"
  },
  {
    beerName: "Corona",
    quantity: "12-pack Bottles",
    price: "14.48"
  },
  {
    beerName: "Corona",
    quantity: "24-pack Bottles",
    price: "25.98"
  },
  {
    beerName: "Blue Moon",
    quantity: "15-pack Cans",
    price: "14.48"
  },
  {
    beerName: "Blue Moon",
    quantity: "6-pack Bottles",
    price: "8.48"
  },
  {
    beerName: "Blue Moon",
    quantity: "12-pack Bottles",
    price: "14.48"
  }
];

db.Inventory.remove({})
  .then(() => db.Inventory.collection.insertMany(inventorySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  