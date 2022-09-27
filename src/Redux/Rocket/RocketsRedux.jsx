import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKET = 'GET_ROCKET';

const fetchRockets = () => (dispatch) => {
  axios.get(API_URL).then((response) => {
    const rockets = response.data;
    dispatch({ type: GET_ROCKET, rockets });
  });
};

const initialState = [];

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKET:
      console.log(...action.rockets);
      return [
        ...action.rockets,
      ];
    default: return state;
  }
};

export default fetchRockets;
export { rocketReducer };
