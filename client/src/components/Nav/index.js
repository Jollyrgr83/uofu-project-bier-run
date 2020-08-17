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

function Nav() {
  // authentication
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <nav className="navbar navbar-light local-nav-font">
        <a className="navbar-brand text-logo" href="/">
          <span className="text-bier">BIER</span>
          <span className="text-run">RUN</span>
        </a>
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
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              {isAuthenticated ? (
                <div>
                  <li className="nav-item">
                    <a className="nav-link" href="/driver">
                      Driver Page (testing)
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/customer">
                      Place an Order
                    </a>
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
