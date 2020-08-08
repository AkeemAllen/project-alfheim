import React, { useState } from "react";
import SnackBar from "../components/SnackBars";
import Button from "../components/Buttons";

const Test = () => {
  const [mounted, setMount] = useState(false);
  const [status, setStatus] = useState("");

  const handleClick = (status) => {
    setMount(!mounted);
    setStatus(status);
  };
  return (
    <div style={styles.container}>
      <Button
        text="Toggle SnackBar"
        variant=""
        onClick={() => handleClick("success")}
      />
      <Button
        text="Toggle SnackBar Error"
        variant=""
        onClick={() => handleClick("error")}
      />
      <Button
        text="Toggle SnackBar Warning"
        variant=""
        onClick={() => handleClick("warning")}
      />
      <SnackBar text="Verify Your Email" status={status} mounted={mounted} />
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
  },
};
