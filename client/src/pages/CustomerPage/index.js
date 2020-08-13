import React, { useState, useEffect } from "react";
import axios from "axios";
// stylesheet
import "./index.css";
// API functions
import API from "../../util/API";
// utility functions
import customerPageUtil from "./customerPageUtil";
// modal component from react-modal package
import Modal from "react-modal";
Modal.setAppElement("#root");

function CustomerPage() {
  const [inventory, setInventory] = useState({ images: [], beers: {} });
  const [isOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState({
    modalName: "",
    modalInventory: [],
  });
  const [order, setOrder] = useState({
    order: [],
    totalItems: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    loadInventory();
  }, []);

  function loadInventory() {
    API.getInventory().then((res) => {
      setInventory({
        images: [...API.images],
        beers: res,
      });
    });
  }

  function toggleModal(event) {
    if (!isOpen) {
      renderModal(event.target.alt);
    }
    setIsOpen(!isOpen);
  }

  function renderModal(beerName) {
    setModalState({
      modalName: beerName,
      modalInventory: [...inventory.beers[beerName]],
    });
  }

  function handleModalFormSubmit(e) {
    e.preventDefault();
    const addToOrderObj = customerPageUtil.addToOrderInstance();
    const orderJSON = customerPageUtil.toSimpleJSON(addToOrderObj);
    const updateArr = customerPageUtil.removeBlankEntries(orderJSON);
    const fullOrderArray = [...order.order, ...updateArr];
    let tempTotalItems = 0;
    let tempTotalPrice = 0;
    for (let i = 0; i < fullOrderArray.length; i++) {
      tempTotalItems += parseInt(fullOrderArray[i].quantity);
      tempTotalPrice += parseFloat(fullOrderArray[i].subtotal);
    }
    setOrder({
      order: [...fullOrderArray],
      totalItems: tempTotalItems,
      totalPrice: tempTotalPrice,
    });

    toggleModal();
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
          <div className="modal-title">{modalState.modalName}</div>
          {modalState.modalInventory.map((x) => {
            return (
              <div className="row modal-row" key={x.id}>
                <p className="modal-item">{x.quantity}</p>
                <p className="modal-item">${x.price}</p>
                <input
                  name={`${modalState.modalName},${x.quantity},${x.price}`}
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
                  key={x.id}
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
            {order.order.map((x) => {
              return (
                <div key={x.id}>
                  <hr></hr>
                  <p className="cart-sub">Item: {`${x.name}`}</p>
                  <p className="cart-sub">Quantity: {x.quantity}</p>
                  <p className="cart-sub">Subtotal: {x.subtotal}</p>
                </div>
              );
            })}
            <div className="cart-total">
              <hr></hr>
              <p>Total Items: {order.totalItems}</p>
              <p>Total: ${order.totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerPage;
