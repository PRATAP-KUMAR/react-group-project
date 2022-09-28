import { useDispatch } from 'react-redux';
import { bookRocket, cancelReservation } from '../Redux/Rocket/RocketsRedux';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, description, img, reserved,
  } = props;
  const handleReservation = (id, e) => {
    if (e.target.textContent === 'Reserve Rocket') {
      dispatch(bookRocket(id));
    } else {
      dispatch(cancelReservation(id));
    }
  };
  return (
    <div id={id} className="rocket">
      <img className="rocket-img" src={img} alt="Rocket" />
      <div className="rocket-content">
        <h2 className="rocket-name">{name}</h2>
        <p className="rocket-info">
          <span className={reserved ? 'reserved-badge active' : 'reserved-badge'}>reserved</span>
          {description}
        </p>
        <button onClick={(event) => handleReservation(id, event)} type="button" className={reserved ? 'cancel-reservation-btn' : 'reserve-btn'}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
      </div>
    </div>
  );
};

export default Rocket;
