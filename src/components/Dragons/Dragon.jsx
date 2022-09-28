import React from 'react';
<<<<<<< HEAD
import './style.css';

const Dragon = ({ dragon }) => (
  <>
    <li className="dragon__container">
      <div className="dragon__wrapper">
        <div className="dragon__image__container">
          <img src={dragon.flickr_images[0]} alt="dragon" />
=======
import { useDispatch } from 'react-redux';
import { dragonsReserved } from '../../Redux/Dragons/dragonsSlice';
import './style.css';

const Dragon = ({ dragon }) => {
  const dispatch = useDispatch();
  const color = {
    reserved: '#f66f1c',
    calcelReserve: '#00c7b6',
    reserveIndication: '#04a598',
  };

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
                <span
                  className="show__reserve__tag"
                  style={{
                    background: `${color.reserveIndication}`,
                    paddingInline: '10px',
                    borderRadius: '5px',
                    marginRight: '10px',
                  }}
                >
                  reserved
                </span>
              )}
              {dragon.description}
            </p>
            <button
              className="dragon__reserve__btn"
              style={
                dragon.reserved
                  ? { background: `${color.reserved}` }
                  : { background: `${color.calcelReserve}` }
              }
              type="button"
              onClick={() => handleReserve()}
            >
              {dragon.reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
            </button>
          </div>
>>>>>>> 8c80e187bbad3befa9adfd964097acc6bc855ad7
        </div>
      </li>
    </>
  );
};

export default Dragon;
