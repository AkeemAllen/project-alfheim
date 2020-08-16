import {
  AUTH_USER,
  AUTH_USER_FAILURE,
  REGISTER_USER,
  REGISTER_USER_FAILURE,
  LOG_OUT,
  UPDATE_USER_INFO,
} from "../actions/types";

const initialState = {
  auth: false,
  loginError: null,
  registrationError: null,
  newUser: null,
  userId: null,
  username: localStorage.getItem("username"),
  firstname: localStorage.getItem("firstname"),
  lastname: localStorage.getItem("lastname"),
  email: localStorage.getItem("email"),
  contact: localStorage.getItem("contact"),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER: {
      let isVerified = false;
      if (action.payload.isVerified) {
        isVerified = true;
      }
      return {
        ...state,
        auth: isVerified,
        userId: action.payload.userId,
        email: action.payload.email,
        username: action.payload.username,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        contact: action.payload.contact,
      };
    }
    case AUTH_USER_FAILURE: {
      return {
        ...state,
        loginError: action.payload,
      };
    }
    case UPDATE_USER_INFO: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case REGISTER_USER: {
      return {
        ...state,
      };
    }
    case REGISTER_USER_FAILURE: {
      return {
        ...state,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        auth: false,
        userId: null,
      };
    }
    default:
      return state;
  }
}
