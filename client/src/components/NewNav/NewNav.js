import React from "react";
import "./NewNav.css";
import LoginLink from "../LoginLink";
import "../../assets/fonts/Stencil.ttf"

function NewNav() {
  return (
    <div>
      <nav className="navbar navbar-light local-nav-font">
        <a className="navbar-brand text-logo" href="/">
          <span className="text-bier">Bier</span>
          <span className="text-run">Run</span>
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
              <li className="nav-item">
                <a className="nav-link" href="/features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/driver">
                  Driver Page (testing)
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/customer">
                  Customer Page (testing)
                </a>
              </li>
              <li className="nav-item">
                <LoginLink />
              </li>
            </ul>
          </div>
          <div className="col-sm-6"></div>
        </div>
      </nav>
    </div>
  );
}

export default NewNav;
