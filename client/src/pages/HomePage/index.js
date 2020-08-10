import React from 'react';
import './HomePage.css';
// import logo from '../assets/images/BierRunLogo.svg';

function HomePage() {
  return (
    <main>
      <div className="topnav">
        <div className="topnav-centered">
          <a href="#home" className="active"><img id="center-logo" alt="logo" src="" /></a>
        </div>
      </div>

      <div className="about-us">
          Simple About Us
      </div>
    </main>
  ) 
}

export default HomePage;
