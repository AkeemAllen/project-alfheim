import React from "react";
import { createUseStyles } from "react-jss";
import Modal from "@material-ui/core/Modal";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import Backdrop from "@material-ui/core/Backdrop";

const Fade = React.forwardRef(function Fade(props, ref) {
  const noOutline = useStyles().noOutline;
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0, transform: `translateY(-200px)` },
    to: {
      opacity: open ? 1 : 0,
      transform: `translateY(${open ? 0 : -200}px)`,
    },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div
      ref={ref}
      className={noOutline}
      style={{ border: "none", ...style }}
      {...other}
    >
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const AnimatedModal = ({ open, handleClose, children }) => {
  const classes = useStyles();

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.container}>{children}</div>
      </Fade>
    </Modal>
  );
};

const useStyles = createUseStyles({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    borderRadius: "10px",
    padding: "2rem",
    backgroundColor: "white",
  },
  noOutline: {
    "&:focus": {
      outline: "none",
    },
  },
});

export default AnimatedModal;
