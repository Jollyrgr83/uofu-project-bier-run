// HOMEPAGE
// react
import React from "react";
// stylesheet
import "./HomePage.css";
// logo image
import logo from "../../assets/images/BierRunLogoNoBG.svg";
// page components
import LoginButton from "../../components/Buttons/LoginButton";

function HomePage() {
  return (
    <main>
      <div className="text-center">
        <img className="logo" alt="logo" src={logo} />
      </div>
      <h1>How does it work?</h1>
      <div className="row">
        <div className="col-sm-4 thirds">
          <h2>Login</h2>
          <p>
            Login to your account. If you dont have an account you can
            register for free. Its as easy as clicking just a couple
            buttons. You can also log in with Google, if you want to make
            it that much easier.
          </p>
        </div>
        <div className="col-sm-4 thirds">
          <h2>Order</h2>
          <p>
            Scroll through our many beer options and pick your favorite!
            You can choose from a variety of common beers found at most
            retail locations. You can choose if you only want a couple for
            you or enough for an army. The choice is yours.
          </p>
        </div>
        <div className="col-sm-4 thirds">
          <h2>Relax</h2>
            <p>
              Sit back and relax while one of our drivers picks up your
              order and delivers it straight to your door.
            </p>
        </div>
      </div>
      <hr className="break-1" />
      <div className="text-center">
        <LoginButton
          classNameInput="begin-button"
          buttonTextInput="Get Started"
        />
      </div>
    </main>
  );
}

export default HomePage;
