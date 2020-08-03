import React from "react";
import "../stylesheets/component-stylesheets/Modal.scss";
import { createUseStyles } from "react-jss";

const Modal = (props) => {
  const useStyles = createUseStyles({ ...props.modalStyles });
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "75vw",
      }}
    >
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.container}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? 1 : 0,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

const Backdrop = (props) =>
  props.show ? <div className="backdrop" onClick={props.clicked}></div> : null;

export default Modal;
