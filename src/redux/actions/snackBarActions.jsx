import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from "./types";

export const handleOpen = (message, success) => (dispatch) => {
  dispatch({
    type: OPEN_SNACKBAR,
    payload: { message, success },
  });
};

export const unMountSnackBar = () => (dispatch) => {
  dispatch({
    type: CLOSE_SNACKBAR,
  });
};
