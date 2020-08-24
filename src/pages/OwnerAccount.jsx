import React, { useState } from "react";
import "../stylesheets/OwnerAccount.scss";
import { logOut } from "../redux/actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Dashboard from "./AccountPages/Dashboard";
import Settings from "./AccountPages/Settings";
import Analytics from "./AccountPages/Analytics";
import SideNav from "../components/SideNav";
import { createUseStyles } from "react-jss";
import Payments from "./AccountPages/Payments";

const Account = () => {
  const classes = useStyles();
  const [current, setCurrent] = useState("dashboard");

  return (
    <div className={classes.container}>
      {/* <div style={{ position: "relative" }}> */}
      <SideNav current={current} setView={setCurrent} />
      {/* </div> */}
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
  logOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logOut: bindActionCreators(logOut, dispatch),
});

export default connect(null, mapDispatchToProps)(Account);

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "0.1fr 1fr",
  },
  account: {
    display: "grid",
    gridAutoRows: "min-content",
  },
});
