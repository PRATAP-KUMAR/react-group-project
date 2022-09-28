import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { dragonsReserved } from '../../Redux/Dragons/dragonsSlice';
import './style.css'

const Dragon = ({ dragon }) => {

  const [showReserved, setShowReserved] = useState(false);
  const dispatch = useDispatch();

  const handleReserve = () => {
    setShowReserved(true);
    console.log(showReserved)
    dispatch(dragonsReserved({ reserveId: dragon.id }));
  };
return (
  <>
    <li className="dragon__container">
      <div className="dragon__wrapper">
        <div className="dragon__image__container">
          <img  src={dragon.flickr_images[0]} alt="dragon" />
        </div>
        <div className="dragon_description_container">
          <h2 className="dragon__name">{dragon.name}</h2>
          <p className="dragon__description">
            {dragon.description}
          </p>
          <button
            className="dragon__reserve__btn"
            type="button"
            onClick={() => handleReserve()}
          >
            Reserve Dragon
          </button>
        </div>
      </div>
    </li>
  </>
)};

export default Dragon;
