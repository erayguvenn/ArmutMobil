import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    USER_DATA_REQUEST,
    USER_DATA_SUCCESS,
    USER_DATA_FAILURE,
  } from './authActions';
  
  const initialState = {
    isLoading: false,
    isLoggedIn: false,
    userId: null,
    userData: null,
    error: null,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN_REQUEST:
      case USER_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isLoggedIn: true,
          userId: action.payload,
          error: null,
        };
      case USER_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          userData: action.payload,
          error: null,
        };
      case LOGIN_FAILURE:
      case USER_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  