import React, { useState } from "react";
import { BoxedInput } from "../components/Inputs";

const Test = () => {
  const [username, setUsername] = useState("");
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <div style={styles.container}>
      <BoxedInput
        type="text"
        label="Username"
        name="Username"
        value={username}
        onChange={handleChange}
        invalidInput={false}
        errorMessage="Invalid Credentials"
      />
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
    backgroundColor: "rgba(38, 61, 156, 0.95)",
    // backgroundColor: "white",
  },
};
