import React, { useState } from "react";
import "../stylesheets/component-stylesheets/GallaryCard.scss";
import room from "../assets/stock photos/room2.jpg";
import { MdLocationSearching } from "react-icons/md";
import { useSpring, animated } from "react-spring";
import Modal from "./Modal";

const trans = (x, y) => `translate(${x}px, ${y}px)`;

const GallaryCard = () => {
  // const [flipped, setFlipped] = useState(true);

  // const { transform, opacity } = useSpring({
  //   opacity: flipped ? 1 : 0,
  //   transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
  //   config: { mass: 5, tension: 500, friction: 80 },
  // });

  const [open, setOpen] = useState(false);

  const modalHandler = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  const [hover, setHover] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 1, tension: 400, friction: 40 },
  }));
  return (
    <div>
      <animated.div
        onMouseMove={() => setHover({ xy: [0, -15] })}
        onMouseLeave={() => setHover({ xy: [0, 0] })}
        onClick={modalHandler}
        style={{
          transform: hover.xy.interpolate(trans),
          // opacity,
        }}
        className="gallary-card"
      >
        <div className="media">
          <img src={room} alt="media" className="media" />
        </div>
        <div className="title">
          <h3>Single Occupancy - Male</h3>
        </div>
        <div className="content">
          <div className="location">
            <MdLocationSearching size="15" />
            <h3>4 RiverView Avenue, Kingston 5</h3>
          </div>
        </div>
        <div className="footer">
          <h3>$15000/mth</h3>
        </div>
      </animated.div>
      {/* <animated.div
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <div className="gallary-card-back"></div>
      </animated.div> */}
      <Modal show={open} modalClosed={modalHandler}>
        <div style={{ color: "black" }}>Test</div>
      </Modal>
    </div>
  );
};

export default GallaryCard;
