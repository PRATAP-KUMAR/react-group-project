import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import planetLogo from '../images/3212580.png';

const Navbar = () => (
  <nav className="nav-container">
    <div className="logo-container">
      <img className="logo-img" src={planetLogo} alt="planet-logo" />
      <h2>Space Travelers Hub</h2>
    </div>
    <ul className="nav-links">
      <CustomLink to="/">Rockets</CustomLink>
      <CustomLink to="/dragons">Dragons</CustomLink>
      <CustomLink to="/mission">Missions</CustomLink>
      <li className="vertical-divider" />
      <CustomLink to="/my-profile">My Profile</CustomLink>
    </ul>
  </nav>
);

const CustomLink = ({ to, children }) => {
  const isActive = useMatch({ path: useResolvedPath(to).pathname, end: true });
  return (
    <li>
      <Link className={isActive ? 'active-link' : ''} to={to}>{children}</Link>
    </li>
  );
};

export default Navbar;
