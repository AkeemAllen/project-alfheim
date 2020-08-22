import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import room from "../../assets/stock photos/room1.jpg";
import { useSpring, animated } from "react-spring";

const Card = ({ price, available, visible, id, openDetailedView }) => {
  const classes = useStyles();

  const [hover, setHover] = useState(false);

  const { transform, boxShadow } = useSpring({
    to: {
      transform: `translateY(${hover ? -10 : 0}px)`,
      boxShadow: hover
        ? "0px 5px 12px rgba(0,0,0,0.25)"
        : "0px 5px 12px rgba(0,0,0,0)",
    },
  });

  return (
    <animated.div
      onMouseMove={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={openDetailedView}
      style={{ transform, boxShadow }}
      className={classes.container}
    >
      <img src={room} alt="room" className={classes.image} />
      <div>
        <h1
          style={{
            color: "var(--main-color)",
            marginBottom: "0.5rem",
          }}
        >
          ${price}
        </h1>
        <p>Room Id: {id.slice(0, 6)}...</p>
      </div>
      <div>
        <h3 style={{ fontWeight: 500, marginBottom: "0.5rem" }}>Available</h3>
        {available ? (
          <h2 style={{ marginLeft: "1.2rem", color: "#51CB20" }}>Yes</h2>
        ) : (
          <h2 style={{ marginLeft: "1.2rem", color: "#FF5C7D" }}>No</h2>
        )}
      </div>
      <div>
        <h3 style={{ fontWeight: 500, marginBottom: "0.5rem" }}>Visible</h3>
        {visible ? (
          <h2 style={{ marginLeft: "1.2rem", color: "#51CB20" }}>Yes</h2>
        ) : (
          <h2 style={{ marginLeft: "1.2rem", color: "#FF5C7D" }}>No</h2>
        )}
      </div>
    </animated.div>
  );
};

export default Card;

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    rowGap: "2rem",
    padding: "1rem",
    backgroundColor: "#f1f2fa",
    boxShadow: "none",
    borderRadius: "10px",
  },
  image: {
    width: "10rem",
    height: "7rem",
    borderRadius: "7px",
  },
});
