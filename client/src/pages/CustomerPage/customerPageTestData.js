import bud from "../../assets/bud.jpg";
import budLight from "../../assets/bud-light.png";
import coorsLight from "../../assets/coors-light.jpg";
import blueMoon from "../../assets/blue-moon.jpg";
import corona from "../../assets/corona.jpg";
import heineken from "../../assets/heineken.jpg";
import michelobUltra from "../../assets/michelob-ultra.jpg";
import millerLite from "../../assets/miller-lite.jpg";

const inventory = {
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
  beers: {
    Budweiser: [
      { quantity: "6-pack Bottles", price: 9.99, id: 0 },
      { quantity: "12-pack Bottles", price: 18.99, id: 1 },
      { quantity: "12-pack Cans", price: 9.99, id: 2 },
      { quantity: "24-pack Cans", price: 22.99, id: 3 },
      { quantity: "30-pack Cans", price: 24.99, id: 4 }
    ],
    "Coors Light": [
      { quantity: "6-pack Bottles", price: 9.99, id: 0 },
      { quantity: "12-pack Bottles", price: 18.99, id: 1 },
      { quantity: "12-pack Cans", price: 9.99, id: 2 },
      { quantity: "24-pack Cans", price: 22.99, id: 3 }
    ],
    "Bud Light": [
      { quantity: "6-pack Bottles", price: 9.99, id: 0 },
      { quantity: "12-pack Bottles", price: 18.99, id: 1 },
      { quantity: "12-pack Cans", price: 9.99, id: 2 },
      { quantity: "24-pack Cans", price: 22.99, id: 3 }
    ],
    "Blue Moon": [
      { quantity: "6-pack Bottles", price: 9.99, id: 0 },
      { quantity: "12-pack Bottles", price: 18.99, id: 1 },
      { quantity: "12-pack Cans", price: 9.99, id: 2 },
      { quantity: "24-pack Cans", price: 22.99, id: 3 }
    ],
    Corona: [
      { quantity: "6-pack Bottles", price: 9.99, id: 0 },
      { quantity: "12-pack Bottles", price: 18.99, id: 1 },
      { quantity: "12-pack Cans", price: 9.99, id: 2 },
      { quantity: "24-pack Cans", price: 22.99, id: 3 }
    ],
    Heineken: [
      { quantity: "6-pack Bottles", price: 9.99, id: 0 },
      { quantity: "12-pack Bottles", price: 18.99, id: 1 },
      { quantity: "12-pack Cans", price: 9.99, id: 2 },
      { quantity: "24-pack Cans", price: 22.99, id: 3 }
    ],
    "Michelob Ultra": [
      { quantity: "6-pack Bottles", price: 9.99, id: 0 },
      { quantity: "12-pack Bottles", price: 18.99, id: 1 },
      { quantity: "12-pack Cans", price: 9.99, id: 2 },
      { quantity: "24-pack Cans", price: 22.99, id: 3 }
    ],
    "Miller Lite": [
      { quantity: "6-pack Bottles", price: 9.99, id: 0 },
      { quantity: "12-pack Bottles", price: 18.99, id: 1 },
      { quantity: "12-pack Cans", price: 9.99, id: 2 },
      { quantity: "24-pack Cans", price: 22.99, id: 3 }
    ]
  },
  customerOrder: [
    {
      name: "Bud Light",
      quantity: "6-pack Bottles",
      number: 3,
      subtotal: "$19.97",
    },
  ],
  customerTotals: {
    items: 13,
    price: "$109.98",
  }
};

export default inventory;
