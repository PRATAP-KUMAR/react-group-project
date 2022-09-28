import React from 'react';
import { useDispatch } from 'react-redux';
import { dragonsReserved } from '../../Redux/Dragons/dragonsSlice';
import './style.css';

const Dragon = ({ dragon }) => {
  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(
      dragonsReserved({ reserveId: dragon.id, reserved: dragon.reserved }),
    );
  };
  return (
    <>
      <li className="dragon__container">
        <div className="dragon__wrapper">
          <div className="dragon__image__container">
            <img src={dragon.flickr_images[0]} alt="dragon" />
          </div>
          <div className="dragon_description_container">
            <h2 className="dragon__name">{dragon.name}</h2>
            <p className="dragon__description">
              {dragon.reserved && (
                <span className="show__reserve__tag">
                  reserved
                </span>
              )}
              {dragon.description}
            </p>
            <button
              className={dragon.reserved ? 'dragon__reserve__btn is-active' : 'dragon__reserve__btn'}
              type="button"
              onClick={() => handleReserve()}
            >
              {dragon.reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Dragon;
