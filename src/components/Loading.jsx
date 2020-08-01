import React from "react";
import { animated, useSpring } from "react-spring";
// import styled from "styled-components";
import "../stylesheets/component-stylesheets/Loading.scss";
import range from "lodash-es/range";

const items = range(4);
const interp = (i) => (r) =>
  `translate3d(0, ${5 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

const Loading = () => {
  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 500 },
    reset: true,
  });
  return (
    <div className="box-container">
      {items.map((i) => (
        <animated.div
          key={i}
          className="box"
          style={{ transform: radians.interpolate(interp(i)) }}
        />
      ))}
    </div>
  );
};

export default Loading;
