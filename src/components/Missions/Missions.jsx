import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsFromAPIAction } from '../../Redux/Missions/missions';
import Mission from './Mission';
import MissionHeader from './MissionHeader';

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
      <MissionHeader />
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
