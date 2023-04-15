// authActions.js
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function loginRequest() {
  return { type: LOGIN_REQUEST };
}

export function loginSuccess(user) {
  return { type: LOGIN_SUCCESS, user };
}

export function loginFailure(error) {
  return { type: LOGIN_FAILURE, error };
}

// authReducer.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './authActions';

const initialState = {
  user: null,
  isLoggingIn: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoggingIn: true };
    case LOGIN_SUCCESS:
      return { user: action.user, isLoggingIn: false, error: null };
    case LOGIN_FAILURE:
      return { ...state, isLoggingIn: false, error: action.error };
    default:
      return state;
  }
}
