import React from "react";
import "../stylesheets/OwnerAccount.scss";
// import { Link } from "react-router-dom";
import { logOut } from "../redux/actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
// import RoomManagement from "./AccountPages/RoomManagement";
// import { FiFileText, FiHome } from "react-icons/fi";
// import AccountSettings from "./AccountPages/AccountSettings";
import SideNav from "../components/SideNav";

const Account = (props) => {
  // const [current, setCurrent] = useState("roomManagement");

  return (
    <div>
      <SideNav />
      {/* <div className="account">
        {current === "roomManagement" ? <RoomManagement /> : null}
        {current === "accountSettings" ? <AccountSettings /> : null}
      </div> */}
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
