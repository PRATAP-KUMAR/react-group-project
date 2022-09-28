import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsFromAPIAction } from '../../Redux/Missions/missions';
import Mission from './Mission';
import '../css/Missions.css';

const Missions = () => {
  const missionsData = useSelector((state) => state.MissionsDataReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missionsData.length === 0) {
      dispatch(getMissionsFromAPIAction());
    }
  }, [dispatch, missionsData.length]);

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
        {missionsData.map((mission) => (
          <Mission
            key={mission.mission_id}
            missionId={mission.mission_id}
            missionName={mission.mission_name}
            description={mission.description}
            reserved={mission.reserved}
          />
        ))}
      </div>
    </>
  );
};
export default Missions;
