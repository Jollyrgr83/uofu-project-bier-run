import React, { useState, useEffect } from "react";
// stylesheet
import "./index.css";
// API functions
import API from "../../util/API";
// modal component from react-modal package
import Modal from "react-modal";
Modal.setAppElement("#root");

// const orderSchema = new Schema({
//   orderDetails: { type: map, of: String },
//   totalPrice: { type: Number, required: true },
//   customerID: { type: String, required: true },
//   inProgress: { type: Boolean, default: false, required: true },
//   driverID: { type: String },
//   estimatedTime: { type: Number },
//   complete: { type: Boolean, default: false, required: true },
//   deliveredDate: { type: Date },
//   date: { type: Date, default: Date.now }
// });

const dummyOrders = [
  {
    id: "5f35cf06ca4b11d8d4f53288",
    address: "123 Any Street, SLC, UT",
    inProgress: false,
    totalPrice: 109.96,
  },

  {
    id: "5f35cf06ca4b11d8d4f53289",
    address: "123 Any Street, SLC, UT",
    inProgress: true,
    totalPrice: 112.76,
  },
];

const dummyState = false;

function DriverPage() {
  const [welcomeMessage, setWelcomeMessage] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [deliveryState, setDeliveryState] = useState();
  const [orders, setOrders] = useState({
    sortedOrders: [],
  });

  useEffect(() => {
    loadOrders();
  }, []);

  function loadOrders() {
    const sortedArray = dummyOrders.sort((a, b) => {
      if (a.inProgress > b.inProgress) {
        return -1;
      } else {
        return 1;
      }
    });
    setOrders({
      rawOrders: [...dummyOrders],
      sortedOrders: [...sortedArray],
    });
    loadUserData();
  }

  function loadUserData() {
    // get user info from login and database
    // use setWelcomeMessage to set { username: username, status: status, numberOfActiveOrders: numberOfActiveOrders }
    setDeliveryState(dummyState);
  }

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function selectOrder() {
    // use API to update order's inProgress to true and send to database
    // trigger loadOrders to refresh order list
    toggleModal();
  }

  function updateDeliveryTime(event) {
    // event.preventDefault();
    toggleModal();
  }

  function deliverOrder() {
    // use API to update order status as delivered
    // trigger loadOrders to refresh order list
  }

  function unselectOrder() {
    // use API to update order's inProgress to false
    // trigger loadOrders to refresh order list
  }

  function updateDriverStatus() {
    // use API to update driver status
    // trigger loadUserData to refresh user data
    setDeliveryState(!deliveryState);
  }

  return (
    <div className="driver-main-container">
      <div className="row welcome-container mx-auto">
        <div className="col-sm-8 mx-auto">
          <div className="mx-auto">
            Welcome [username],
            <br />
            You have [#] active deliveries.
            <br />
            Your current status is:
            <span
              className={
                deliveryState
                  ? "status active mx-auto"
                  : "status inactive mx-auto"
              }
            >
              {deliveryState ? " Active" : " Inactive"}
            </span>
          </div>
        </div>
        <div className="col-sm-3 text-center mx-auto my-auto order-button-container">
          {deliveryState ? (
            <button
              onClick={updateDriverStatus}
              className="driver-button red mx-auto my-auto"
            >
              Stop Delivering
            </button>
          ) : (
            <button
              onClick={updateDriverStatus}
              className="driver-button green mx-auto my-auto"
            >
              Start Delivering
            </button>
          )}
        </div>
      </div>
      {orders.sortedOrders.map((x) => {
        if (x.inProgress === true) {
          return (
            <div className="row order-card-selected mx-auto" key={x.id}>
              <div className="col-sm-8">
                <div className="row">
                  <div className="col-sm-4 order-item">
                    Order ID:
                    <br />
                    {x.id}
                  </div>
                  <div className="col-sm-4 order-item">
                    Price:
                    <br />${x.totalPrice}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 order-item">
                    Order Details:
                    <br />
                    <a href="">{x.id}</a>
                  </div>
                  <div className="col-sm-4 order-item">
                    Address:
                    <br />
                    {x.address}
                  </div>
                </div>
              </div>
              <div className="col-sm-3 text-center mx-auto my-auto order-button-container">
                <button
                  onClick={unselectOrder}
                  className="driver-button red mx-auto"
                >
                  Unselect
                </button>
                <button
                  onClick={toggleModal}
                  className="driver-button blue mx-auto"
                >
                  Update
                </button>
                <button
                  onClick={deliverOrder}
                  className="driver-button green mx-auto"
                >
                  Delivered
                </button>
              </div>
            </div>
          );
        } else {
          return (
            <div className="row order-card mx-auto" key={x.id}>
              <div className="col-sm-8">
                <div className="row">
                  <div className="col-sm-4 order-item">
                    Order ID:
                    <br />
                    {x.id}
                  </div>
                  <div className="col-sm-4 order-item">
                    Price:
                    <br />${x.totalPrice}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 order-item">
                    Order Details:
                    <br />
                    <a href="">{x.id}</a>
                  </div>
                  <div className="col-sm-4 order-item">
                    Address:
                    <br />
                    {x.address}
                  </div>
                </div>
              </div>
              <div className="col-sm-3 text-center mx-auto my-auto order-button-container">
                <button
                  onClick={selectOrder}
                  className="driver-button blue mx-auto"
                >
                  Select
                </button>
              </div>
            </div>
          );
        }
      })}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Estimated Delivery Time"
      >
        <div className="mx-auto my-auto">
          <div className="modal-title-driver mx-auto">
            Enter an estimated delivery time (in minutes):
          </div>
          <div className="text-center mx-auto">
            <input
              type="number"
              name="deliveryTime"
              className="modal-input mx-auto"
            />
            <button
              type="submit"
              onClick={updateDeliveryTime}
              className="driver-button blue modal-button mx-auto"
            >
              Update
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DriverPage;
