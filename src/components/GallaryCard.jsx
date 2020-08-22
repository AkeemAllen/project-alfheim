import React, { useState } from "react";
import "../stylesheets/component-stylesheets/GallaryCard.scss";
import room from "../assets/stock photos/room2.jpg";
import { useSpring, animated } from "react-spring";
import { createUseStyles } from "react-jss";
import { NormalButton } from "../components/Buttons";
import Modal from "../components/Modal";

const trans = (x, y) => `translate(${x}px, ${y}px)`;

const GallaryCard = ({
  occupancy,
  price,
  gender,
  street,
  amenities,
  rules,
  ownerInfo,
}) => {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);
  const [open, setOpen] = useState(false);

  const { opacity, transform, zIndex } = useSpring({
    opacity: hover ? 1 : 0,
    transform: `scale(${open ? 1.1 : 1})`,
    zIndex: selected ? 1 : -1,
  });

  const handleSelected = () => {
    setSelected(true);
    setOpen(true);
  };

  const classes = useStyles();

  return (
    <div>
      <animated.div
        onMouseMove={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={classes.container}
        style={{ transform, zIndex }}
      >
        <img src={room} alt="room" className={classes.media} />
        <div className={classes.detail_wrapper}>
          <div className={classes.detail}>
            <label className={classes.label}>Price</label>
            <h2 className={classes.item}>${price}</h2>
          </div>
          <animated.div className={classes.detail}>
            <label className={classes.label}>Occupancy</label>
            <h2 className={classes.item}>{occupancy}</h2>
          </animated.div>
          <animated.div className={classes.detail}>
            <label className={classes.label}>Gender</label>
            <h2 className={classes.item}>{gender}</h2>
          </animated.div>
          <animated.div className={classes.detail}>
            <label className={classes.label}>Location</label>
            <h2 className={classes.item}>{street}</h2>
          </animated.div>
        </div>
        <NormalButton
          text="More Details"
          style={{ opacity, width: "100%" }}
          color="51cb20"
          darkerColor="3E941C"
          onClick={handleSelected}
        />
      </animated.div>
      <Modal handleClose={() => setOpen(false)} open={open}>
        <div className={classes.modal_wrapper}>
          <h1>Details</h1>
          <div className={classes.details_wrapper}>
            <div style={{ display: "grid", gridAutoRows: "min-content" }}>
              <h3>Amenities</h3>
              <ul style={{ marginLeft: "2rem" }}>
                {amenities.map((amenity) => {
                  return <li className={classes.list}>{amenity}</li>;
                })}
              </ul>
            </div>
            <div>
              <h3>Rules</h3>
              <ul style={{ marginLeft: "2rem" }}>
                {rules.map((rule) => {
                  return <li className={classes.list}>{rule}</li>;
                })}
              </ul>
            </div>
            <div>
              <h3>Things To Note</h3>
            </div>
            <div>
              <h3>Owner</h3>
              <div className={classes.list}>
                <p
                  style={{
                    marginLeft: "1rem",
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.5)",
                  }}
                >
                  {ownerInfo.firstname} {ownerInfo.lastname}
                </p>
                <p
                  style={{
                    marginLeft: "1rem",
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.5)",
                  }}
                >
                  {ownerInfo.email}
                </p>
                <p
                  style={{
                    marginLeft: "1rem",
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.5)",
                  }}
                >
                  {ownerInfo.contact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GallaryCard;

const useStyles = createUseStyles({
  container: {
    padding: "1rem",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
    maxWidth: "500px",
  },
  media: {
    width: "500px",
    borderRadius: "10px",
    height: "200px",
    marginBottom: "1rem",
  },
  list: {
    paddingTop: "0.5rem",
    color: "rgba(0,0,0,0.5)",
  },
  modal_wrapper: {
    display: "grid",
    gridTemplateRows: "1fr 4fr",
    rowGap: "2rem",
  },
  details_wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    columnGap: "2rem",
    rowGap: "2rem",
  },
  detail_wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    rowGap: "2rem",
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
    maxHeight: "1.2rem",
  },
});
