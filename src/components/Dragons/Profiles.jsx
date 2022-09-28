import React from 'react';
import './style.css';

const SpaceProfile = ({ className, name }) => (
  <li className={className}>
    {name}
  </li>
);

export default SpaceProfile;
