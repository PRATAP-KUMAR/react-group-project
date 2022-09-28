import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKET = 'GET_ROCKET';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';

const fetchRockets = () => (dispatch) => {
  axios.get(API_URL).then((response) => {
    const rockets = response.data;
    dispatch({ type: GET_ROCKET, rockets });
  });
};

const bookRocket = (id) => (dispatch) => {
  dispatch({ type: RESERVE_ROCKET, id });
};

const cancelReservation = (id) => (dispatch) => {
  dispatch({ type: CANCEL_RESERVATION, id });
};

const initialState = [];

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKET:
      return [
        ...action.rockets,
      ];
    case RESERVE_ROCKET:
      return [
        ...state.map((rocket) => {
          if (rocket.rocket_id !== action.id) {
            // console.log(rocket.rocket_id, action.id);
            return rocket;
          }
          return { ...rocket, reserved: true };
        }),
      ];
    case CANCEL_RESERVATION:
      return [
        ...state.map((rocket) => {
          if (rocket.rocket_id !== action.id) {
            // console.log(rocket.rocket_id, action.id);
            return rocket;
          }
          return { ...rocket, reserved: false };
        }),
      ];
    default: return state;
  }
};

export default fetchRockets;
export { rocketReducer, bookRocket, cancelReservation };
