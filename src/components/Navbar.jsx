import React from 'react';
import planetLogo from '../images/3212580.png';

const Navbar = () => (
  <nav className="nav-container">
    <div className="logo-container">
      <img className="logo-img" src={planetLogo} alt="planet-logo" />
      <h2>Space Travelers Hub</h2>
    </div>
    <ul className="nav-links">
      <li><a href="/">Rockets</a></li>
      <li><a href="/">Mission</a></li>
      <li className="vertical-divider" />
      <li><a href="/">My Profile</a></li>
    </ul>
  </nav>
);

export default Navbar;
