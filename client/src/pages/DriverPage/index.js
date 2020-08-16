// DRIVERPAGE
// react
import React, { useState, useEffect } from "react";
// stylesheet
import "./DriverPage.css";
// API functions
import API from "../../util/API";
// utils
import driverPageUtil from "../../util/driverPageUtil";
// authentication
import { useAuth0 } from "@auth0/auth0-react";
// modal component from react-modal package
import Modal from "react-modal";
// style attributes for modal window
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

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

function DriverPage() {
  // authentication
  const { user, isAuthenticated, isLoading } = useAuth0(); 
  // number of selected deliveries for message in top row
  const [selectedDeliveries, setSelectedDeliveries] = useState({
    count: 0
  });
  // ETA modal open state
  const [isOpen, setIsOpen] = useState(false);
  // stores users delivery state (active/inactive)
  const [deliveryState, setDeliveryState] = useState(false);
  // stores orders from API call
  const [orders, setOrders] = useState({
    sortedOrders: [],
  });
  // used to identify active order when updating selected status and ETA
  const [activeOrder, setActiveOrder] = useState();
  // useEffect to load orders from API on page load
  useEffect(() => {
    loadOrders();
  }, []);
  // loads orders from API and sorts based on selected status
  function loadOrders() {
    API.getOrders().then(res => {
      console.log("getOrders res.data: ", res.data);
      const sortedArray = driverPageUtil.sortBySelectedStatus(res.data);
      const numSelectedOrders = driverPageUtil.countSelectedOrders(res.data);
      console.log("sortedOrders", sortedArray);
      setOrders({
        rawOrders: [...res.data],
        sortedOrders: [...sortedArray],
      });
      setSelectedDeliveries({
        count: numSelectedOrders
      });
    });
  }
  // handles ETA modal open/close
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  // updates order status as selected to API
  function selectOrder(event) {
    toggleModal();
    setActiveOrder(event.target.id);
  }
  // updates order ETA to API
  function updateDeliveryTime(event) {
    const selectedETA = document.getElementById("ETA");
    API.selectOrder(activeOrder, selectedETA.value).then(res => {
      console.log("selectOrder res", res);
      // trigger loadOrders to refresh order list
      loadOrders();
    });
    toggleModal();
  }
  // updates order delivered status to API
  function deliverOrder(event) {
    setActiveOrder(event.target.id);
    // use API to update order status as delivered
    API.deliverOrder(event.target.id).then(res => {
      // trigger loadOrders to refresh order list
      loadOrders();
    });
  }
  // updates order status as unselected to API
  function unselectOrder(event) {
    setActiveOrder(event.target.id);
    // use API to update order's inProgress to false
    API.unselectOrder(event.target.id).then(res => {
      // trigger loadOrders to refresh order list
      loadOrders();
    });
  }
  // updates drivers delivery status to API
  function updateDriverStatus() {
    // use API to update driver status
    // trigger loadSelectedOrders to refresh user data
    setDeliveryState(!deliveryState);
  }
  // gets pdf of order details
  function getPDF(event) {
    API.getPDF(event.target.id);
  }

  console.log("isAuthenticated", isAuthenticated);
  console.log("user", user);

  // page render
  if (isLoading) {
    return (
      <h1>Please wait... loading page</h1>
    );
  } else {
    return (
      // protected route - only renders after successful login
      // isAuthenticated && 
      (
        <div className="driver-main-container">
          <div className="row welcome-container mx-auto">
            <div className="col-sm-8">
              <div className="mx-auto">
                Welcome {user.name},
                <br />
                You have selected {selectedDeliveries.count} deliveries.
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
                <div className="row order-card-selected mx-auto" key={x._id}>
                  <div className="col-sm-8">
                    <div className="row">
                      <div className="col-sm-4 order-item">
                        Order ID:
                        <br />
                        {x._id}
                      </div>
                      <div className="col-sm-4 order-item">
                        Price:
                        <br />${parseFloat((x.totalPrice).toFixed(2))}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 order-item">
                        Order Details:
                        <br />
                        <div onClick={getPDF} className="order-link" id={x._id}>{x._id}</div>
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
                      id={x._id}
                    >
                      Unselect
                    </button>
                    <button
                      onClick={selectOrder}
                      className="driver-button blue mx-auto"
                      id={x._id}
                    >
                      Update
                    </button>
                    <button
                      onClick={deliverOrder}
                      className="driver-button green mx-auto"
                      id={x._id}
                    >
                      Delivered
                    </button>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="row order-card mx-auto" key={x._id}>
                  <div className="col-sm-8">
                    <div className="row">
                      <div className="col-sm-4 order-item">
                        Order ID:
                        <br />
                        {x._id}
                      </div>
                      <div className="col-sm-4 order-item">
                        Price:
                        <br />${parseFloat((x.totalPrice).toFixed(2))}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 order-item">
                        Order Details:
                        <br />
                        <div onClick={getPDF} className="order-link" id={x._id}>{x._id}</div>
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
                      id={x._id}
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
            style={customStyles}
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
                  id="ETA"
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
      )
    );
  }
}

export default DriverPage;
