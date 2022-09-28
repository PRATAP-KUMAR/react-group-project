import axios from 'axios';

const GET_MISSIONS_DATA = 'GET_MISSIONS_DATA';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';
const API = 'https://api.spacexdata.com/v3/missions';

const initialMissionsData = [];

const MissionsDataReducer = (state = initialMissionsData, action) => {
  switch (action.type) {
    case GET_MISSIONS_DATA:
      return [...action.payload];
    case JOIN_MISSION:
      return [
        ...state.map((mission) => {
          if (mission.mission_id !== action.id) return mission;
          return { ...mission, reserved: true };
        }),
      ];
    case LEAVE_MISSION:
      return [
        ...state.map((mission) => {
          if (mission.mission_id !== action.id) return mission;
          return { ...mission, reserved: false };
        }),
      ];
    default:
      return state;
  }
};

export const getMissionsFromAPIAction = () => (dispatch) => {
  axios.get(API).then((response) => {
    const missions = response.data;
    dispatch({ type: GET_MISSIONS_DATA, payload: missions });
  });
};

export const joinMissionAction = (id) => (dispatch) => {
  dispatch({ type: JOIN_MISSION, id });
};

export const leaveMissionAction = (id) => (dispatch) => {
  dispatch({ type: LEAVE_MISSION, id });
};

export default MissionsDataReducer;
