import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from "./types";

export const handleOpen = (message, status) => (dispatch) => {
  dispatch({
    type: OPEN_SNACKBAR,
    payload: { message, status },
  });
};

export const unMountSnackBar = () => (dispatch) => {
  dispatch({
    type: CLOSE_SNACKBAR,
  });
};
