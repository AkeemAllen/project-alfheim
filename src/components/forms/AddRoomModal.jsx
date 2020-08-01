import React, { useState } from "react";
import Backdrop from "../Backdrop";
import {
  MdInsertPhoto,
  MdMergeType,
  MdLocationSearching,
  MdMonetizationOn,
  MdHome,
} from "react-icons/md";
import { FaTransgender } from "react-icons/fa";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const addRoomMutation = gql`
  mutation createRoom($price: Int!, $occupancy: String!, $gender: String!) {
    createRoom(
      input: { price: $price, occupancy: $occupancy, gender: $gender }
    ) {
      price
      occupancy
      gender
      id
    }
  }
`;

const addLocationMutation = gql`
  mutation addLocation(
    $street: String!
    $parish: String!
    $town_city: String!
    $room: ID!
  ) {
    addLocation(
      input: {
        street: $street
        parish: $parish
        town_city: $town_city
        room: $room
      }
    ) {
      street
      parish
      town_city
      id
    }
  }
`;

const AddRoomModal = (props) => {
  const [addRoom, addRoomresult] = useMutation(addRoomMutation);
  const [addLocation, addLocationResult] = useMutation(addLocationMutation);

  const [price, setPrice] = useState();
  const [gender, setGender] = useState();
  const [occupancy, setOccupancy] = useState();

  const onSubmit = () => {
    addRoom({ variables: { price, occupancy, gender } });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <form
        onSubmit={onSubmit}
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
          <input
            className="input"
            placeholder="Occupancy Type"
            onChange={(e) => setOccupancy(e.target.value)}
          />
        </div>
        <div className="input-container">
          <FaTransgender size="18" className="input-icon" />{" "}
          <input
            className="input"
            placeholder="Gender"
            onChange={(e) => setGender(e.target.value)}
          />
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
          <input
            className="input"
            placeholder="Cost"
            onChange={(e) => setPrice(e.target.value)}
          />
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
      </form>
    </div>
  );
};

export default AddRoomModal;
