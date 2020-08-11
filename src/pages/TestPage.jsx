import React from "react";
import { BoxedInput, LineInput, Checkbox } from "../components/Inputs";

const Test = () => {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div style={styles.container}>
        <BoxedInput label="Username" />
        <LineInput label="Username" />
        <Checkbox label="Username" />
      </div>
    </div>
  );
};

export default Test;

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "80vw",
    margin: "auto",
    // backgroundColor: "rgba(38, 61, 156, 0.95)",
    // backgroundColor: "#eee",
  },
};
