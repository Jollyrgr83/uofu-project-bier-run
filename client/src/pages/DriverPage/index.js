import React from "react";

import "./index.css";

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
    totalPrice: 109.96
  },

  {
    id: "5f35cf06ca4b11d8d4f53289",
    address: "123 Any Street, SLC, UT",
    inProgress: true,
    totalPrice: 112.76
  },
];

function DriverPage() {
  return (
    <div className="driver-main-container">
      <div className="row">
        <div className="col-sm-5 welcome-container mx-auto">
          <p className="driver-welcome mx-auto">
            Welcome [username], your current status is: [status]
          </p>
        </div>
        <div className="col-sm-5 order-container mx-auto">
          <p className="driver-orders mx-auto">
            Your active deliveries are: [active deliveries]
          </p>
        </div>
      </div>
      {dummyOrders.map((x) => {
        if (x.inProgress === true) {
          return (
            <div className="row order-card-selected mx-auto" key={x.id}>
              <div className="col-sm-8">
                <div className="row">
                  <div className="col-sm-4 order-item">Order ID:<br/>{x.id}</div>
                  <div className="col-sm-4 order-item">Price:<br/>${x.totalPrice}</div>
                </div>
                <div className="row">
                  <div className="col-sm-4 order-item">Order Details:<br/><a href="">{x.id}</a></div>
                  <div className="col-sm-4 order-item">Address:<br/>{x.address}</div>
                </div>
              </div>
              <div className="col-sm-3 text-center mx-auto my-auto order-button-container">
                <button className="driver-button red mx-auto">Unselect</button>
                <button className="driver-button blue mx-auto">Update</button>
                <button className="driver-button green mx-auto">Delivered</button>
              </div>
            </div>
          );
        } else {
          return (
            <div className="row order-card mx-auto" key={x.id}>
              <div className="col-sm-8">
                <div className="row">
                  <div className="col-sm-4 order-item">Order ID:<br/>{x.id}</div>
                  <div className="col-sm-4 order-item">Price:<br/>${x.totalPrice}</div>
                </div>
                <div className="row">
                  <div className="col-sm-4 order-item">Order Details:<br/><a href="">{x.id}</a></div>
                  <div className="col-sm-4 order-item">Address:<br/>{x.address}</div>
                </div>
              </div>
              <div className="col-sm-3 text-center mx-auto my-auto order-button-container">
                <button className="driver-button blue mx-auto">Select</button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default DriverPage;
