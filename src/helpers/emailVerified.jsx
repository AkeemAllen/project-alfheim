import React from "react";
import { NormalButton } from "../components/Buttons";
import { withRouter } from "react-router";
import { compose } from "recompose";
import { createUseStyles } from "react-jss";

const EmailVerified = ({ history }) => {
  const classes = useStyles();
  return (
    <div>
      <NormalButton
        text="< Back To Alfheim"
        color="f3f3f3"
        darkerColor="f3f3f3"
        style={{
          color: "black",
          fontWeight: 700,
          fontSize: "1rem",
          position: "absolute",
          top: 20,
          left: 40,
        }}
        onClick={() => history.push("/")}
      />
      <div className={classes.container}>
        <form className={classes.formContainer}>
          <h1 style={{ fontSize: "24px", fontWeight: 800 }}>Welcome Akeem</h1>
          <p style={{ fontWeight: 400, color: "rgba(0,0,0,0.5)" }}>
            Your Email has been verified
          </p>
          <NormalButton
            text="Continue to Account"
            style={{ fontSize: "1rem", fontWeight: 700, height: "45px" }}
            onClick={() => {
              history.push("/account");
            }}
          />
        </form>
      </div>
    </div>
  );
};

const ComposedEmailVerified = compose(withRouter)(EmailVerified);

export default ComposedEmailVerified;

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr",
    height: "100vh",
  },
  formContainer: {
    display: "grid",
    rowGap: "1rem",
    justifySelf: "center",
    alignSelf: "center",
    textAlign: "center",
    minWidth: "400px",
    transform: "translateY(-80px)",
  },
});
