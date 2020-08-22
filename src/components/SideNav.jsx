import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import dashboardIcon from "../assets/icons/mdi_dashboard.png";
import settingsIcon from "../assets/icons/mdi_settings.png";
import monetizationIcon from "../assets/icons/mdi_monetization_on.png";
import assessmentIcon from "../assets/icons/mdi_assessment.png";
import { TextButton } from "./Buttons";
import { useSpring, animated, config } from "react-spring";
import PropTypes from "prop-types";
import { logOut } from "../redux/actions/authActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const SideNav = ({ current, setView, logOut, auth }) => {
  const classes = useStyles();
  const [settingsOptionsOpen, setSettingsOptionsOpen] = useState(false);

  const { opacity, transform } = useSpring({
    opacity: settingsOptionsOpen ? 1 : 0,
    transform: `scale(${settingsOptionsOpen ? 1 : 0.2})`,
    config: config.gentle,
  });

  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.sidenav}>
        <div className={classes.tabs}>
          <button
            className={
              current === "dashboard" ? classes.hightlighted : classes.tab
            }
            onClick={() => setView("dashboard")}
          >
            <img
              src={dashboardIcon}
              alt="dashboardIcon"
              width="30px"
              style={{ marginRight: "1rem" }}
            />
            Dashboard
          </button>
          <button
            className={
              current === "analytics" ? classes.hightlighted : classes.tab
            }
            onClick={() => setView("analytics")}
          >
            <img
              src={assessmentIcon}
              alt="assessmentIcon"
              width="30px"
              style={{ marginRight: "1rem" }}
            />
            Analytics
          </button>
          <button
            className={
              current === "payments" ? classes.hightlighted : classes.tab
            }
            onClick={() => setView("payments")}
          >
            <img
              src={monetizationIcon}
              alt="monetizationIcon"
              width="30px"
              style={{ marginRight: "1rem" }}
            />
            Payments
          </button>
        </div>
        <div
          style={{
            display: "grid",
            alignItems: "flex-end",
            position: "relative",
          }}
        >
          <div className={classes.profile}>
            <img
              src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="avatar"
              className={classes.avatar}
            />
            Akeem Allen
            <img
              src={settingsIcon}
              alt="avatar"
              width="30px"
              onClick={() => setSettingsOptionsOpen(true)}
            />
          </div>
          <animated.div
            className={classes.settingsOptions}
            style={{ opacity, transform }}
          >
            <TextButton
              text="Settings"
              onClick={() => {
                setView("settings");
                setSettingsOptionsOpen(false);
              }}
            />
            <TextButton
              text="Logout"
              onClick={() => {
                logOut();
                setSettingsOptionsOpen(false);
              }}
            />
          </animated.div>
        </div>
      </div>
    </div>
  );
};

SideNav.propTypes = {
  logOut: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: bindActionCreators(logOut, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);

const useStyles = createUseStyles({
  container: {
    display: "flex",
    height: "100vh",
    width: "250px",
    backgroundColor: "var(--main-color)",
    // backgroundColor: "var(--main-color)",
    // borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
  sidenav: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    padding: "10px",
    width: "100%",
  },
  tabs: {
    display: "grid",
    rowGap: "1rem",
    gridAutoRows: "min-content",
    // justifyContent: "center",
    marginTop: "3rem",
  },
  hightlighted: {
    display: "flex",
    alignItems: "center",
    color: "white",
    padding: "0.5rem 2.5rem 0.5rem 0.5rem",
    border: "none",
    backgroundColor: "#4D5FA9",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: 600,
    "&:focus": {
      outline: "none",
    },
  },
  tab: {
    display: "flex",
    alignItems: "center",
    color: "white",
    padding: "0.5rem 2.5rem 0.5rem 0.5rem",
    border: "none",
    backgroundColor: "var(--main-color)",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: 600,
    "&:focus": {
      outline: "none",
    },
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "50px",
    backgroundColor: "#4D5FA9",
    borderRadius: "5px",
    // padding: "5px",
    color: "white",
    fontWeight: 600,
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    // marginLeft: "0.5rem",
    // marginRight: "0.5rem",
  },
  settingsOptions: {
    position: "absolute",
    padding: "1rem",
    backgroundColor: "#f1f2fa",
    right: -80,
    zIndex: 1,
    bottom: 70,
    borderRadius: "5px",
    display: "grid",
    justifyContent: "center",
    rowGap: "0.5rem",
  },
});
