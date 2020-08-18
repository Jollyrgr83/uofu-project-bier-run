// HOMEPAGE
// react
import React, { useState, useEffect } from "react";
// stylesheet
import "./HomePage.css";
// animation package
import { useTransition, animated, config } from "react-spring";
// logo image
import logo from "../../assets/images/BierRunLogoNoBG.svg";
// secret logo image
import easterEgg from "../../assets/images/JediMasterBarry.svg";
// page components
import LoginButton from "../../components/Buttons/LoginButton";

// used for non-mobile logo animation
const slides = [
  { id: 0, url: logo, className: "logo" },
  { id: 1, url: easterEgg, className: "secret-logo" }
];

function HomePage() {
  // sets toggleState for mobile logo animation
  const [isJedi, setIsJedi] = useState(false);
  // sets slides index for non-mobile logo animation
  const [index, setImage] = useState(0)
  // used for non-mobile logo animation
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  // updates non-mobile logo animation
  useEffect(() => void setInterval(() => setImage(state => (state + 1) % 2), 5000), [])
  // loads mobile or non-mobile logo animation
  function loadLogo() {
    if (window.screen.availWidth <= 500) {
      return (
        <div className="text-center mx-auto">
          {loadMobileImage()}
        </div>
      );
    } else {
      return (
        <div className="logo-container text-center mx-auto">
          {transitions.map(({ item, props, key }) => (
            <animated.div
              key={key}
              className={`${item.className} c mx-auto`}
              src={logo}
              alt="Normal Barry"
              style={{ ...props, backgroundImage: `url(${item.url})` }}
            ></animated.div>
          ))}
        </div>
      );
    }
  }
  // determines mobile logo img file
  function loadMobileImage() {
    if (isJedi) {
      return (
        <img className="secret-logo-mobile mx-auto" src={easterEgg} alt="Jedi Barry" onClick={becomeJedi} />
      );
    } else {
      return (
        <img className="logo-mobile mx-auto" src={logo} alt="Normal Barry" onClick={becomeJedi} />
      );
    }
  }
  // switches mobile logo on click
  function becomeJedi() {
    setIsJedi(!isJedi);
  }

  return (
    <main>
      {loadLogo()}
      <h1>How does it work?</h1>
      <div className="row">
        <div className="col-sm-4 thirds">
          <h2>Login</h2>
          <p>
            Login to your account. If you dont have an account you can register
            for free. Its as easy as clicking just a couple buttons. You can
            also log in with Google, if you want to make it that much easier.
          </p>
        </div>
        <div className="col-sm-4 thirds">
          <h2>Order</h2>
          <p>
            Scroll through our many beer options and pick your favorite! You can
            choose from a variety of common beers found at most retail
            locations. You can choose if you only want a couple for you or
            enough for an army. The choice is yours.
          </p>
        </div>
        <div className="col-sm-4 thirds">
          <h2>Relax</h2>
          <p>
            Sit back and relax while one of our drivers picks up your order and
            delivers it straight to your door.
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
