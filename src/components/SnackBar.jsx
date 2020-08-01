import React, { useState } from "react";
import { Spring } from "react-spring/renderprops";

const SnackBar = (props) => {
  const { triggered } = props;
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
      }}
      reset={reset}
      reverse={reverse}
      delay={delay}
    >
      {({ transform, opacity }) => (
        <div style={{ transform, opacity, ...styles.snackbar }}>
          <p style={styles.message}>{props.message}</p>
        </div>
      )}
    </Spring>
  );
};

const styles = {
  snackbar: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: 30,
    right: 50,
    overflow: "hidden",
    width: "200px",
    backgroundColor: "white",
    height: "50px",
    borderRadius: "5px",
    // boxShadow: `15px 15px 10px 5px rgba(0,0,0,0.25)`,
  },
  message: {
    marginLeft: "10px",
    fontFamily: "Poppins",
    color: "#004c3f",
  },
};

export default SnackBar;
