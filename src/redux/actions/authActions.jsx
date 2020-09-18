import { AUTH_USER, LOG_OUT, UPDATE_USER_INFO } from "./types";
// import jwt from "jsonwebtoken";

export const authorizeUser = (data) => (dispatch) => {
  const additionalInfo = data.additionalUserInfo.profile;

  const token = data.credential.idToken;
  const isNewUser = data.additionalUserInfo.isNewUser;
  const uuid = data.user.uid;
  const firstname = additionalInfo.given_name;
  const lastname = additionalInfo.family_name;
  const photo = additionalInfo.picture;
  const emailVerified = additionalInfo.verified_email;
  const email = data.user.email;
  const username = additionalInfo.name;
  const userId = data.userId;

  localStorage.setItem("token", token);
  localStorage.setItem("firstname", firstname);
  localStorage.setItem("lastname", lastname);
  localStorage.setItem("photo", photo);
  localStorage.setItem("email", email);
  localStorage.setItem("username", username);
  localStorage.setItem("emailVerified", emailVerified);
  localStorage.setItem("isNewUser", isNewUser);
  localStorage.setItem("userId", userId);
  localStorage.setItem("uuid", uuid);

  return dispatch({
    type: AUTH_USER,
    payload: {
      token,
      isNewUser,
      username,
      firstname,
      lastname,
      photo,
      emailVerified,
      email,
      uuid,
      userId,
    },
  });
};

export const authUserEmail = (data) => (dispatch) => {
  const firstname = data.firstname;
  const lastname = data.lastname;
  const username = data.username;
  const email = data.user.email;
  const token = data.user.xa;
  const isNewUser = data.additionalUserInfo.isNewUser;
  const emailVerified = data.user.emailVerified;

  localStorage.setItem("userData", {
    firstname,
    lastname,
    username,
    email,
    token,
    emailVerified,
    isNewUser,
  });

  dispatch({
    type: AUTH_USER,
    payload: {
      token,
      isNewUser,
      username,
      firstname,
      lastname,
      emailVerified,
      email,
    },
  });
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
