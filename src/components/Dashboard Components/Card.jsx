import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useSpring, animated } from "react-spring";

const Card = ({
  price,
  available,
  visible,
  personalID,
  openDetailedView,
  image,
}) => {
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

  const settings = [
    { name: "Available", value: available },
    { name: "Visible", value: visible },
  ];

  let imageViewUri;
  process.env.NODE_ENV !== "production"
    ? (imageViewUri = "http://localhost:8081/image")
    : (imageViewUri = `${process.env.REACT_APP_BASE_URI}/image`);

  return (
    <animated.div
      onMouseMove={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={openDetailedView}
      style={{ transform, boxShadow }}
      className={classes.container}
    >
      {(image === null) | (image === undefined) ? (
        <div
          className={classes.image}
          style={{
            backgroundColor: "#cdcdcd",
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>No image</h2>
        </div>
      ) : (
        <img
          src={`${imageViewUri}/${image}`}
          alt="room"
          className={classes.image}
        />
      )}
      <div>
        <p style={{ fontWeight: "bold" }}>{personalID}</p>
        <h1 className={classes.attentionGrabber}>${price}</h1>
      </div>
      {settings.map((setting) => {
        return (
          <div>
            <h3 className={classes.settingName}>{setting.name}</h3>
            {setting.value ? (
              <h2 className={classes.true}>Yes</h2>
            ) : (
              <h2 className={classes.false}>No</h2>
            )}
          </div>
        );
      })}
    </animated.div>
  );
};

export default Card;

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "min-content min-content",
    columnGap: "2rem",
    rowGap: "2rem",
    padding: "1rem",
    backgroundColor: "#f1f2fa",
    boxShadow: "none",
    borderRadius: "10px",
  },
  settingName: {
    fontWeight: 500,
    marginBottom: "0.5rem",
    color: "var(--transparent-white)",
  },
  attentionGrabber: {
    color: "var(--main-green)",
    marginTop: "0.5rem",
    alignSelf: "center",
  },
  image: {
    width: "10rem",
    height: "7rem",
    borderRadius: "7px",
  },
  true: {
    marginLeft: "1.2rem",
    color: "#51CB20",
  },
  false: {
    marginLeft: "1.2rem",
    color: "#FF5C7D",
  },
});
