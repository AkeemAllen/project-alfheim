import React from "react";
import "../stylesheets/component-stylesheets/Card.scss";
import { useSpring, animated } from "react-spring";

const Card = (props) => {
  return (
    <animated.div className="card-container">
      <div className="card">
        <div className="card-title">{props.title}</div>
        <img src={props.img} alt="convenient" className="card-icon" />
      </div>
    </animated.div>
  );
};

export default Card;
