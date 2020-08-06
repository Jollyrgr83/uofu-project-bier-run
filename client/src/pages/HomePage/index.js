import React from 'react';
import './HomePage.css';
import logo from '../assets/images/BierRunLogo.svg';

function HomePage() {
  return (
    <maindiv>
      <div class="topnav">
        <div class="topnav-centered">
          <a href="#home" class="active"><img id="center-logo" alt="logo" src={logo} /></a>
        </div>
      </div>

      <div class="about-us">
          Simple About Us
      </div>
      </maindiv>
  ) 
}

export default HomePage;
