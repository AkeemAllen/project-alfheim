import React from "react";
import { TextButton } from "../components/Buttons";

const Test = () => {
  return (
    <div style={styles.container}>
      <TextButton text="Test" />
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
  },
};
