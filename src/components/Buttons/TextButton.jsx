import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

export const TextButton = ({ text, onClick, disabled }) => {
  const [hover, setHover] = useState(false);

  const { background } = useSpring({
    background: `${hover ? "rgba(38, 61, 156, 0.43)" : "#fff"}`,
    config: config.gentle,
  });

  return (
    <animated.button
      style={
        disabled
          ? { ...styles.disabled }
          : { background, ...styles.normalButton }
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
    color: "rgb(38, 61, 156)",
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
