import React, { useState } from "react";
import { Checkbox } from "../components/Inputs";

const Test = () => {
  return (
    <div style={styles.container}>
      <Checkbox />
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
    // backgroundColor: "rgba(38, 61, 156, 0.95)",
    backgroundColor: "white",
  },
};
