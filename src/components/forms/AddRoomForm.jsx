import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { createUseStyles } from "react-jss";
import { BoxedInput } from "../Inputs";
import { NormalButton } from "../Buttons";
import { createRoom } from "../../gql/Mutations";
import { addRoom as newRoom } from "../../redux/actions/roomActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const AddRoomModal = ({
  setMounted,
  setMessage,
  setStatus,
  newRoom,
  setOpen,
}) => {
  //eslint-disable-next-line
  const [addRoom, { loading, data, error }] = useMutation(createRoom);

  const [price, setPrice] = useState();
  const [gender, setGender] = useState("");
  const [occupancy, setOccupancy] = useState("");
  const [street, setStreet] = useState("");
  const [parish, setParish] = useState("");
  const [town_city, setTown] = useState("");
  const [personalID, setPersonalID] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    try {
      addRoom({
        variables: {
          price: parseInt(price, 10),
          occupancy,
          gender,
          street,
          parish,
          town_city,
          personalID,
        },
      }).then((result) => {
        setMounted(true);
        setMessage("Room Added Successfully");
        setStatus("success");
        setOpen(false);
        setTimeout(() => setMounted(false), 3000);
        console.log(result);
        newRoom(result.data.createRoom);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const classes = useStyles();

  return (
    <div>
      <form onSubmit={onSubmit} className={classes.container}>
        <BoxedInput
          label="Room ID (can be anything)"
          onChange={(e) => setPersonalID(e.target.value)}
          value={personalID}
        />
        <BoxedInput
          label="Occupancy"
          onChange={(e) => setOccupancy(e.target.value)}
          value={occupancy}
        />
        <BoxedInput
          label="Gender"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
        />
        <BoxedInput
          label="Street"
          onChange={(e) => setStreet(e.target.value)}
          value={street}
        />
        <BoxedInput
          label="Town_City"
          onChange={(e) => setTown(e.target.value)}
          value={town_city}
        />
        <BoxedInput
          label="Parish"
          onChange={(e) => setParish(e.target.value)}
          value={parish}
        />
        <BoxedInput
          label="Price"
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          value={price}
        />
        <NormalButton text="Add Room" type="submit" />
      </form>
    </div>
  );
};

AddRoomModal.propTypes = {
  newRoom: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  newRoom: bindActionCreators(newRoom, dispatch),
});

export default connect(null, mapDispatchToProps)(AddRoomModal);

const useStyles = createUseStyles({
  container: {
    display: "grid",
    rowGap: "1rem",
  },
});
