import React, { useState } from "react";
import "../stylesheets/OwnerAccount.scss";
import { MdFilterList, MdLibraryAdd } from "react-icons/md";
import room from "../assets/stock photos/room1.jpg";
import room2 from "../assets/stock photos/room3.jpg";
import { Link } from "react-router-dom";
import { logOut } from "../redux/actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import AddRoomModal from "../components/forms/AddRoomModal";
import EditRoomModal from "../components/forms/EditRoomModal";

const Account = (props) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const modalHandler = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  const modalHandlerEdit = (event) => {
    event.preventDefault();
    setOpenEdit(!openEdit);
  };

  return (
    <div className="account-container">
      <div className="account-sidebar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3>Alfheim</h3>
        </Link>
        <div className="logout" onClick={() => props.logOut()}>
          {/* <MdExitToApp size="20" color="white" /> */}
          <h3>Logout</h3>
        </div>
      </div>
      <div className="account">
        <div className="section">
          <h2>Room Management</h2>
          <div className="toolbar">
            <button className="add-room-btn" onClick={modalHandler}>
              Add Room
            </button>
            <div className="filter">
              <h6>Filter</h6>
              <MdFilterList size="20" />
            </div>
            <div className="filter-result">
              <h4>All</h4>
            </div>
          </div>
          <div className="rooms">
            <img
              src={room}
              alt="room"
              className="room"
              onClick={modalHandlerEdit}
            />
            <img src={room2} alt="room2" className="room" />
          </div>
        </div>
        <div className="section">
          <h2>Display Information</h2>
          <p>
            Potential Renters will be able to see this information and use it to
            contact you
          </p>
          <div className="info-container">
            <div className="info">
              <h3>Display Name</h3>
              <p>Akeem Allen</p>
            </div>
            <div className="info">
              <h3>Email</h3>
              <p>allenakeem8@gmail.com</p>
            </div>
            <div className="info">
              <header style={{ display: "flex", flexDirection: "row" }}>
                <h3>Contact Number</h3>
                <button className="add-number">
                  <MdLibraryAdd />
                  add contact
                </button>
              </header>
              <p>504-123-4567</p>
              <p>504-123-4567</p>
            </div>
          </div>
        </div>
        <AddRoomModal show={open} modalClosed={modalHandler} />
        <EditRoomModal show={openEdit} modalClosed={modalHandlerEdit} />
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
