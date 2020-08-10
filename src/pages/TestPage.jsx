import React from "react";
import RoomCard from "../components/RoomCard";

const Test = () => {
  return (
    <div style={styles.container}>
      <RoomCard />
    </div>
  );
};

export default Test;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(38, 61, 156, 0.95)",
    // backgroundColor: "white",
  },
};
