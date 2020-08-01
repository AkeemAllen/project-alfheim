import React, { useState } from "react";
import "../stylesheets/OwnerAccount.scss";
import { Link } from "react-router-dom";
import { logOut } from "../redux/actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import RoomManagement from "./AccountPages/RoomManagement";
import { FiFileText, FiHome } from "react-icons/fi";
import DisplayInformation from "./AccountPages/DisplayInformation";

const Account = (props) => {
  const [current, setCurrent] = useState("roomManagement");

  return (
    <div className="account-container">
      <div className="account-sidebar">
        <header>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3>Alfheim</h3>
          </Link>
        </header>
        <div className="nav">
          <button
            className="nav-item-btn"
            onClick={() => setCurrent("roomManagement")}
          >
            <FiHome size="20" className="icon" color="black" />
            Room Management
          </button>
          <button
            className="nav-item-btn"
            onClick={() => setCurrent("accountSettings")}
          >
            <FiFileText size="20" className="icon" />
            Account Settings
          </button>
        </div>
      </div>
      <div className="account">
        {current === "roomManagement" ? <RoomManagement /> : null}
        {current === "accountSettings" ? <DisplayInformation /> : null}
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
