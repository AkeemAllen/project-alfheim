import {
  GET_ROOMS,
  UPDATE_ROOM,
  ADD_ROOM,
  DELETE_ROOM,
  REMOVE_RULE,
  REMOVE_AMENITY,
} from "./types";
import axios from "axios";

export const addOwnerRoomsToState = (rooms) => (dispatch) => {
  dispatch({
    type: GET_ROOMS,
    payload: rooms,
  });
};

export const addRoom = (room) => (dispatch) => {
  dispatch({
    type: ADD_ROOM,
    payload: room,
  });
};

export const updateRoom = (fieldToUpdate, value, index) => (dispatch) => {
  dispatch({
    type: UPDATE_ROOM,
    payload: { fieldToUpdate, index, value },
  });
};

export const deleteRoom = (id) => (dispatch) => {
  console.log(id);
  dispatch({
    type: DELETE_ROOM,
    payload: id,
  });
};

export const removeRule = (id, rule) => (dispatch) => {
  dispatch({
    type: REMOVE_RULE,
    payload: { id, rule },
  });
};

export const removeAmenity = (id, amenity) => (dispatch) => {
  dispatch({
    type: REMOVE_AMENITY,
    payload: { id, amenity },
  });
};

export const uploadImage = (id, formData, addImage, index) => (dispatch) => {
  let imageUploadUri;
  process.env.NODE_ENV !== "production"
    ? (imageUploadUri = "http://localhost:8081/upload")
    : (imageUploadUri = `${process.env.REACT_APP_BASE_URI}/upload`);

  axios
    .post(imageUploadUri, formData)
    .then((res) => {
      addImage({ variables: { id, image: res.data.file.filename } });
      return res;
    })
    .then((res) => {
      dispatch(updateRoom("image", res.data.file.filename, index));
    })
    .catch((err) => {
      throw err;
    });
};
