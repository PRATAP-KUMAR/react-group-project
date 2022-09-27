import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsFromAPIAction } from '../redux/missions/missions';
import '../components/css/Missions.css';

const Missions = () => {
  const missionsData = useSelector((state) => state.MissionsDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missionsData.length === 0) {
      dispatch(getMissionsFromAPIAction());
    }
  }, [dispatch, missionsData.length]);

  const itemList = missionsData?.map((mission) => (
    <>
      <div className="missions-data">
        <div className="col-1">
          {mission.mission_id}
        </div>
        <div className="col-2">
          {mission.mission_name}
        </div>
        <div className="col-3">
          {mission.description}
        </div>
      </div>
    </>
  ));

  return (
    <>
      <div>
        {itemList}
      </div>
    </>
  );
};

export default Missions;
