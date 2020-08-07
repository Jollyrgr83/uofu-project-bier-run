import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/ppt-logo.png";
import textLogo from "../assets/ppt-logo-text.png";

function Nav() {
  return (
    <nav className="row local-navbar">
      <div className="text-center">
        <img className="text-logo" src={textLogo} alt="Bier Run" />
      </div>
      <p className="welcome mx-auto">Welcome [username], your address is: 123 Main Street, Anytown, USA, 12345</p>
      <div className="text-center">
        <img className="logo" src={logo} alt="Barry" />
      </div>
      <p className="welcome mx-auto">You have no active orders</p>
      <div className="svg-container text-center">
        <FontAwesomeIcon icon={faCog} className="nav-icons" />
        <FontAwesomeIcon icon={faSignOutAlt} className="nav-icons" />
      </div>


    </nav>
  );
}

export default Nav;
