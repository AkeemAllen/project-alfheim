import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { createUseStyles } from "react-jss";
import { NormalButton } from "../components/Buttons";
import DetailModal from "./Modals/GallaryRoomDetailModal";

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
        className={classes.container}
        style={{ transform, zIndex }}
      >
        {(image === null) | (image === undefined) ? (
          <div
            className={classes.media}
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
            className={classes.media}
          />
        )}
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
    objectFit: "cover",
    marginBottom: "1rem",
  },
  list: {
    paddingTop: "0.5rem",
    color: "rgba(0,0,0,0.5)",
  },
  modal_wrapper: {
    display: "grid",
    // gridTemplateRows: "1fr 4fr",
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
