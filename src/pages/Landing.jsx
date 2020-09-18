import React from "react";
import { createUseStyles } from "react-jss";
import { NormalButton, TextButton } from "../components/Buttons";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "recompose";

const Landing = ({ isLoggedIn, email, history }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <nav className={classes.navigation}>
        <h1 className={classes.navigationHeader}>Alfheim</h1>
        {isLoggedIn === "true" ? (
          <TextButton
            text="Go To Account"
            onClick={() => history.push("/account")}
            style={{ fontSize: "1rem", fontWeight: 700 }}
          />
        ) : null}
        {isLoggedIn !== "true" ? (
          <div className={classes.authBtns}>
            <TextButton
              text="Sign In"
              onClick={() => history.push("/login")}
              style={{ fontSize: "1rem", fontWeight: 700 }}
            />
            <NormalButton
              text="Sign Up"
              onClick={() => history.push("/register")}
              style={{ fontSize: "1rem", fontWeight: 700 }}
            />
          </div>
        ) : null}
      </nav>
      <div className={classes.contentContainer}>
        <section className={classes.descSection}>
          <h1 className={classes.heroSectionHeader}>
            Search For Rooms Without The Hassel
          </h1>
          <text style={{ lineHeight: "2rem" }}>
            On this platform Landlords are able to create accounts and show off
            their rooms to prospective buyers. On the other hand
            Students/Rentors are able to go through a large selection of rooms
            from the comfort of their homes.
          </text>
          <div className={classes.gallaryBtn}>
            <NormalButton
              text="View Gallary"
              color="51cb20"
              darkerColor="3e941c"
              onClick={() => history.push("/gallary")}
            />
          </div>
          <h2 className={classes.mobileMessage}>
            Please Use Desktop For Best Experience!!
          </h2>
          <h2 className={classes.mobileMessage}>
            Mobile App will come in due time
          </h2>
        </section>
      </div>
    </div>
  );
};

Landing.propTypes = {
  auth: PropTypes.bool.isRequired,
  firstname: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.string,
  email: PropTypes.string,
};

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
  firstname: state.auth.firstname,
  isLoggedIn: state.auth.isLoggedIn,
  email: state.auth.email,
});

const ComposedLanding = compose(withRouter)(Landing);

export default connect(mapStateToProps, [])(ComposedLanding);

const useStyles = createUseStyles({
  container: {},
  navigation: {
    display: "grid",
    "@media (min-width: 1024px)": {
      gridTemplateColumns: "1fr 300px",
      margin: "2rem",
    },
  },
  authBtns: {
    display: "none",
    "@media (min-width: 1024px)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: "1rem",
    },
  },
  navigationHeader: {
    fontFamily: "Lobster",
    fontSize: "36px",
  },
  contentContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    "@media (min-width: 1024px)": {
      gridTemplateColumns: "1fr 1fr",
    },
  },
  descSection: {
    display: "grid",
    gridTemplateRows: "min-content min-content",
    rowGap: "1rem",
    alignContent: "center",
    justifySelf: "center",
    height: "50rem",
    maxWidth: "30rem",
    transform: "translateY(-100px)",
    fontSize: "0.8rem",
    "@media (min-width: 1024px)": {
      fontSize: "1rem",
    },
  },
  heroSectionHeader: {
    "@media (min-width: 1024px)": {
      fontWeight: "900",
      fontSize: "48px",
    },
  },
  gallaryBtn: {
    display: "none",
    "@media (min-width: 1024px)": {
      display: "grid",
      fontWeight: "900",
      fontSize: "48px",
    },
  },
  mobileMessage: {
    display: "grid",
    "@media (min-width: 1024px)": {
      display: "none",
    },
  },
});
