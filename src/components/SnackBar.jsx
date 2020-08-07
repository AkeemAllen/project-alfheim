import React, { useState } from "react";
import { Spring } from "react-spring/renderprops";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { unMountSnackBar } from "../redux/actions/snackBarActions";

const SnackBar = (props) => {
  const { triggered, message, success, endAnimation } = props;
  const [reset, setReset] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [delay, setDelay] = useState(0);

  return (
    <Spring
      from={{ opacity: 0, transform: `translateX(${triggered ? 150 : 0}px)` }}
      to={{ transform: `translateX(0px)`, opacity: triggered ? 1 : 0 }}
      config={{ mass: 1, tension: 200, friction: 26 }}
      onRest={() => {
        setReset(true);
        setReverse(true);
        setDelay(3000);
        setTimeout(() => {
          endAnimation();
        }, 4000);
      }}
      reset={reset}
      reverse={reverse}
      delay={delay}
    >
      {({ transform, opacity }) => (
        <div
          style={{
            transform,
            opacity,
            backgroundColor: success
              ? "var(--accent-color)"
              : "var(--error-color)",
            ...styles.snackbar,
          }}
        >
          <p style={styles.message}>{message}</p>
        </div>
      )}
    </Spring>
  );
};

SnackBar.propTypes = {
  triggered: PropTypes.bool,
  message: PropTypes.string,
  success: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  triggered: state.snackBar.triggered,
  message: state.snackBar.message,
  success: state.snackBar.success,
});

const mapDispatchToProps = (dispatch) => ({
  unMountSnackBar: bindActionCreators(unMountSnackBar, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar);

const styles = {
  snackbar: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: 30,
    right: 50,
    overflow: "hidden",
    width: "300px",
    height: "50px",
    borderRadius: "5px",
    boxShadow: `1px 1px 2px 2px rgba(0,0,0,0.1)`,
  },
  message: {
    marginLeft: "10px",
    // fontFamily: "Poppins",
    color: "white",
    fontWeight: 700,
    fontSize: "1.1rem",
  },
};
