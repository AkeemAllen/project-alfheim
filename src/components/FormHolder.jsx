import React from "react";
import { createUseStyles } from "react-jss";
import Backdrop from "./Backdrop";

const FormHolder = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.container}
        style={{
          transform: props.show ? "translateX(0px)" : "translateX(100vw)",
          opacity: props.show ? 1 : 0,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default FormHolder;

const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    width: "80vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 500,
    backgroundColor: "white",
    transition: "all 0.4s ease-out",
  },
});
