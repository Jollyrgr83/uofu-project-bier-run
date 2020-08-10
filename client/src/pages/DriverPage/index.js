import React from "react";

import "./index.css";

const dummyDrivers = [
  {
    id: 1,
    name: "Bob Smith",
  },

  {
    id: 2,
    name: "Dave Johnson",
  }
]

function DriverPage() {
  return (
    <div>
      {dummyDrivers.map(x => {
        return (
          <div className="search-card" key={x.id}>
            <div className="row">
              <div className="col-sm-8">
                <p className="card-title">{x.name}</p>                
              </div>
            </div>
          </div>
        );
      })        
      }
    </div>
  );
}

export default DriverPage;
