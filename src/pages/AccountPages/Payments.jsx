import React from "react";
import { createUseStyles } from "react-jss";

const Payments = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.box}>Under Development</div>
    </div>
  );
};

export default Payments;

const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5rem",
    backgroundColor: "#f1f2fa",
    width: "18rem",
    height: "4rem",
    borderRadius: "10px",
    fontWeight: 700,
    fontSize: "1.6rem",
    color: "rgba(0,0,0,0.65)",
  },
});
