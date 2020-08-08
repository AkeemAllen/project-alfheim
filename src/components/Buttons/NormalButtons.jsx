import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

export const NormalButton = ({ text, onClick, disabled }) => {
  const [hover, setHover] = useState(false);

  const { backgroundColor } = useSpring({
    backgroundColor: `#${hover ? "1b2a68" : "263d9c"}`,
    config: config.gentle,
  });

  return (
    <animated.button
      style={
        disabled
          ? { ...styles.disabled }
          : { backgroundColor, ...styles.normalButton }
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
