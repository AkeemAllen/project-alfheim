import {
  AUTH_USER,
  AUTH_USER_FAILURE,
  // REGISTER_USER,
  // REGISTER_USER_FAILURE,
  LOG_OUT,
  UPDATE_USER_INFO,
} from "./types";
import jwt from "jsonwebtoken";

export const authorizeUser = (token) => (dispatch) => {
  try {
    localStorage.setItem("token", token);
    const decodedToken = jwt.verify(token, process.env.REACT_APP_SECRET);
    dispatch({
      type: AUTH_USER,
      payload: decodedToken,
    });
  } catch (err) {
    console.log("error", err);
    dispatch({
      type: AUTH_USER_FAILURE,
      payload: err,
    });
  }
};

export const updateUser = (userdata) => (dispatch) => {
  dispatch({
    type: UPDATE_USER_INFO,
    payload: userdata,
  });
};

export const createNewUser = () => (dispatch) => {};

export const logOut = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOG_OUT,
  });
};
