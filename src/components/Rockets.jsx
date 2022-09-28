import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRockets from '../Redux/Rocket/RocketsRedux';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);
  return (
    <main className="rockets-container">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.rocket_id}
          id={rocket.rocket_id}
          name={rocket.rocket_name}
          description={rocket.description}
          img={rocket.flickr_images[0]}
          reserved={rocket.reserved}
        />
      ))}
    </main>
  );
};

export default Rockets;
