import React, { useState } from "react";
import "../stylesheets/component-stylesheets/GallaryCard.scss";
import room from "../assets/stock photos/room2.jpg";
import { useSpring, animated } from "react-spring";
import { createUseStyles } from "react-jss";
import { NormalButton } from "../components/Buttons";

const trans = (x, y) => `translate(${x}px, ${y}px)`;

const GallaryCard = () => {
  const [open, setOpen] = useState(false);

  const modalHandler = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  const [hover, setHover] = useState(false);

  const { opacity } = useSpring({
    opacity: hover ? 1 : 0,
  });

  const classes = useStyles();

  return (
    <div>
      <animated.div
        onMouseMove={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={classes.container}
      >
        <img src={room} alt="room" className={classes.media} />
        <div className={classes.detail_wrapper}>
          <div className={classes.detail}>
            <label className={classes.label}>Price</label>
            <h2 className={classes.item}>$15,000</h2>
          </div>
          <animated.div className={classes.detail}>
            <label className={classes.label}>Occupancy</label>
            <h2 className={classes.item}>Single</h2>
          </animated.div>
          <animated.div className={classes.detail}>
            <label className={classes.label}>Gender</label>
            <h2 className={classes.item}>Male</h2>
          </animated.div>
          <animated.div className={classes.detail}>
            <label className={classes.label}>Location</label>
            <h2 className={classes.item}>4 Riverview Avenue</h2>
          </animated.div>
        </div>
        <NormalButton text="More Details" style={{ opacity, width: "100%" }} />
      </animated.div>
    </div>
  );
};

export default GallaryCard;

const useStyles = createUseStyles({
  container: {
    padding: "1rem",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  media: {
    width: "500px",
    borderRadius: "10px",
    height: "200px",
    marginBottom: "1rem",
  },
  detail_wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    rowGap: "1rem",
    marginBottom: "1rem",
  },
  detail: {
    display: "grid",
    gridAutoRows: "min-content",
    rowGap: "0.1rem",
  },
  label: {
    fontWeight: 600,
    color: "rgba(0,0,0,0.5)",
  },
  item: {
    color: "var(--main-color)",
  },
});
