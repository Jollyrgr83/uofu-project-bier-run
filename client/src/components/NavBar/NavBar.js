import React from 'react';
import './NavBar.css';
import logo from "../../assets/images/BierRunLogoNoBG.svg"

function NavBar() {
  return (
    <nav>
      <div class="topnav">


        <a href="place-order" id="order-btn">Place order Here</a>

        <div class="topnav-centered">
          <a href="#home" class="active"><img id="center-logo" alt="logo" src= {logo} /></a>
        </div>
  
        <div class="topnav-right">
          <a href="login" class="nav-btn">Login</a>
          <a href="#register" class="nav-btn">Register</a>
        </div>

      </div>
    </nav>
  )
}

export default NavBar;
