import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getStatus,
  fetchDragons,
} from '../../Redux/Dragons/dragonsSlice';

const DragonsList = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDragons());
    }
  }, [status, dispatch]);

  return <div>DragonList</div>;
};

export default DragonsList;
