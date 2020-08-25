import {
  GET_ROOMS,
  UPDATE_ROOM,
  ADD_ROOM,
  DELETE_ROOM,
  REMOVE_RULE,
  REMOVE_AMENITY,
} from "./types";

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
