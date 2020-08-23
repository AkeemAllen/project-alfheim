import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { NormalButton } from "../Buttons";
import room from "../../assets/stock photos/room3.jpg";
import Modal from "../Modal";
import { BoxedInput } from "../Inputs";

const RoomDetails = ({ returnToCards, data }) => {
  const classes = useStyles();

  const [modalOpen, setModalOpen] = useState(false);
  const [field, setField] = useState("");

  const handleOpen = (id) => {
    setModalOpen(true);
    setField(id);
  };

  const details = [
    { title: "Occupancy", value: data.occupancy, id: "occupancy" },
    { title: "Gender", value: data.gender, id: "gender" },
    { title: "Price", value: `$${data.price}`, id: "price" },
    {
      title: "Available",
      value: data.isAvailable ? "Yes" : "No",
      id: "isAvailable",
    },
    { title: "Visible", value: data.isVisible ? "Yes" : "No", id: "isVisible" },
  ];

  const address = [
    { title: "Street", value: data.street, id: "street" },
    { title: "Town/City", value: data.town_city, id: "town_city" },
    { title: "Parish", value: data.parish, id: "parish" },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.topSection}>
        <h2 style={{ color: "rgba(0,0,0,0.5)" }}>ID: {data.personalID}</h2>
        <NormalButton text="Back" onClick={returnToCards} />{" "}
      </div>
      <h2 style={{ color: "rgba(0,0,0,0.5)" }}>Overview</h2>
      <div className={classes.detail_wrapper}>
        {details.map((detail) => {
          return (
            <div
              className={classes.detail}
              onClick={() => handleOpen(detail.id)}
            >
              <h4 style={{ color: "rgba(0,0,0,0.5)" }}>{detail.title}</h4>
              <h2 style={{ color: "var(--main-color)" }}>{detail.value}</h2>
            </div>
          );
        })}
      </div>
      <div>
        <h2 style={{ color: "rgba(0,0,0,0.5)", marginBottom: "1rem" }}>
          Location
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            columnGap: "1rem",
          }}
        >
          {address.map((detail) => {
            return (
              <div
                className={classes.detail}
                onClick={() => handleOpen(detail.id)}
              >
                <h4 style={{ color: "rgba(0,0,0,0.5)" }}>{detail.title}</h4>
                <h2 style={{ color: "var(--main-color)" }}>{detail.value}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          columnGap: "1rem",
        }}
      >
        <div
          style={{
            display: "grid",
            rowGap: "0.5rem",
            gridAutoRows: "min-content",
          }}
        >
          <h2 style={{ color: "rgba(0,0,0,0.5)" }}>Rules</h2>
          {data.rules.map((rule) => {
            return <p className={classes.listItem}>{rule}</p>;
          })}
          <NormalButton text="Add Rule" />
        </div>
        <div style={{ display: "grid", rowGap: "0.5rem" }}>
          <h2 style={{ color: "rgba(0,0,0,0.5)" }}>Amenities</h2>
          {data.amenities.map((amenity) => {
            return <p className={classes.listItem}>{amenity}</p>;
          })}
          <NormalButton text="Add Amenity" />
        </div>
        <img src={room} alt="room" className={classes.image} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "3rem",
        }}
      >
        <NormalButton text="Delete" color="CDCDCD" darkerColor="FF7893" />
      </div>
      <Modal open={modalOpen} handleClose={() => setModalOpen(false)}>
        <div style={{ display: "grid", rowGap: "1rem" }}>
          <BoxedInput label={field} />
          <NormalButton text={`Update ${field}`} />
        </div>
      </Modal>
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
    backgroundColor: "transparent",
    margin: "2rem",
    borderRadius: "10px",
  },
  topSection: {
    display: "grid",
    gridTemplateColumns: "1fr 0.1fr",
  },
  image: {
    width: "100%",
    height: "10rem",
    borderRadius: "10px",
    objectFit: "cover",
  },
  detail_wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  },
  detail: {
    backgroundColor: "#f1f2fa",
    padding: "1rem",
    minWidth: "10rem",
    borderRadius: "10px",
    justifySelf: "flex-start",
    display: "grid",
    rowGap: "0.5rem",
  },
  lists: {},
  listItem: {
    padding: "0.5rem",
    backgroundColor: "#f1f2fa",
    borderRadius: "10px",
    height: "1.2rem",
  },
});
