import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { getDragons } from '../../Redux/Dragons/dragonsSlice';

const DragonProfile = () => {
  const dragons = useSelector(getDragons);
  return (
    <div className="dragon__profile__container">
      <h3 className="dragon__profile__heading">My Dragons</h3>
      <ul className="dragon__profile__list__wrapper">
        {dragons
          .filter((dragon) => dragon.reserved)
          .map((dragon) => (
            <li
              className="dragon__Profile__list"
              key={dragon.id}
              style={
                dragon.length === 0
                  ? { border: 'none' }
                  : {
                    borderBottom: 'solid 1px rgba(76, 75, 75, 0.5)',
                    padding: '1rem 1rem',
                  }
              }
            >
              {dragon.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DragonProfile;
