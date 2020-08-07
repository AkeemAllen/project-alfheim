import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from "../actions/types";

const initialState = {
  message: "",
  success: false,
  triggered: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OPEN_SNACKBAR: {
      return {
        ...state,
        message: action.payload.message,
        success: action.payload.success,
        triggered: true,
      };
    }
    case CLOSE_SNACKBAR: {
      return {
        ...state,
        message: "",
        success: "",
        triggered: false,
      };
    }
    default:
      return state;
  }
}
