import React from "react";
import "../stylesheets/component-stylesheets/Card.scss";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-title">{props.title}</div>
        <img src={props.img} alt="convenient" className="card-icon" />
      </div>
    </div>
  );
};

export default Card;
