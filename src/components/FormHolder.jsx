import React from "react";
import { createUseStyles } from "react-jss";
import Backdrop from "./Backdrop";
import { useSpring } from "react-spring";

const FormHolder = (props) => {
  const classes = useStyles();
  const { transform, opacity } = useSpring({
    to: { opacity: 1, transform: `translateX(0px)` },
    from: { opacity: 0, transform: `translateX(-80vw)` },
  });
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
    width: "80vw",
    height: "200vh",
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 500,
    backgroundColor: "white",
    transition: "all 0.4s ease-out",
  },
});
