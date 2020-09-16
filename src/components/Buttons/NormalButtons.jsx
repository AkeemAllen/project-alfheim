import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { createUseStyles } from "react-jss";

export const NormalButton = ({
  text,
  onClick,
  disabled,
  color,
  darkerColor,
  type,
  style,
}) => {
  const [hover, setHover] = useState(false);
  const classes = useStyles();

  const { backgroundColor } = useSpring({
    backgroundColor: `#${
      hover ? (darkerColor ? darkerColor : "1b2a68") : color ? color : "263d9c"
    }`,
    config: config.gentle,
  });

  return (
    <animated.button
      className={classes.removeOutline}
      style={
        disabled
          ? { ...styles.disabled, ...style }
          : { backgroundColor, ...styles.normalButton, ...style }
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </animated.button>
  );
};

const styles = {
  normalButton: {
    color: "white",
    padding: "0.5rem 2rem 0.5rem 2rem",
    border: "none",
    borderRadius: "5px",
    fontSize: "1.2rem",
    cursor: "pointer",
  },
  disabled: {
    color: "#979797",
    backgroundColor: "#cdcdcd",
    padding: "0.5rem 2rem 0.5rem 2rem",
    border: "none",
    borderRadius: "5px",
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
