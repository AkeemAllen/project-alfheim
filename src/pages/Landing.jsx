import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { createUseStyles } from "react-jss";
import { NormalButton, TextButton } from "../components/Buttons";
import room from "../assets/stock photos/room1.jpg";
import logo from "../assets/Logo.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "recompose";

const Landing = ({ auth, firstname, history }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <nav className={classes.navigation}>
        <h1 className={classes.navigationHeader}>Alfheim</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "1rem",
          }}
        >
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
      </nav>
      <div className={classes.contentContainer}>
        <section className={classes.descSection}>
          <h1
            style={{
              fontWeight: "900",
              fontSize: "48px",
            }}
          >
            Search For Rooms Without The Hassel
          </h1>
          <text style={{ lineHeight: "2rem" }}>
            On this platform Landlords are able to create accounts and show off
            their rooms to prospective buyers. On the other hand
            Students/Rentors are able to go through a large selection of rooms
            from the comfort of their homes.
          </text>
          <NormalButton
            text="View Gallary"
            color="51cb20"
            darkerColor="3e941c"
            onClick={() => history.push("/gallary")}
          />
        </section>
      </div>
    </div>
  );
};

Landing.propTypes = {
  auth: PropTypes.bool.isRequired,
  firstname: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
  firstname: state.auth.firstname,
});

const ComposedLanding = compose(withRouter)(Landing);

export default connect(mapStateToProps, [])(ComposedLanding);

const useStyles = createUseStyles({
  container: {},
  navigation: {
    display: "grid",
    gridTemplateColumns: "1fr 300px",
    margin: "2rem",
  },
  navigationHeader: {
    fontFamily: "Lobster",
    fontSize: "36px",
  },
  contentContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    // marginLeft: "3rem",
    // marginRight: "3rem",
    // backgroundColor: "#f1f2fa",
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
  },
});
