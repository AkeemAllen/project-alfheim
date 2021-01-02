import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { createUseStyles } from "react-jss";
import { NormalButton } from "../Buttons";
import DetailModal from "../Modals/GallaryRoomDetailModal";
import "./GallaryCard.scss";

const GallaryCard = ({
  occupancy,
  price,
  gender,
  street,
  amenities,
  rules,
  ownerInfo,
  image,
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

  let imageViewUri;
  process.env.NODE_ENV !== "production"
    ? (imageViewUri = "http://localhost:8081/image")
    : (imageViewUri = `${process.env.REACT_APP_BASE_URI}/image`);

  return (
    <div>
      <animated.div
        onMouseMove={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="card-container"
        style={{ transform, zIndex }}
      >
        {(image === null) | (image === undefined) ? (
          <div
            className="card-media"
            style={{
              backgroundColor: "#f1f2fa",
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2>No image provided</h2>
          </div>
        ) : (
          <img
            src={`${imageViewUri}/${image}`}
            alt="room"
            className="card-media"
          />
        )}
        <div className="details-wrapper">
          <div className="detail">
            <label>Price</label>
            <h3>${price}</h3>
          </div>
          <div className="detail">
            <label>Location</label>
            <h3>{street}</h3>
          </div>
        </div>
        <div className="normal-btn-container">
          <NormalButton
            text="More Details"
            style={{ opacity, width: "100%" }}
            color="51cb20"
            darkerColor="3E941C"
            onClick={handleSelected}
          />
        </div>
      </animated.div>
      <DetailModal
        ownerInfo={ownerInfo}
        setOpen={setOpen}
        open={open}
        rules={rules}
        amenities={amenities}
      />
    </div>
  );
};

export default GallaryCard;

const useStyles = createUseStyles({
  modal_wrapper: {
    display: "grid",
    // gridTemplateRows: "1fr 4fr",
    rowGap: "2rem",
  },
});