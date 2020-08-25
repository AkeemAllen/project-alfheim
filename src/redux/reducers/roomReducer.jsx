import {
  GET_ROOMS,
  UPDATE_ROOM,
  ADD_ROOM,
  DELETE_ROOM,
  REMOVE_RULE,
  REMOVE_AMENITY,
} from "../actions/types";

const initialState = {
  rooms: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ROOMS: {
      return {
        ...state,
        rooms: action.payload,
      };
    }
    case ADD_ROOM: {
      const room = action.payload;
      return {
        ...state,
        rooms: [...state.rooms, room],
      };
    }
    case UPDATE_ROOM: {
      state.rooms.forEach((room, index) => {
        if (index === action.payload.index) {
          if (action.payload.fieldToUpdate === "rules") {
            room[`${action.payload.fieldToUpdate}`].push(action.payload.value);
          } else if (action.payload.fieldToUpdate === "amenities") {
            room[`${action.payload.fieldToUpdate}`].push(action.payload.value);
          } else {
            room[`${action.payload.fieldToUpdate}`] = action.payload.value;
          }
        }
      });
      return {
        ...state,
        rooms: [...state.rooms],
      };
    }
    case DELETE_ROOM: {
      state.rooms = state.rooms.filter((room) => room.id !== action.payload);
      return {
        ...state,
        rooms: [...state.rooms],
      };
    }
    case REMOVE_RULE: {
      state.rooms.forEach((room) => {
        if (room.id === action.payload.id) {
          room.rules = room.rules.filter(
            (rule) => rule !== action.payload.rule
          );
        }
      });
      return {
        ...state,
        rooms: [...state.rooms],
      };
    }
    case REMOVE_AMENITY: {
      state.rooms.forEach((room) => {
        if (room.id === action.payload.id) {
          room.amenities = room.amenities.filter(
            (amenity) => amenity !== action.payload.amenity
          );
        }
      });
      return {
        ...state,
        rooms: [...state.rooms],
      };
    }
    default:
      return state;
  }
}
