import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getDragons,
  getStatus,
  getError,
  fetchDragons,

} from '../../Redux/Dragons/dragonsSlice';
import Dragon from './Dragon';

const DragonsList = () => {
  const dispatch = useDispatch();
  const dragons = useSelector(getDragons);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDragons());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'Loading') {
    content = <p>&quot,loading...&quot,</p>;
  } else if (status === 'succeeded') {
    content = (
      <ul>
        {dragons.map((dragon) => (
          <Dragon key={dragon.id} dragon={dragon} />
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
};
export default DragonsList;
