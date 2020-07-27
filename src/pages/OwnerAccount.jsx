import React, { useState } from "react";
import "../stylesheets/OwnerAccount.scss";
import {
  MdFilterList,
  MdLibraryAdd,
  MdInsertPhoto,
  MdMergeType,
  MdLocationSearching,
  MdMonetizationOn,
  MdHome,
  // MdExitToApp,
} from "react-icons/md";
import { FaTransgender } from "react-icons/fa";
import room from "../assets/stock photos/room1.jpg";
import room2 from "../assets/stock photos/room3.jpg";
import { Link } from "react-router-dom";

const Account = () => {
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
        <div className="logout">
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

const Backdrop = (props) =>
  props.show ? <div className="backdrop" onClick={props.clicked}></div> : null;

export default Account;

const AddRoomModal = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className="account-modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? 1 : 0,
        }}
      >
        <div className="placeholder-img">
          <MdInsertPhoto size="50" />
        </div>
        <button id="upload">Upload Photo(s)</button>
        <div className="input-container">
          <MdMergeType size="18" className="input-icon" />{" "}
          <input className="input" placeholder="Occupancy Type" />
        </div>
        <div className="input-container">
          <FaTransgender size="18" className="input-icon" />{" "}
          <input className="input" placeholder="Gender" />
        </div>
        <div className="input-container">
          <MdLocationSearching size="18" className="input-icon" />{" "}
          <input className="input" placeholder="Location" />
        </div>
        <div className="input-container">
          <MdHome size="18" className="input-icon" />{" "}
          <input className="input" placeholder="Amenities" />
        </div>
        <div className="input-container">
          <MdMonetizationOn size="18" className="input-icon" />{" "}
          <input className="input" placeholder="Cost" />
        </div>
        <div className="input-container">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Write a full description or other things to note about occupancy..."
          ></textarea>
        </div>
        <button id="post-room">Post Room</button>
      </div>
    </div>
  );
};

const EditRoomModal = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className="account-modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? 1 : 0,
        }}
      >
        <div className="placeholder-img">
          <MdInsertPhoto size="50" />
        </div>
        <button id="upload">Replace Photo(s)</button>
        <div className="input-container">
          <MdMergeType size="18" className="input-icon" />{" "}
          <input className="input" placeholder="Occupancy Type" />
        </div>
        <div className="input-container">
          <FaTransgender size="18" className="input-icon" />{" "}
          <input className="input" placeholder="Gender" />
        </div>
        <div className="input-container">
          <MdLocationSearching size="18" className="input-icon" />{" "}
          <input className="input" placeholder="Location" />
        </div>
        <div className="input-container">
          <MdHome size="18" className="input-icon" />{" "}
          <input className="input" placeholder="Amenities" />
        </div>
        <div className="input-container">
          <MdMonetizationOn size="18" className="input-icon" />{" "}
          <input className="input" placeholder="Cost" />
        </div>
        <div className="input-container">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Write a full description or other things to note about occupancy..."
          ></textarea>
        </div>
        <button id="post-room">Post Room Update</button>
      </div>
    </div>
  );
};
