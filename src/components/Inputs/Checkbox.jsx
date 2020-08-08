import React from "react";
import { createUseStyles } from "react-jss";

const Checkbox = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <input type="checkbox" className={classes.checkbox} />
      <label for="check" className={classes.checkmark}></label>
    </div>
  );
};

export default Checkbox;

const useStyles = createUseStyles({
  container: {
    position: "absoulte",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
  },
  checkbox: {
    "&:checked ~ .checkmark": {
      backgroundColor: "#263D9C",
    },
  },
  checkmark: {
    display: "block",
    width: "80px",
    height: "80px",
    backgroundColor: "#eee",
    borderRadius: "10px",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "25px",
      height: "45px",
      borderRight: "5px solid #fff",
      borderBottom: "5px solid #fff",
      top: "40%",
      left: "50%",
      transform: `translate(-50%, -50%) rotateZ(40deg)`,
    },
  },
});
