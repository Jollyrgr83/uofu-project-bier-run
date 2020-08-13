const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bierRunDB");

const inventorySeed = [
  {
    beerName: "Budweiser",
    quantity: "6-pack Cans",
    price: "6.99"
  },
  {
    beerName: "Budweiser",
    quantity: "12-pack Cans",
    price: "12.99"
  },
  {
    beerName: "Budweiser",
    quantity: "6-pack Bottles",
    price: "7.99"
  },
  {
    beerName: "Budweiser",
    quantity: "12-pack Bottles",
    price: "13.99"
  },
  {
    beerName: "Bud Light",
    quantity: "6-pack Cans",
    price: "6.99"
  },
  {
    beerName: "Bud Light",
    quantity: "12-pack Cans",
    price: "12.99"
  },
  {
    beerName: "Bud Light",
    quantity: "6-pack Bottles",
    price: "7.99"
  },
  {
    beerName: "Bud Light",
    quantity: "12-pack Bottles",
    price: "13.99"
  },
  {
    beerName: "Coors Light",
    quantity: "6-pack Cans",
    price: "6.99"
  },
  {
    beerName: "Coors Light",
    quantity: "12-pack Cans",
    price: "12.99"
  },
  {
    beerName: "Coors Light",
    quantity: "6-pack Bottles",
    price: "7.99"
  },
  {
    beerName: "Coors Light",
    quantity: "12-pack Bottles",
    price: "13.99"
  },
  {
    beerName: "Miller Lite",
    quantity: "6-pack Cans",
    price: "6.99"
  },
  {
    beerName: "Miller Lite",
    quantity: "12-pack Cans",
    price: "12.99"
  },
  {
    beerName: "Miller Lite",
    quantity: "6-pack Bottles",
    price: "7.99"
  },
  {
    beerName: "Miller Lite",
    quantity: "12-pack Bottles",
    price: "13.99"
  },
  {
    beerName: "Michelob Ultra",
    quantity: "6-pack Cans",
    price: "6.99"
  },
  {
    beerName: "Michelob Ultra",
    quantity: "12-pack Cans",
    price: "12.99"
  },
  {
    beerName: "Michelob Ultra",
    quantity: "6-pack Bottles",
    price: "7.99"
  },
  {
    beerName: "Michelob Ultra",
    quantity: "12-pack Bottles",
    price: "13.99"
  },
  {
    beerName: "Heineken",
    quantity: "6-pack Cans",
    price: "6.99"
  },
  {
    beerName: "Heineken",
    quantity: "12-pack Cans",
    price: "12.99"
  },
  {
    beerName: "Heineken",
    quantity: "6-pack Bottles",
    price: "7.99"
  },
  {
    beerName: "Heineken",
    quantity: "12-pack Bottles",
    price: "13.99"
  },
  {
    beerName: "Corona",
    quantity: "6-pack Cans",
    price: "6.99"
  },
  {
    beerName: "Corona",
    quantity: "12-pack Cans",
    price: "12.99"
  },
  {
    beerName: "Corona",
    quantity: "6-pack Bottles",
    price: "7.99"
  },
  {
    beerName: "Corona",
    quantity: "12-pack Bottles",
    price: "13.99"
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
  