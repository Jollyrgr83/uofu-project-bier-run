// NAV COMPONENT
// react
import React from "react";
// stylesheet
import "./Nav.css";
// authentication
import { useAuth0 } from "@auth0/auth0-react";
// page components
import LoginLink from "../Links/LoginLink";
import LogoutLink from "../Links/LogoutLink";
// stencil font for text logo
import "../../assets/fonts/Stencil.ttf";

function Nav({ handleNav }) {
  // authentication
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <nav className="navbar navbar-light local-nav-font">
        <div className="navbar-brand text-logo" id="home" onClick={handleNav}>
          <span className="text-bier">BIER</span>
          <span className="text-run">RUN</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <div className="col-sm-6">
            <ul className="navbar-nav text-end">
              <li className="nav-item">
                <div className="nav-link" id="home" onClick={handleNav}>
                  Home
                </div>
              </li>
              {isAuthenticated ? (
                <div>
                  <li className="nav-item">
                    <div className="nav-link" id="driver" onClick={handleNav}>
                      Driver Page (testing)
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link" id="customer" onClick={handleNav}>
                      Place an Order
                    </div>
                  </li>
                  <li className="nav-item">
                    <LogoutLink />
                  </li>
                </div>
              ) : (
                <li className="nav-item">
                  <LoginLink />
                </li>
              )}
            </ul>
          </div>
          <div className="col-sm-6"></div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
