import React from "react";
import room from "../assets/stock photos/room1.jpg";
import Button from "../components/Buttons";

const RoomCard = () => {
  return (
    <div style={styles.container}>
      <img
        src={room}
        alt=""
        width="500px"
        height="200px"
        style={{ borderRadius: "10px" }}
      />
      <div style={styles.roomDetails}>
        <div style={styles.detail}>
          <label style={styles.label}>Occupancy</label>
          <h2 style={styles.attribute}>Single Occupancy</h2>
        </div>
        <div style={styles.detail}>
          <label style={styles.label}>Gender</label>
          <h2 style={styles.attribute}>Male</h2>
        </div>
        <div style={styles.detail}>
          <label style={styles.label}>Price</label>
          <h2 style={styles.attribute}>$15,000</h2>
        </div>
        <div style={styles.detail}>
          <label style={styles.label}>Location</label>
          <h2 style={styles.attribute}>4 Riverview Avenue</h2>
        </div>
      </div>
      <Button
        text="More Details"
        variant=""
        style={{ display: "flex", justifyContent: "center" }}
        color="51CB20"
        darkerColor="3B9418"
      />
    </div>
  );
};

export default RoomCard;

const styles = {
  container: {
    display: "grid",
    gridTemplateRows: "1fr 1fr 0.3fr",
    padding: "2rem",
    backgroundColor: "white",
    borderRadius: "10px",
    maxWidth: "500px",
    alignItems: "center",
  },
  roomDetails: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gridTemplateColumns: "1fr 1fr",
    justifyContent: "space-between",
  },
  detail: {
    marginTop: "1rem",
  },
  label: {
    color: "rgba(0,0,0,0.25)",
  },
  attribute: {
    color: "var(--main-color)",
    fontWeight: 600,
    marginTop: "0.5rem",
  },
};
