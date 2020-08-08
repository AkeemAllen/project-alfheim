import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

export const OutlineButton = ({ text, disabled, onClick }) => {
  const [hover, setHover] = useState(false);

  const { backgroundColor } = useSpring({
    backgroundColor: `#${hover ? "rgba(38, 61, 156, 0.43)" : "fff"}`,
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
    color: "rgb(38, 61, 156)",
    padding: "0.5rem 2rem 0.5rem 2rem",
    border: "3px solid rgba(38, 61, 156, 1)",
    borderRadius: "5px",
    fontSize: "1.2rem",
    cursor: "pointer",
  },
  disabled: {
    color: "#cdcdcd",
    padding: "0.5rem 2rem 0.5rem 2rem",
    border: "3px solid #979797",
    backgroundColor: "white",
    borderRadius: "5px",
    fontSize: "1.2rem",
  },
};
