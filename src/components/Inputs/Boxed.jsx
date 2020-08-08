import React from "react";
import { createUseStyles } from "react-jss";

const BoxedInput = ({
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
        className={invalidInput ? classes.error : classes.boxedInput}
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

export default BoxedInput;

const useStyles = createUseStyles({
  boxedInput: {
    padding: "0.8rem 3rem 0.8rem 1rem",
    backgroundColor: "white",
    borderRadius: "10px",
    border: "2px solid #263D9C",
    fontSize: "1rem",
    transition: "all",
    transitionDuration: "250ms",
    "&:focus": {
      outline: "none",
      boxShadow: "0px 0px 1px 4px #A3B4FA",
      border: "none",
    },
  },
  error: {
    padding: "0.8rem 3rem 0.8rem 1rem",
    backgroundColor: "white",
    borderRadius: "10px",
    border: "none",
    fontSize: "1rem",
    transition: "all",
    boxShadow: "0px 0px 1px 4px #ED9AAB",
    "&:focus": {
      outline: "none",
    },
  },
  errorMessage: {
    color: "#ED9AAB",
    marginTop: "1rem",
  },
});
