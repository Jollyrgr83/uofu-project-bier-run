import React from "react";

import "./index.css";

const dummyDrivers = [
  {
    id: 1,
    name: "Bob Smith",
    inProgress: false
  },

  {
    id: 2,
    name: "Dave Johnson",
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
      {dummyDrivers.map(x => {
        return (
          <div className="row" key={x.id}>
            <div className="col-sm-8">
              <p className={x.inProgress ? "order-card-selected" : "order-card"}>{x.name}</p>
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
