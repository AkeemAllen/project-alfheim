import {
  AUTH_USER,
  AUTH_USER_FAILURE,
  REGISTER_USER,
  REGISTER_USER_FAILURE,
  LOG_OUT,
  UPDATE_USER_INFO,
} from "../actions/types";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn"),
  newUser: localStorage.getItem("isNewUser"),
  userId: localStorage.getItem("userId"),
  username: localStorage.getItem("username"),
  firstname: localStorage.getItem("firstname"),
  lastname: localStorage.getItem("lastname"),
  email: localStorage.getItem("email"),
  contact: "",
  emailVerified: localStorage.getItem("emailVerified"),
  uuid: localStorage.getItem("uuid"),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER: {
      return {
        ...state,
        userId: action.payload.userId,
        email: action.payload.email,
        username: action.payload.username,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        emailVerified: action.payload.emailVerified,
        uuid: action.payload.uuid,
        isLoggedIn: action.payload.isLoggedIn,
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
        state: {},
      };
    }
    default:
      return state;
  }
}
