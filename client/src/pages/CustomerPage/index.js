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

const inventory = [
  { name: "Budweiser", logo: bud },
  { name: "Bud Light", logo: budLight },
  { name: "Coors Light", logo: coorsLight },
  { name: "Blue Moon", logo: blueMoon },
  { name: "Corona", logo: corona },
  { name: "Heineken", logo: heineken },
  { name: "Michelob Ultra", logo: michelobUltra },
  { name: "Miller Lite", logo: millerLite },
];

const order = [
  {
    item: "Bud Light Bottles 6-pack",
    price: "$6.99",
    quantity: 3,
    subtotal: "$19.97",
  },
  {
    item: "Bud Light Cans 24-pack",
    price: "$12.99",
    quantity: 1,
    subtotal: "$12.99",
  },
  {
    item: "Coors Light Bottles 6-pack",
    price: "$6.99",
    quantity: 3,
    subtotal: "$19.97",
  },
  {
    item: "Budweiser Cans 12-pack",
    price: "$14.99",
    quantity: 4,
    subtotal: "$64.96",
  },
  {
    item: "Blue Moon Bottles 6-pack",
    price: "$19.99",
    quantity: 2,
    subtotal: "$39.98",
  },
];

const total = [
  {
    items: 13,
    price: "$109.98",
  },
];

function CustomerPage() {
  const [isOpenBudweiser, setIsOpenBudweiser] = useState(false);
  const [isOpenCoorsLight, setIsOpenCoorsLight] = useState(false);
  const [isOpenBudLight, setIsOpenBudLight] = useState(false);
  const [isOpenBlueMoon, setIsOpenBlueMoon] = useState(false);
  const [isOpenCorona, setIsOpenCorona] = useState(false);
  const [isOpenHeineken, setIsOpenHeineken] = useState(false);
  const [isOpenMichelobUltra, setIsOpenMichelobUltra] = useState(false);
  const [isOpenMillerLite, setIsOpenMillerLite] = useState(false);

  function toggleModalBudweiser() {
    setIsOpenBudweiser(!isOpenBudweiser);
  }

  function toggleModalCoorsLight() {
    setIsOpenCoorsLight(!isOpenCoorsLight);
  }

  function toggleModalBudLight() {
    setIsOpenBudLight(!isOpenBudLight);
  }

  function toggleModalBlueMoon() {
    setIsOpenBlueMoon(!isOpenBlueMoon);
  }

  function toggleModalCorona() {
    setIsOpenCorona(!isOpenCorona);
  }

  function toggleModalHeineken() {
    setIsOpenHeineken(!isOpenHeineken);
  }

  function toggleModalMichelobUltra() {
    setIsOpenMichelobUltra(!isOpenMichelobUltra);
  }

  function toggleModalMillerLite() {
    setIsOpenMillerLite(!isOpenMillerLite);
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
        isOpen={isOpenBudweiser}
        onRequestClose={toggleModalBudweiser}
        contentLabel="Bud"
      >
        <div>Budweiser</div>
      </Modal>
      <Modal
        isOpen={isOpenCoorsLight}
        onRequestClose={toggleModalCoorsLight}
        contentLabel="Coors"
      >
        <div>Coors</div>
      </Modal>
      <Modal
        isOpen={isOpenBudLight}
        onRequestClose={toggleModalBudLight}
        contentLabel="Bud Light"
      >
        <div>Bud Light</div>
      </Modal>
      <Modal
        isOpen={isOpenBlueMoon}
        onRequestClose={toggleModalBlueMoon}
        contentLabel="Blue Moon"
      >
        <div>Blue Moon</div>
      </Modal>
      <Modal
        isOpen={isOpenCorona}
        onRequestClose={toggleModalCorona}
        contentLabel="Corona"
      >
        <div>Corona</div>
      </Modal>
      <Modal
        isOpen={isOpenHeineken}
        onRequestClose={toggleModalHeineken}
        contentLabel="Heineken"
      >
        <div>Heineken</div>
      </Modal>
      <Modal
        isOpen={isOpenMichelobUltra}
        onRequestClose={toggleModalMichelobUltra}
        contentLabel="Michelob Ultra"
      >
        <div>Michelob Ultra</div>
      </Modal>
      <Modal
        isOpen={isOpenMillerLite}
        onRequestClose={toggleModalMillerLite}
        contentLabel="Miller Lite"
      >
        <div>Miller Lite</div>
      </Modal>
      <div className="row customer-background">
        <div className="col-sm-8">
          <div className="row text-center">
            {inventory.map((x) => {
              return (
                <img
                  src={x.logo}
                  alt={x.name}
                  className="inventory-card mx-auto"
                  onClick={toggleModalBudweiser}
                />
              );
            })}
          </div>
        </div>
        <div className="col-sm-4 mx-auto">
          <div className="shopping-cart">
            <p className="cart-title">Shopping Cart</p>
            {order.map((x) => {
              return (
                <div>
                  <hr></hr>
                  <p className="cart-sub">Item: {x.item}</p>
                  <p className="cart-sub">Quantity: {x.quantity}</p>
                  <p className="cart-sub">Price: {x.price}</p>
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
