import React from "react";
import { createUseStyles } from "react-jss";
import { NormalButton } from "../Buttons";
import room from "../../assets/stock photos/room1.jpg";

const RoomDetails = ({ returnToCards, data }) => {
  const classes = useStyles();

  const details = [
    { title: "Occupancy", value: data.occupancy },
    { title: "Gender", value: data.gender },
    { title: "Price", value: `$${data.price}` },
    { title: "Available", value: data.isAvailable ? "Yes" : "No" },
    { title: "Visible", value: data.isVisible ? "Yes" : "No" },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.topSection}>
        <h2>ID: {data.id.slice(0, 7)}</h2>
        <NormalButton text="Back" onClick={returnToCards} />{" "}
      </div>
      <img src={room} alt="room" className={classes.image} />
      <div className={classes.detail_wrapper}>
        {details.map((detail) => {
          return (
            <div className={classes.detail}>
              <h3 style={{ color: "rgba(0,0,0,0.5)" }}>{detail.title}</h3>
              <h2 style={{ color: "var(--main-color)" }}>{detail.value}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomDetails;

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridAutoRows: "min-content",
    rowGap: "1.5rem",
    padding: "2rem",
    backgroundColor: "#f1f2fa",
    margin: "2rem",
    borderRadius: "10px",
  },
  topSection: {
    display: "grid",
    gridTemplateColumns: "1fr 0.1fr",
  },
  image: {
    width: "50rem",
    height: "20rem",
    borderRadius: "10px",
  },
  detail_wrapper: {
    display: "grid",
    // gridAutoColumns: "1fr 1fr 1fr",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  },
  detail: {
    backgroundColor: "white",
    padding: "1rem",
    width: "10rem",
    borderRadius: "5px",
    justifySelf: "flex-start",
    display: "grid",
    rowGap: "0.5rem",
  },
});
