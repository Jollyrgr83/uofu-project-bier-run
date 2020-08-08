import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/ppt-logo.png";
import textLogo from "../assets/ppt-logo-text.png";

function Nav() {
  function AlertMsg(e) {
    alert(`you clicked ${e}`);
  }

  return (
    <div>
    <nav className="row local-navbar">
      <div className="text-center nav-left">
        <img className="text-logo" src={textLogo} alt="Bier Run" />
      </div>
      <div className="text-center nav-center">
        <img className="logo" src={logo} alt="Barry" />
      </div>
      <div className="svg-container text-center">
        <FontAwesomeIcon icon={faCog} onClick={AlertMsg} className="nav-icons" />
        <FontAwesomeIcon icon={faSignOutAlt} onClick={AlertMsg} className="nav-icons" />
        {/* <FontAwesomeIcon icon={faDoorClosed} onClick={AlertMsg} className="nav-icons" /> */}
      </div>


    </nav>
    <div className="row">
      <p className="welcome mx-auto">Welcome [username], your address is: 123 Main Street, Anytown, USA, 12345</p>
      <p className="welcome mx-auto">You have no active orders</p>
    </div>
    </div>
  );
}

export default Nav;
