import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRockets from '../Redux/Rocket/Rockets';

const Rocket = () => {
  const rockets = useSelector((state) => state.rocketReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);
  return (
    <h2>Hi</h2>
  );
};

export default Rocket;
