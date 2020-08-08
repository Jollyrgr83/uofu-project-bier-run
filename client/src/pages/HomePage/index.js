import React from 'react';
import "../HomePage/HomePage.css"
import logo from "../../assets/images/BierRunLogoNoBG.svg"

function HomePage() {
  return (
    <main>
      <div class="topnav">
        <div class="topnav-centered">
          <a href="#home" class="active"><img id="center-logo" alt="logo" src={logo} /></a>
        </div>
      </div>

      <div class="about-us">

        <div class="content">

          <div class="about-title">
            <h1>How does it work?</h1>
          </div>

          <ul class="columns-3">
            <li>
              <h2>Login</h2>
              <p>Login to your account. If you dont have an account you can register for free. Its as easy as clicking just a couple buttons. You can also log in with Google, if you want to make it that much easier.</p>
            </li>

            <li>
              <h2>Order</h2>
              <p>Scroll through our many beer options and pick your favorite! You can choose from a variety of common beers found at most retail locations. You can choose if you only want a couple for you or enough for an army. The choice is yours.</p>
            </li>

            <li>
              <h2>Wait</h2>
              <p>Sit back and relax while one of our drivers picks up your order and delivers it straight to your door.</p>
            </li>
          </ul>

          {/* <div class="test-div"><h1>Test Div</h1></div> */}
        </div>

      </div>



    </main>
  )
}

export default HomePage;
