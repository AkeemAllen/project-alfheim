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
  newUser: null,
  userId: null,
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  contact: "",
  emailVerified: false,
  uuid: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER: {
      return {
        ...state,
        auth: action.payload.emailVerified,
        userId: action.payload.userId,
        email: action.payload.email,
        username: action.payload.username,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        emailVerified: action.payload.emailVerified,
        uuid: action.payload.uuid,
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
