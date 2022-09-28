import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsFromAPIAction, joinMissionAction, leaveMissionAction } from '../Redux/Missions/missions';
import '../components/css/Missions.css';

const Missions = () => {
  const missionsData = useSelector((state) => state.MissionsDataReducer);
  console.log(missionsData);
  const dispatch = useDispatch();

  const handleButtonClickAction = (e) => {
    e.preventDefault();
    const { id } = e.target;
    if (e.target.textContent === 'Join Mission') dispatch(joinMissionAction(id));
    if (e.target.textContent === 'Leave Mission') dispatch(leaveMissionAction(id));
  };

  useEffect(() => {
    if (missionsData.length === 0) {
      dispatch(getMissionsFromAPIAction());
      // console.log(missionsData[0]);
    }
  }, [dispatch, missionsData.length]);

  const itemList = missionsData.map((mission) => (
    <>
      {console.log(mission.reserved)}
      <div className="missions-data">
        <div className="col-1">
          {mission.mission_name}
        </div>
        <div className="col-2">
          {mission.description}
        </div>
        <div className={mission.reserved ? 'col-3 reserved' : 'col-3 unreserved'}>
          {mission.reserved ? 'Active Member' : 'Not a Member'}
        </div>
        <div className={mission.reserved ? 'col-4 join-mission' : 'col-4 leave-mission'}>
          <button
            type="submit"
            id={mission.mission_id}
            onClick={handleButtonClickAction}
          >
            {mission.reserved ? 'Leave Mission' : 'Join Mission'}
          </button>
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
