import React from "react";
import Backdrop from "../Backdrop";
import {
  MdInsertPhoto,
  MdMergeType,
  MdLocationSearching,
  MdMonetizationOn,
  MdHome,
} from "react-icons/md";
import { FaTransgender } from "react-icons/fa";

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

export default EditRoomModal;
