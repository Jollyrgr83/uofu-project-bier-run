import React from "react";

import "./index.css";

import bud from "../../assets/bud.jpg";
import budLight from "../../assets/bud-light.png";
import coorsLight from "../../assets/coors-light.jpg";
import blueMoon from "../../assets/blue-moon.jpg";

const inventory = [
  {
    name: "Budweiser",
    logo: bud
  },
  {
    name: "Bud Light",
    logo: budLight
  },
  {
    name: "Coors Light",
    logo: coorsLight
  },
  {
    name: "Blue Moon",
    logo: blueMoon
  },
  {
    name: "Budweiser",
    logo: bud
  },
  {
    name: "Bud Light",
    logo: budLight
  },
  {
    name: "Coors Light",
    logo: coorsLight
  },
  {
    name: "Blue Moon",
    logo: blueMoon
  }
];

const order = [
  {
    item: "Bud Light Bottles 6-pack",
    price: "$6.99",
    quantity: 3,
    subtotal: "$19.97"
  },
  {
    item: "Bud Light Cans 24-pack",
    price: "$12.99",
    quantity: 1,
    subtotal: "$12.99"
  },
  {
    item: "Coors Light Bottles 6-pack",
    price: "$6.99",
    quantity: 3,
    subtotal: "$19.97"
  },
  {
    item: "Budweiser Cans 12-pack",
    price: "$14.99",
    quantity: 4,
    subtotal: "$64.96"
  },
  {
    item: "Blue Moon Bottles 6-pack",
    price: "$19.99",
    quantity: 2,
    subtotal: "$39.98"
  }
];

const total = [
  {
    items: 13,
    price: "$109.98"
  }
];

function CustomerPage() {
  return (
    <div>
      <div className="row message-container">
        <p className="welcome mx-auto">Welcome [username], your address is: 123 Main Street, Anytown, USA, 12345</p>
        <p className="welcome mx-auto">You have no active orders</p>
      </div>
      <div className="row customer-background">
        <div className="col-sm-8">
          <div className="row text-center">
            {inventory.map(x => {
              return (
                <img src={x.logo} alt={x.name} className="inventory-card mx-auto" />
              );
            })}
          </div>
        </div>
        <div className="col-sm-4">
          <div className="shopping-cart">
            <p className="cart-title">Shopping Cart</p>
            {order.map(x => {
              return (
                <div>
                  <br></br>
                  <p className="cart-sub">Item: {x.item}</p>
                  <p className="cart-sub">Quantity: {x.quantity}</p>
                  <p className="cart-sub">Price: {x.price}</p>
                  <p className="cart-sub">Subtotal: {x.subtotal}</p>
                </div>
              );
            })}
            {total.map(x => {
              return(
                <div className="cart-total">
                  <br></br>
                  <p>Total Items: {x.items}</p>
                  <p>Total: {x.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerPage;
