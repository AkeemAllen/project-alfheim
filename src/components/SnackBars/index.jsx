import React from "react";
import success from "../../assets/icons/Tick Icon.png";
import error from "../../assets/icons/Error Icon.png";
import document from "../../assets/icons/Document Icon.png";
import warning from "../../assets/icons/Warning Icon.png";
import { useSpring, animated, config } from "react-spring";

const SnackBar = ({ text, status, mounted }) => {
  const { transform, opacity } = useSpring({
    from: { opacity: 0, transform: "translateX(0px)" },
    to: {
      transform: `translateX(${mounted ? -150 : 0}px)`,
      opacity: mounted ? 1 : 0,
    },
    config: config.stiff,
  });

  return (
    <animated.div style={{ transform, opacity, ...styles.container }}>
      {text}{" "}
      {status === "success" ? (
        <img
          src={success}
          alt="icon"
          width="20"
          style={{ marginLeft: "3rem" }}
        />
      ) : null}
      {status === "error" ? (
        <img src={error} alt="icon" width="20" style={{ marginLeft: "3rem" }} />
      ) : null}
      {status === "info" ? (
        <img
          src={document}
          alt="icon"
          width="20"
          style={{ marginLeft: "3rem" }}
        />
      ) : null}
      {status === "warning" ? (
        <img
          src={warning}
          alt="icon"
          width="20"
          style={{ marginLeft: "3rem" }}
        />
      ) : null}
    </animated.div>
  );
};

export default SnackBar;

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    padding: "0.8rem 1.5rem 0.8rem 1rem",
    borderRadius: "5px",
    boxShadow: "13px 11px 12px rgba(0, 0, 0, 0.25)",
    position: "absolute",
    top: 10,
    right: 0,
    zIndex: 2,
  },
};
