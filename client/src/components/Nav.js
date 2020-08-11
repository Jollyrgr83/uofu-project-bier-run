import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/ppt-logo.png";

function Nav() {
  function AlertMsg(e) {
    alert(`you clicked ${e.target.id}`);
  }

  return (
    <div className="temp-container">
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
        <li>
          <a href="/customer">Customer (/customer)</a>
        </li>
      </ul>
      <nav className="row local-navbar">
        <div className="text-center nav-left">
          <div className="text-logo-container">
            <div className="text-logo-top">BIER</div>
            <div className="text-logo-bottom">RUN</div>
          </div>
        </div>
        <div className="text-center nav-center">
          <img className="logo" src={logo} alt="Barry" />
        </div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <div className="svg-container text-center">
          <FontAwesomeIcon
            icon={faCog}
            onClick={AlertMsg}
            className="nav-icons"
            id="account-settings"
          />
          <FontAwesomeIcon
            icon={faSignOutAlt}
            onClick={AlertMsg}
            className="nav-icons"
            id="logout"
          />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
