import React, { useState } from "react";
// authentication
import { useAuth0 } from "@auth0/auth0-react";
// stylesheet
import "../HomePage/HomePage.css";
// logo image
import logo from "../../assets/images/BierRunLogoNoBG.svg";
// page components
import LoginButton from "../../components/LoginButton";

function HomePage() {
  return (
    <main>
      <div>isAuthenticated: {isAuthenticated}</div>
      <div>User: {user}</div>
      <div className="topnav">
        <div className="topnav-centered">
          <a href="#home" className="active">
            <img id="center-logo" alt="logo" src={logo} />
          </a>
        </div>
      </div>

      <div className="about-us">
        <div className="content">
          <div className="about-title">
            <h1>How does it work?</h1>
          </div>

          <div className="container-fluid">
            <div className="row abouts">
              <div className="col-sm-4">
                <h2>Login</h2>
                <p>
                  Login to your account. If you dont have an account you can
                  register for free. Its as easy as clicking just a couple
                  buttons. You can also log in with Google, if you want to make
                  it that much easier.
                </p>
              </div>

              <div className="col-sm-4">
                <h2>Order</h2>
                <p>
                  Scroll through our many beer options and pick your favorite!
                  You can choose from a variety of common beers found at most
                  retail locations. You can choose if you only want a couple for
                  you or enough for an army. The choice is yours.
                </p>
              </div>

              <div className="col-sm-4">
                <h2>Relax</h2>
                <p>
                  Sit back and relax while one of our drivers picks up your
                  order and delivers it straight to your door.
                </p>
              </div>
            </div>
          </div>

          <hr className="break-1" />

          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>

              <div className="col-md-4">
                <LoginButton
                  classNameInput="begin-button"
                  buttonTextInput="Get Started"
                />
              </div>

              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
