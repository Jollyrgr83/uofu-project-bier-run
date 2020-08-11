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
]

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
          <div className="shopping-cart">Shopping Cart</div>
        </div>
      </div>
    </div>
  );
}

export default CustomerPage;
