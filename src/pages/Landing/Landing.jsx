import React from "react";
import { createUseStyles } from "react-jss";
import { NormalButton, TextButton } from "../../components/Buttons";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "recompose";
import AtHome from "../../assets/stock photos/undraw_at_home_octe.svg";
import "./Landing.scss";

const Landing = ({ isLoggedIn, email, history }) => {
  return (
    <div className="landing-container">
      <nav className="landing-navigation">
        <h1>JamaicanLiving</h1>
        {/* {isLoggedIn === "true" ? (
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
        ) : null} */}
      </nav>
      <div className="landing-content">
        <h2 className="landing-header">No Place Like Ja</h2>
        <p>
          This site serves to aggregate and present real estate options in and
          around the Kingston Metropolitan area.
        </p>
        <img src={AtHome} alt="home" className="landing-media" />
        <div className="landing-btn">
          <NormalButton
            text="View Gallary"
            onClick={() => history.push("/gallary")}
          />
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  firstname: PropTypes.string,
  isLoggedIn: PropTypes.string,
  email: PropTypes.string,
};

const mapStateToProps = (state) => ({
  firstname: state.auth.firstname,
  isLoggedIn: state.auth.isLoggedIn,
  email: state.auth.email,
});

const ComposedLanding = compose(withRouter)(Landing);

export default connect(mapStateToProps, [])(ComposedLanding);

// const useStyles = createUseStyles({
//   container: {},
//   navigation: {
//     display: "grid",
//     "@media (min-width: 1024px)": {
//       gridTemplateColumns: "1fr 300px",
//       margin: "2rem",
//     },
//   },
//   authBtns: {
//     display: "none",
//     "@media (min-width: 1024px)": {
//       display: "grid",
//       gridTemplateColumns: "1fr 1fr",
//       columnGap: "1rem",
//     },
//   },
// });