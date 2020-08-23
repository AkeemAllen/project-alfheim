import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { createUseStyles } from "react-jss";
import { BoxedInput } from "../Inputs";
import { NormalButton } from "../Buttons";
import { Multiselect } from "multiselect-react-dropdown";
import { createRoom } from "../../gql/Mutations";

const AddRoomModal = ({ setMounted, setMessage, setStatus }) => {
  //eslint-disable-next-line
  const [addRoom, { loading, data, error }] = useMutation(createRoom);

  const [price, setPrice] = useState();
  const [gender, setGender] = useState("");
  const [occupancy, setOccupancy] = useState("");
  const [street, setStreet] = useState("");
  const [parish, setParish] = useState("");
  const [town_city, setTown] = useState("");
  const [personalID, setPersonalID] = useState("");
  const [rules, setRules] = useState([]);
  let [amenities, setAmenities] = useState([]);

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
          rules: rules[0],
          amenities: amenities[0],
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
        <Multiselect
          placeholder="Rules"
          options={["No Visitors", "No Food In Rooms"]}
          isObject={false}
          onSelect={(selectedList) => {
            setRules([selectedList]);
          }}
          onRemove={(selectedList) => {
            setRules([selectedList]);
          }}
          style={{
            searchBox: {
              borderRadius: "10px",
              border: "2px solid #263D9C",
              padding: "0.8rem 3rem 0.8rem 1rem",
              "&:focus": {
                outline: "none",
                boxShadow: "0px 0px 1px 4px #A3B4FA",
                border: "none",
              },
            },
            inputField: {
              fontSize: "1rem",
            },
          }}
        />
        <Multiselect
          placeholder="Amenities"
          options={["Water", "Electricity"]}
          isObject={false}
          onSelect={(selectedList) => {
            setAmenities([selectedList]);
          }}
          onRemove={(selectedList) => {
            setAmenities([selectedList]);
          }}
          style={{
            searchBox: {
              borderRadius: "10px",
              border: "2px solid #263D9C",
              padding: "0.8rem 3rem 0.8rem 1rem",
              "&:focus": {
                outline: "none",
                boxShadow: "0px 0px 1px 4px #A3B4FA",
                border: "none",
              },
            },
            inputField: {
              fontSize: "1rem",
            },
          }}
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
  mutliselect: {
    padding: "0.8rem 3rem 0.8rem 1rem",
    backgroundColor: "white",
    borderRadius: "10px",
    border: "2px solid #263D9C",
    fontSize: "1rem",
    transition: "all",
    transitionDuration: "250ms",
    "&:focus": {
      outline: "none",
      boxShadow: "0px 0px 1px 4px #A3B4FA",
      border: "none",
    },
  },
});
