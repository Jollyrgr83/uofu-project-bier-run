import React from "react";

import LoginButton from "./LoginButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/ppt-logo.png";
import textLogo from "../assets/ppt-logo-text.png";

function Nav() {
  function AlertMsg(e) {
    alert(`you clicked ${e.target.id}`);
  }

  return (
    <div>
    <nav className="row local-navbar">
      <div className="text-center nav-left">
        {/* <img className="text-logo" src={textLogo} alt="Bier Run" /> */}
        <div className="text-logo-container">
          <div className="text-logo-top">BIER</div>
          <div className="text-logo-bottom">RUN</div>
        </div>
      </div>
      <div className="text-center nav-center">
        <img className="logo" src={logo} alt="Barry" />
      </div>
      <div className="svg-container text-center">
        <FontAwesomeIcon icon={faCog} onClick={AlertMsg} className="nav-icons" id="account-settings" />
        <FontAwesomeIcon icon={faSignOutAlt} onClick={AlertMsg} className="nav-icons" id="logout" />
        {/* <FontAwesomeIcon icon={faDoorClosed} onClick={AlertMsg} className="nav-icons" /> */}
      </div>


    </nav>
    <div className="row message-container">
      <p className="welcome mx-auto">Welcome [username], your address is: 123 Main Street, Anytown, USA, 12345</p>
      <p className="welcome mx-auto">You have no active orders</p>
    </div>
    <ul>
      <li>
        <a href="/">Home (/)</a>
      </li>
      <li>
        <a href="/auth/login">Login (/auth/login)</a>
      </li>
      <li>
        <a href="/home">Login Page (/home)</a>
      </li>
      <li>
        <a href="/driver">Driver (/driver)</a>
      </li>
    </ul>
    <div className="row">
      <LoginButton />
    </div>
    </div>
  );
}

export default Nav;
