import React from "react";
import { animated, useSpring } from "react-spring";
// import styled from "styled-components";
import "../stylesheets/component-stylesheets/Loading.scss";
import range from "lodash-es/range";
import { createUseStyles } from "react-jss";

const items = range(3);
const interp = (i) => (r) => `scale(${Math.sin(r + i)})`;

const Loading = () => {
  const classes = useStyles();
  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 600 },
    reset: true,
  });
  return items.map((i) => (
    <animated.div
      className={classes.circle}
      key={i}
      style={{ transform: radians.interpolate(interp(i)) }}
    />
  ));
};

export default Loading;

const useStyles = createUseStyles({
  circleContainer: {},
  circle: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "var(--main-color)",
  },
});
