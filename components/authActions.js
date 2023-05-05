import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const USER_DATA_REQUEST = 'USER_DATA_REQUEST';
export const USER_DATA_SUCCESS = 'USER_DATA_SUCCESS';
export const USER_DATA_FAILURE = 'USER_DATA_FAILURE';

export function loginRequest() {
  return { type: LOGIN_REQUEST };
}

export function loginSuccess(user) {
  return { type: LOGIN_SUCCESS, payload: user };
}

export function loginFailure(error) {
  return { type: LOGIN_FAILURE, payload: error };
}

export function getUserDataRequest() {
  return { type: USER_DATA_REQUEST };
}

export function getUserDataSuccess(userData) {
  return { type: USER_DATA_SUCCESS, payload: userData };
}

export function getUserDataFailure(error) {
  return { type: USER_DATA_FAILURE, payload: error };
}

export function login(email, password) {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post('http://3.127.53.229:60001/api/Auth/login', {
        email,
        password,
      });
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
}

export function getUserData(userId) {
  return async (dispatch) => {
    dispatch(getUserDataRequest());
    try {
      const response = await axios.get(`http://3.127.53.229:60002/api/User/${userId}`);
      dispatch(getUserDataSuccess(response.data));
    } catch (error) {
      dispatch(getUserDataFailure(error));
    }
  };
}

