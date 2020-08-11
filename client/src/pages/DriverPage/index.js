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

const orderDB = {
  cost: 99.99,
  description: "6 pack Bud Light"
}

const dummyOrders = [
  {
    id: 1,
    name: "Bob Smith",
    details: [orderDB],
    address: "123 Any Street, SLC, UT",
    inProgress: false
  },

  {
    id: 2,
    name: "Dave Johnson",
    details: [orderDB],
    address: "123 Any Street, SLC, UT",
    inProgress: true
  }
];


function DriverPage() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-5 welcome-container mx-auto">
          <p className="driver-welcome mx-auto">Welcome [username], your current status is: [status]</p>
        </div>
        <div className="col-sm-2 toggle-container">
          <label className="switch mx-auto text-center">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="col-sm-5 order-container mx-auto">
          <p className="driver-orders mx-auto">Your active deliveries are: [active deliveries]</p>
        </div>
      </div>
      {dummyOrders.map(x => {
        return (
          <div className="row" key={x.id}>
            <div className="col-sm-8">
              <p className={x.inProgress ? "order-card-selected" : "order-card"}>{x.id} {x.name} {x.details} {x.address}</p>
              <button className="driver-select-button">Select</button>              
            </div>
          </div>
        );
      })        
      }
    </div>
  );
}

export default DriverPage;
