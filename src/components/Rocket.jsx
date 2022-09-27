import { useDispatch } from 'react-redux';
import { bookRocket } from '../Redux/Rocket/RocketsRedux';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, description, img,
  } = props;
  const reserveRocket = (id) => {
    dispatch(bookRocket(id));
  };

  return (
    <div id={id} className="rocket">
      <img className="rocket-img" src={img} alt="Rocket" />
      <div className="rocket-content">
        <h2 className="rocket-name">{name}</h2>
        <p className="rocket-info">{description}</p>
        <button onClick={() => reserveRocket(id)} type="button" className="reserve-btn">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rocket;
