import { combineReducers } from "redux";
import authReducer from "./authReducer";
import snackBarReducer from "./snackBarReducer";

export default combineReducers({
  auth: authReducer,
  snackBar: snackBarReducer,
});
