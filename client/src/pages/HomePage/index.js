import React, { useState } from "react";
// stylesheet
import "../HomePage/HomePage.css";
// logo image
import logo from "../../assets/images/BierRunLogoNoBG.svg";
// API functions
import API from "../../util/API";

import LoginButton from "../../components/LoginButton";

// modal component from react-modal package
import Modal from "react-modal";
// style attributes for modal window
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [authModalState, setAuthModalState] = useState(false);
  const [userAuthInput, setUserAuthInput] = useState({
    loginUsername: "",
    loginPassword: "",
    signupUsername: "",
    signupPassword: "",
    signupName: "",
    signupAddress: "",
    signupType: "customer"
  });

  function handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setUserAuthInput({
      [name]: value
    });
    console.log("userAuthInput", userAuthInput);
  }

  function toggleModal(event) {
    setIsOpen(!isOpen);
  }

  function changeAuthModalState(event) {
    // false is login, true is signup
    setAuthModalState(!authModalState);
  }

  return (
    <main>
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
                {/* <LoginButton
                  classNameInput="begin-button"
                  buttonTextInput="Get Started"
                /> */}
                <button className="begin-button" onClick={toggleModal}>
                  Get Started
                </button>
              </div>

              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Login/Signup Page"
        style={customStyles}
      >
        {authModalState ? (
          <div>
            <div className="text-center mx-auto">
              <div className="auth-title">Signup</div>
              <div className="auth-label">Username</div>
              <input type="text" name="signupUsername" onChange={handleInputChange} className="auth-input" />
              <div className="auth-label">Password</div>
              <input type="password" name="signupPassword" onChange={handleInputChange} className="auth-input" />
              <div className="auth-label">Name</div>
              <input type="text" name="signupName" onChange={handleInputChange} className="auth-input" />
              <div className="auth-label">Address</div>
              <input type="text" name="signupAddress" onChange={handleInputChange} className="auth-input" />
              <div className="auth-label">Type of User</div>
              <select className="auth-select" onChange={handleInputChange} name="signupType">
                <option value="customer">Customer</option>
                <option value="driver">Driver</option>
              </select>
              <div className="text-center">
                <button className="auth-button">Signup</button>
              </div>
            </div>
            <div onClick={changeAuthModalState} className="auth-link">
              Need to log in?
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mx-auto">
              <div className="auth-title">Login</div>
              <div className="auth-label">Username</div>
              <input type="text"  name="loginUsername" onChange={handleInputChange} className="auth-input" />
              <div className="auth-label">Password</div>
              <input type="password"  name="loginPassword" onChange={handleInputChange} className="auth-input" />
              <div className="text-center">
                <button className="auth-button">Login</button>
              </div>
            </div>
            <div onClick={changeAuthModalState} className="auth-link">
              Need to sign up?
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
}

export default HomePage;
