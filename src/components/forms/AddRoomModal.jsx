import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { createUseStyles } from "react-jss";

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

const AddRoomModal = (props) => {
  //eslint-disable-next-line
  const [addRoom, { loading, data, error }] = useMutation(addRoomMutation);

  const [price, setPrice] = useState();
  const [gender, setGender] = useState();
  const [occupancy, setOccupancy] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    try {
      addRoom({
        variables: {
          price: parseInt(price, 10),
          occupancy,
          gender,
          street: "600 South Pine Hill Rd",
          parish: "Georgia",
          town_city: "Griffin",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const classes = useStyles();

  return (
    <form onSubmit={onSubmit} className={classes.container}>
      <div className={classes.image}></div>
      <button className={classes.uploadPhotoBtn}>Upload Photo</button>
      <div className={classes.inputContainer}>
        <h4 className={classes.label}>Occupancy Type</h4>
        <input
          type="text"
          className={classes.input}
          value={occupancy}
          onChange={(e) => setOccupancy(e.target.value)}
        />
      </div>
      <div className={classes.inputContainer}>
        <h4 className={classes.label}>Gender</h4>
        <input
          type="text"
          className={classes.input}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div className={classes.inputContainer}>
        <h4 className={classes.label}>Amenities</h4>
        <input type="text" className={classes.input} />
      </div>
      <div className={classes.inputContainer}>
        <h4 className={classes.label}>Rules</h4>
        <input type="text" className={classes.input} />
      </div>
      <div className={classes.inputContainer}>
        <h4 className={classes.label}>Price</h4>
        <input
          type="number"
          className={classes.input}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className={classes.inputContainer}>
        <h4 className={classes.label}>Anything Else?</h4>
        <textarea type="text" className={classes.textarea} />
      </div>
      <div className={classes.actionContainer}>
        <button className={classes.button} type="submit">
          Post Room
        </button>
        <button className={classes.cancelBtn} type="button">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddRoomModal;

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "2rem",
    width: "40rem",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "10rem",
    borderRadius: "10px",
    backgroundColor: "#e8e7ea",
    marginBottom: "1rem",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  },
  label: {
    fontWeight: 400,
    opacity: 0.5,
    marginBottom: "0.5rem",
  },
  input: {
    border: "none",
    borderRadius: "5px",
    height: "2rem",
    boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1)",
  },
  textarea: {
    border: "none",
    borderRadius: "5px",
    height: "5rem",
    boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1)",
  },
  actionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "3rem",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    width: "7rem",
    backgroundColor: "var(--primary-color)",
    borderRadius: "5px",
    padding: "5px 7px",
    color: "white",
    fontWeight: "500",
    fontSize: "1rem",
  },
  uploadPhotoBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    width: "10rem",
    backgroundColor: "var(--primary-color)",
    borderRadius: "5px",
    padding: "5px 7px",
    color: "white",
    fontWeight: "500",
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  cancelBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    width: "7rem",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "5px 7px",
    color: "black",
    fontWeight: "500",
    fontSize: "1rem",
  },
});
