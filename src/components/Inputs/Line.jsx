import React from "react";
import { createUseStyles } from "react-jss";

const LineInput = ({
  type,
  label,
  name,
  onChange,
  value,
  invalidInput,
  errorMessage,
}) => {
  const classes = useStyles();
  return (
    <div>
      <input
        type={type ? type : "text"}
        className={invalidInput ? classes.error : classes.lineInput}
        placeholder={label}
        name={name}
        onChange={onChange}
        value={value}
      />
      {invalidInput ? (
        <p className={classes.errorMessage}>{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default LineInput;

const useStyles = createUseStyles({
  lineInput: {
    padding: "0.8rem 3rem 0.8rem 1rem",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "2px solid #263D9C",
    fontSize: "1rem",
    transition: "all",
    transitionDuration: "250ms",
    "&:focus": {
      outline: "none",
      borderBottom: "2px dashed #A3B4FA",
    },
  },
  error: {
    padding: "0.8rem 3rem 0.8rem 1rem",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "1rem",
    borderBottom: "2px solid #ED9AAB",
    transition: "all",
    transitionDuration: "250ms",
    "&:focus": {
      outline: "none",
      borderBottom: "2px dashed #ED9AAB",
    },
  },
  errorMessage: {
    color: "#ED9AAB",
    marginTop: "1rem",
  },
});
