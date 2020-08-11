import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { createUseStyles } from "react-jss";

export const TextButton = ({ text, onClick, disabled, darkerColor }) => {
  const [hover, setHover] = useState(false);
  const classes = useStyles();

  const { background, color } = useSpring({
    background: `${hover ? "rgba(38, 61, 156, 0.43)" : "#fff"}`,
    color: `${hover ? "#fff" : "rgba(38, 61, 156, 1)"}`,
    config: config.gentle,
  });

  return (
    <animated.button
      className={classes.removeOutline}
      style={
        disabled
          ? { ...styles.disabled }
          : { background, color, ...styles.normalButton }
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </animated.button>
  );
};

const styles = {
  normalButton: {
    // color: "rgb(38, 61, 156)",
    padding: "0.5rem 2rem 0.5rem 2rem",
    border: "none",
    borderRadius: "5px",
    fontSize: "1.2rem",
    cursor: "pointer",
  },
  disabled: {
    color: "#cdcdcd",
    padding: "0.5rem 2rem 0.5rem 2rem",
    border: "none",
    borderRadius: "5px",
    background: "transparent",
    fontSize: "1.2rem",
  },
};

const useStyles = createUseStyles({
  removeOutline: {
    "&:focus": {
      outline: "none",
    },
  },
});
