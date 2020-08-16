import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { createUseStyles } from "react-jss";
import { BoxedInput } from "../Inputs";
import { NormalButton } from "../Buttons";

const addRoomMutation = gql`
  mutation createRoom(
    $price: Int!
    $occupancy: String!
    $gender: String!
    $street: String!
    $town_city: String!
    $parish: String!
  ) {
    createRoom(
      input: {
        price: $price
        occupancy: $occupancy
        gender: $gender
        street: $street
        town_city: $town_city
        parish: $parish
      }
    ) {
      price
      occupancy
      gender
      street
      town_city
      parish
    }
  }
`;

const AddRoomModal = ({ setMounted, setMessage, setStatus }) => {
  //eslint-disable-next-line
  const [addRoom, { loading, data, error }] = useMutation(addRoomMutation);

  const [price, setPrice] = useState();
  const [gender, setGender] = useState("");
  const [occupancy, setOccupancy] = useState("");
  const [street, setStreet] = useState("");
  const [parish, setParish] = useState("");
  const [town_city, setTown] = useState("");
  const [rules, setRules] = useState([]);
  const [amenities, setAmenities] = useState([]);

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
        },
      }).then((result) => {
        setMounted(true);
        setMessage("Room Added Successfully");
        setStatus("success");
        setTimeout(() => setMounted(false), 3000);
        console.log(result);
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
          label="Occupancy"
          onChange={(e) => setOccupancy(e.target.value)}
          value={occupancy}
        />
        <BoxedInput
          label="Gender"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
        />
        <BoxedInput label="Rules" onChange={(e) => setRules(e.target.value)} />
        <BoxedInput
          label="Amenities"
          onChange={(e) => setAmenities(e.target.value)}
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

export default AddRoomModal;

const useStyles = createUseStyles({
  container: {
    display: "grid",
    rowGap: "1rem",
  },
});
