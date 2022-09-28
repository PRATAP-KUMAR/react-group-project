import axios from 'axios';

const GET_MISSIONS_DATA = 'GET_MISSIONS_DATA';
const API = 'https://api.spacexdata.com/v3/missions';

const initialMissionsData = [];

const MissionsDataReducer = (state = initialMissionsData, action) => {
  switch (action.type) {
    case GET_MISSIONS_DATA:
      // console.log(...action.payload);
      return [...action.payload];
    default:
      return state;
  }
};

export const getMissionsFromAPIAction = () => (dispatch) => {
  axios.get(API).then((response) => {
    const missions = response.data;
    // console.log(missions);
    dispatch({ type: GET_MISSIONS_DATA, payload: missions });
  });
};

export default MissionsDataReducer;
