import React from 'react';
import './style.css';

const Dragon = ({ dragon }) => (
  <>
    <li className="dragon__container">
      <div className="dragon__wrapper">
        <div className="dragon__image__container">
          <img src={dragon.flickr_images[0]} alt="dragon" />
        </div>
        <div className="dragon_description_container">
          <h2 className="dragon__name">{dragon.name}</h2>
          <p className="dragon__description">
            {dragon.description}
          </p>
          <button
            className="dragon__reserve__btn"
            type="button"
          >
            Reserve Dragon
          </button>
        </div>
      </div>
    </li>
  </>
);

export default Dragon;
