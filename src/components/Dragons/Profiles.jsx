import React from 'react';
import './style.css';

const SpaceProfile = ({items, header}) => {
  return (
    <div className="space__profile__container">
      <h3 className="space__profile__heading">{header}</h3>
      <ul className="space__profile__list__wrapper">
        {items
          .filter((item) => item.reserved)
          .map((item) => (
            <li
              className="space__Profile__list"
              key={item.id}
              style={
                item.length === 0
                  ? { border: 'none' }
                  : {
                    borderBottom: 'solid 1px rgba(76, 75, 75, 0.5)',
                    padding: '1rem 1rem',
                  }
              }
            >
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SpaceProfile;
