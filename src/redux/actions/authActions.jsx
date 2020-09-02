import {
  AUTH_USER,
  AUTH_USER_FAILURE,
  LOG_OUT,
  UPDATE_USER_INFO,
} from "./types";
import jwt from "jsonwebtoken";

export const authorizeUser = (token, firstTimeLogIn) => (dispatch) => {
  try {
    const decodedToken = jwt.verify(token, process.env.REACT_APP_SECRET);
    localStorage.setItem("token", token);
    localStorage.setItem("userId", decodedToken.userId);
    localStorage.setItem("username", decodedToken.username);
    localStorage.setItem("firstname", decodedToken.firstname);
    localStorage.setItem("lastname", decodedToken.lastname);
    localStorage.setItem("email", decodedToken.email);
    localStorage.setItem("iat", decodedToken.iat);
    localStorage.setItem("exp", decodedToken.exp);
    localStorage.setItem("firstTimeLogIn", firstTimeLogIn);
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
  localStorage.clear();
  dispatch({
    type: LOG_OUT,
  });
};
