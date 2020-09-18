import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dashboard from "./AccountPages/Dashboard";
import Settings from "./AccountPages/Settings";
import Analytics from "./AccountPages/Analytics";
import SideNav from "../components/SideNav";
import { createUseStyles } from "react-jss";
import Payments from "./AccountPages/Payments";
import { withRouter } from "react-router";

const Account = ({ auth, history }) => {
  const classes = useStyles();
  const [current, setCurrent] = useState("dashboard");

  const token = localStorage.getItem("token");

  if (token === undefined || token === null) {
    history.push("/");
  }

  return (
    <div className={classes.container}>
      <div
        style={{
          position: "fixed",
          display: "flex",
          height: "100vh",
        }}
      >
        <SideNav current={current} setView={setCurrent} />
      </div>
      <div className={classes.account}>
        {current === "dashboard" ? <Dashboard /> : null}
        {current === "settings" ? <Settings /> : null}
        {current === "analytics" ? <Analytics /> : null}
        {current === "payments" ? <Payments /> : null}
      </div>
    </div>
  );
};

Account.propTypes = {
  auth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
});

export default connect(mapStateToProps, [])(withRouter(Account));

const useStyles = createUseStyles({
  container: {
    display: "grid",
    // gridTemplateColumns: "0.1fr 1fr",
  },
  account: {
    display: "grid",
    gridAutoRows: "min-content",
    marginLeft: "18rem",
  },
});
