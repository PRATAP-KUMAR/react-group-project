import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsFromAPIAction } from '../redux/missions/missions';
import '../components/css/Missions.css';

const Missions = () => {
  const missionsData = useSelector((state) => state.MissionsDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("Before use effect");
    if (missionsData.length === 0) {
      dispatch(getMissionsFromAPIAction());
      // console.log("Inside use effect");
    }
  }, [dispatch, missionsData.length]);

  const itemList = missionsData?.map((mission) => (
    <>
      <div className="missions-data">
        {mission.mission_id}
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
