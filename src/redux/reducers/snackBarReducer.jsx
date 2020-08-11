import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from "../actions/types";

const initialState = {
  message: "",
  status: "",
  mounted: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OPEN_SNACKBAR: {
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        mounted: true,
      };
    }
    case CLOSE_SNACKBAR: {
      return {
        ...state,
        message: "",
        status: "",
        mounted: false,
      };
    }
    default:
      return state;
  }
}
