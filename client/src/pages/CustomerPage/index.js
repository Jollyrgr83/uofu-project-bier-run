import React, { useState } from "react";

import "./index.css";

import bud from "../../assets/bud.jpg";
import budLight from "../../assets/bud-light.png";
import coorsLight from "../../assets/coors-light.jpg";
import blueMoon from "../../assets/blue-moon.jpg";
import corona from "../../assets/corona.jpg";
import heineken from "../../assets/heineken.jpg";
import michelobUltra from "../../assets/michelob-ultra.jpg";
import millerLite from "../../assets/miller-lite.jpg";

import Modal from "react-modal";
Modal.setAppElement("#root");

const inventory = {
  images: [
    { name: "Budweiser", logo: bud },
    { name: "Bud Light", logo: budLight },
    { name: "Coors Light", logo: coorsLight },
    { name: "Blue Moon", logo: blueMoon },
    { name: "Corona", logo: corona },
    { name: "Heineken", logo: heineken },
    { name: "Michelob Ultra", logo: michelobUltra },
    { name: "Miller Lite", logo: millerLite },
  ],
  Budweiser: [
    { quantity: "6-pack Bottles", price: 9.99 },
    { quantity: "12-pack Bottles", price: 18.99 },
    { quantity: "12-pack Cans", price: 9.99 },
    { quantity: "24-pack Cans", price: 22.99 },
  ],
  "Coors Light": [
    { quantity: "6-pack Bottles", price: 8.99 },
    { quantity: "12-pack Bottles", price: 18.99 },
    { quantity: "12-pack Cans", price: 8.99 },
    { quantity: "24-pack Cans", price: 28.99 },
  ],
  "Bud Light": [
    { quantity: "6-pack Bottles", price: 9.99 },
    { quantity: "12-pack Bottles", price: 18.99 },
    { quantity: "12-pack Cans", price: 9.99 },
    { quantity: "24-pack Cans", price: 22.99 },
  ],
  "Blue Moon": [
    { quantity: "6-pack Bottles", price: 9.99 },
    { quantity: "12-pack Bottles", price: 18.99 },
    { quantity: "12-pack Cans", price: 9.99 },
    { quantity: "24-pack Cans", price: 22.99 },
  ],
  Corona: [
    { quantity: "6-pack Bottles", price: 9.99 },
    { quantity: "12-pack Bottles", price: 18.99 },
    { quantity: "12-pack Cans", price: 9.99 },
    { quantity: "24-pack Cans", price: 22.99 },
  ],
  Heineken: [
    { quantity: "6-pack Bottles", price: 9.99 },
    { quantity: "12-pack Bottles", price: 18.99 },
    { quantity: "12-pack Cans", price: 9.99 },
    { quantity: "24-pack Cans", price: 22.99 },
  ],
  "Michelob Ultra": [
    { quantity: "6-pack Bottles", price: 9.99 },
    { quantity: "12-pack Bottles", price: 18.99 },
    { quantity: "12-pack Cans", price: 9.99 },
    { quantity: "24-pack Cans", price: 22.99 },
  ],
  "Miller Lite": [
    { quantity: "6-pack Bottles", price: 9.99 },
    { quantity: "12-pack Bottles", price: 18.99 },
    { quantity: "12-pack Cans", price: 9.99 },
    { quantity: "24-pack Cans", price: 22.99 },
  ],
};

const dummyorder = [
  {
    name: "Bud Light",
    quantity: "6-pack Bottles",
    number: 3,
    subtotal: "$19.97",
  },
];

const total = [
  {
    items: 13,
    price: "$109.98",
  },
];

function CustomerPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState({
    name: "",
    inventory: [],
  });
  const [order, setOrder] = useState({
    order: [],
    totalItems: 0,
    totalPrice: 0,
  });

  function toggleModal(event) {
    if (!isOpen) {
      renderModal(event.target.alt);
    }
    setIsOpen(!isOpen);
  }

  function renderModal(beerName) {
    console.log("beerName", beerName);
    setModalState({ name: beerName, inventory: [...inventory[beerName]] });
  }

  function handleModalFormSubmit(e) {
    e.preventDefault();
    console.log("form event", e);
    const orderInstance = Array.from(
      new FormData(document.getElementById("modalForm")),
      e => e.map(encodeURIComponent).join('=')
    ).join('&').replace(/%20/g, " ");
    console.log("orderInstance", orderInstance);
    var json = toSimpleJson(orderInstance);
    function toSimpleJson(serializedData) {
      var ar1 = serializedData.split("&");
      var json = "{";
      for (var i = 0; i < ar1.length; i++) {
        var ar2 = ar1[i].split("=");
        json += i > 0 ? ", " : "";
        json += '"' + ar2[0] + '" : ';
        json += '"' + (ar2.length < 2 ? "" : ar2[1]) + '"';
      }
      json += "}";
      const obj = JSON.parse(json);
      const objKeys = Object.keys(obj);
      let newArr = [];
      for (let i = 0; i < objKeys.length; i++) {
        if (obj[objKeys[i]] !== "") {
          newArr.push({ name: objKeys[i], number: obj[objKeys[i]] });
        }
      }
    }
    console.log("json", json);
  }

  return (
    <div>
      <div className="row message-container">
        <div className="col-sm-8">
          <p className="welcome">
            Welcome [username], your address is: 123 Main Street, Anytown, USA,
            12345
          </p>
        </div>
        <div className="col-sm-4">
          <p className="welcome">Your order #124 should arrive at 7:35 pm.</p>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Inventory Order Screen"
      >
        <form id="modalForm">
          <div className="modal-title">{modalState.name}</div>
          {modalState.inventory.map((x) => {
            return (
              <div className="row modal-row">
                <p className="modal-item">{x.quantity}</p>
                <p className="modal-item">${x.price}</p>
                <input
                  name={`${modalState.name} ${x.quantity}`}
                  data-price={x.price}
                  type="number"
                  className="modal-item"
                />
              </div>
            );
          })}
          <div className="row modal-footer">
            <button className="modalButton cancel" onClick={toggleModal}>
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleModalFormSubmit}
              className="modalButton addToCart"
            >
              Add to Cart
            </button>
          </div>
        </form>
      </Modal>

      <div className="row customer-background">
        <div className="col-sm-8">
          <div className="row text-center">
            {inventory.images.map((x) => {
              return (
                <img
                  src={x.logo}
                  alt={x.name}
                  className="inventory-card mx-auto"
                  onClick={toggleModal}
                />
              );
            })}
          </div>
        </div>
        <div className="col-sm-4 mx-auto">
          <div className="shopping-cart">
            <p className="cart-title">Shopping Cart</p>
            {dummyorder.map((x) => {
              return (
                <div>
                  <hr></hr>
                  <p className="cart-sub">Item: {`${x.name} ${x.quantity}`}</p>
                  <p className="cart-sub">Quantity: {x.number}</p>
                  <p className="cart-sub">Subtotal: {x.subtotal}</p>
                </div>
              );
            })}
            {total.map((x) => {
              return (
                <div className="cart-total">
                  <hr></hr>
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
