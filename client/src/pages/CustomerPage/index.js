// CUSTOMERPAGE
// react
import React, { useState, useEffect } from "react";
// stylesheet
import "./CustomerPage.css";
// API functions
import API from "../../util/API";
// utility functions
import customerPageUtil from "../../util/customerPageUtil";
// authentication
import { useAuth0 } from "@auth0/auth0-react";
// modal component from react-modal package
import Modal from "react-modal";
// style attributes for modal window
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function CustomerPage() {
  // authentication
  const { user, isAuthenticated, isLoading } = useAuth0();
  // inventory elements (logos, names, and quantity options)
  const [inventory, setInventory] = useState({ images: [], beers: {} });
  // beer selection modal open state
  const [isOpen, setIsOpen] = useState(false);
  // beer name, inventory, and quantity options for the selected beer modal
  const [modalState, setModalState] = useState({
    modalName: "",
    modalInventory: [],
  });
  // order details for shopping cart
  const [order, setOrder] = useState({
    order: [],
    totalItems: 0,
    totalPrice: 0,
  });
  // order info for order status message in top row
  const [orderMessage, setOrderMessage] = useState({
    display: "You have no active orders."
  });
  // order info for shopping cart message after submitting order
  const [placeOrderMessage, setPlaceOrderMessage] = useState({
    text: "",
    isShow: false,
  });
  // enter address modal open state
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  // user input for delivery address from enter address modal
  const [addressInfo, setAddressInfo] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    display: "not entered yet"
  });
  // useEffect to load beer inventory from API on page load
  useEffect(() => {
    loadInventory();
  }, []);

  function loadUserOrderMessage() {
    API.getUserOrderData(user.email).then((res) => {
      console.log("getUserOrder res", res);
      if (!res.data[0]) {
        setOrderMessage({ display: "You have no active orders." });
      } else {
        if (res.data[0].inProgress === false) {
          setOrderMessage({ display: `Your order ${res.data[0]._id} is waiting on a driver.`});
        } else {
          setOrderMessage({ display: `Your order ${res.data[0]._id} should arrive in less than ${res.data[0].estimatedTime} minutes.`});    
        }
      }
    });
  }

  function loadInventory() {
    API.getInventory().then((res) => {
      setInventory({
        images: [...API.images],
        beers: res,
      });
    });
  }
  // handles beer selection modal open/close
  function toggleModal(event) {
    if (!isOpen) {
      renderModal(event.target.alt);
    }
    setIsOpen(!isOpen);
  }
  // handles enter address modal open/close
  function toggleAddressModal(event) {
    if (order.totalItems === 0) {
      return;
    } else {
      setIsAddressModalOpen(!isAddressModalOpen);
    }
  }
  // renders beer selection modal based on selection
  function renderModal(beerName) {
    setModalState({
      modalName: beerName,
      modalInventory: [...inventory.beers[beerName]],
    });
  }
  // uses util functions to convert order selections to shopping cart object
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
  // captures shopping cart object and sends to API
  function placeOrder(e) {
    e.preventDefault();
    var streetInput = document.getElementById("street");
    var cityInput = document.getElementById("city");
    var stateInput = document.getElementById("state");
    var zipInput = document.getElementById("zip");
    var addressString = `${streetInput.value}, ${cityInput.value}, ${stateInput.value}, ${zipInput.value}`;
    setAddressInfo({display: addressString});
    const orderDetails = JSON.stringify(order.order);
    const orderObj = {
      orderDetails: orderDetails,
      totalPrice: order.totalPrice,
      totalItems: order.totalItems,
      customerID: user.email,
      address: addressString,
      userID: user.email
    };
    console.log("orderObj", orderObj);
    API.sendOrder(orderObj).then((res) => {
      console.log("sendOrder res", res);
      setPlaceOrderMessage({
        isShow: true,
        text: `Your order has been placed. Your order ID is: ${res.data._id}`,
      });
    });
    toggleAddressModal();
  }
  // page render
  if (isLoading) {
    return (
      <h1>Please wait... loading page</h1>
    );
  } else {
    loadUserOrderMessage();
    return (
      // protected route - only renders after successful login
      isAuthenticated && (
        <div className="main-container">
          <div className="row message-container">
            <div className="col-sm-8">
              <p className="welcome">
                Welcome {user.name}!
                <br />
                Your delivery address is:
                <br />
                {addressInfo.display}
              </p>
            </div>
            <div className="col-sm-4">
              <p className="welcome">
                {orderMessage.display}
              </p>
            </div>
          </div>
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="Inventory Order Screen"
            style={customStyles}
          >
            <form id="modalForm" className="text-center mx-auto">
              <div className="modal-title mx-auto">{modalState.modalName}</div>
              {modalState.modalInventory.map((x) => {
                return (
                  <div className="row modal-row mx-auto" key={x.id}>
                    <p className="modal-item mx-auto">{x.quantity}</p>
                    <p className="modal-item mx-auto">${x.price}</p>
                    <input
                      name={`${modalState.modalName},${x.quantity},${x.price}`}
                      type="number"
                      className="modal-item mx-auto"
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
          <Modal
            isOpen={isAddressModalOpen}
            onRequestClose={toggleAddressModal}
            contentLabel="Enter Address Screen"
            style={customStyles}
          >
            <div>
              <div className="address-modal-title mx-auto">Enter Delivery Address:</div>
              <div className="text-center">
                <div className="address-modal-label mx-auto">Street Address:</div>
                <input
                  className="address-modal-input mx-auto"
                  name="street"
                  type="text"
                  id="street"
                />
              </div>
              <div className="text-center">
                <div className="address-modal-label mx-auto">City:</div>
                <input
                  className="address-modal-input mx-auto"
                  name="city"
                  type="text"
                  id="city"
                />
              </div>
              <div className="text-center">
                <div className="address-modal-label mx-auto">State:</div>
                <input
                  className="address-modal-input mx-auto"
                  name="state"
                  type="text"
                  id="state"
                />
              </div>
              <div className="text-center">
                <div className="address-modal-label mx-auto">Zip Code:</div>
                <input
                  className="address-modal-input mx-auto"
                  name="zip"
                  type="text"
                  id="zip"
                />
              </div>
              <div className="text-center mx-auto">
                <button className="modalButton blue mx-auto" onClick={placeOrder}>Submit</button>
              </div>
            </div>
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
              <div className="cart-title mx-auto">
                <span className="text-your mx-auto">YOUR</span>
                <span className="text-cart mx-auto">CART</span>
              </div>
              <div className="shopping-cart">
                {order.order.map((x) => {
                  return (
                    <div key={x.id}>
                      <hr></hr>
                      <p className="cart-sub">Item: {x.name}</p>
                      <p className="cart-sub">Quantity: {x.quantity}</p>
                      <p className="cart-sub">Subtotal: ${x.subtotal}</p>
                    </div>
                  );
                })}
                <div className="cart-total">
                  <hr></hr>
                  <p>Total Items: {order.totalItems}</p>
                  <p>Total: ${order.totalPrice.toFixed(2)}</p>
                  <button className="orderButton mx-auto" onClick={toggleAddressModal}>
                    Place Order
                  </button>
                  <p
                    className={
                      placeOrderMessage.isShow
                        ? "placeOrderMessage show"
                        : "placeOrderMessage hide"
                    }
                  >
                    {placeOrderMessage.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default CustomerPage;
