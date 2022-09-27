import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsFromAPIAction } from '../Redux/Missions/missions';
import '../components/css/Missions.css';

const Missions = () => {
  const missionsData = useSelector((state) => state.MissionsDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missionsData.length === 0) {
      dispatch(getMissionsFromAPIAction());
    }
  }, [dispatch, missionsData.length]);

  const itemList = missionsData.map((mission) => (
    <>
      <div className="missions-data">
        <div className="col-1">
          {mission.mission_name}
        </div>
        <div className="col-2">
          {mission.description}
        </div>
        <div className="col-3">
          status
        </div>
        <div className="col-4">
          Join/Leave
        </div>
      </div>
    </>
  ));

  return (
    <>
      <div className="missions-data-header">
        <div className="col-1">
          Mission
        </div>
        <div className="col-2">
          Description
        </div>
        <div className="col-3">
          Status
        </div>
        <div className="col-4" />
      </div>
      <div>
        {itemList}
      </div>

    </>
  );
};

export default Missions;
