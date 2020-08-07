import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

export const Button = ({ text }) => {
  const [hover, setHover] = useState(false);

  const { backgroundColor } = useSpring({
    backgroundColor: `#${hover ? "1b2a68" : "263d9c"}`,
    config: config.gentle,
  });

  return (
    <animated.button
      style={{ backgroundColor, ...styles.normalButton }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </animated.button>
  );
};

const styles = {
  normalButton: {
    // backgroundColor: "#263d9c",
    color: "white",
    padding: "0.5rem 2rem 0.5rem 2rem",
    border: "none",
    borderRadius: "5px",
    fontSize: "1.2rem",
    cursor: "pointer",
  },
};
