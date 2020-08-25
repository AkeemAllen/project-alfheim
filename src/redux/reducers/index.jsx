import { combineReducers } from "redux";
import authReducer from "./authReducer";
import snackBarReducer from "./snackBarReducer";
import roomReducer from "./roomReducer";

export default combineReducers({
  auth: authReducer,
  snackBar: snackBarReducer,
  room: roomReducer,
});
