import React from "react";
import Loading from "../components/Loading";

const Test = () => {
  return (
    <div style={styles.container}>
      <Loading />
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
