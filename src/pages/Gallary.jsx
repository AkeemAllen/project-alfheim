import React, { useState } from "react";
import Card from "../components/GallaryCard";
import { Link } from "react-router-dom";
import { LineInput } from "../components/Inputs";

import { useQuery } from "@apollo/react-hooks";
import { createUseStyles } from "react-jss";
import { NormalButton } from "../components/Buttons";
import Loading from "../components/Loading";
import { getAllRooms } from "../gql/Queries";

const Gallary = () => {
  const { data, loading, error } = useQuery(getAllRooms);
  const classes = useStyles();

  const [occupancy, setOccupancy] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState("0");

  if (error) return <p>ERROR</p>;

  return (
    <div className={classes.container}>
      <div className={classes.filter_wrapper}>
        <div className={classes.filter}>
          <label className={classes.label}>Occupancy</label>
          <LineInput
            type="text"
            label="Single, Double, Any"
            onChange={(e) => setOccupancy(e.target.value)}
          />
        </div>
        <div className={classes.filter}>
          <label className={classes.label}>Gender</label>
          <LineInput
            type="text"
            label="Male, Female, Any"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className={classes.filter}>
          <label className={classes.label}>Price Limit</label>
          <LineInput
            type="number"
            label="> $0"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
      </div>
      {loading && !data ? (
        <Loading />
      ) : data.allRooms.length > 0 ? (
        <div className={classes.showcase}>
          {data.allRooms
            .filter((room) =>
              room.occupancy.toUpperCase().includes(occupancy.toUpperCase())
            )
            .filter((room) =>
              room.gender.toUpperCase().includes(gender.toUpperCase())
            )
            .filter((room) => {
              if ((parseInt(price, 10) === 0) | isNaN(parseInt(price, 10))) {
                return room;
              }
              return parseInt(room.price, 10) <= parseInt(price, 10);
            })
            .map((room) => {
              return (
                <Card
                  occupancy={room.occupancy}
                  price={room.price}
                  gender={room.gender}
                  street={room.street}
                  amenities={room.amenities}
                  rules={room.rules}
                  ownerInfo={room.owner}
                  image={room.image}
                />
              );
            })}
        </div>
      ) : (
        <h2 className={classes.showcase_empty}>
          Unable To Find Room Matching Criteria
        </h2>
      )}
      <Link to="/" style={{ position: "absolute", top: 10, left: 10 }}>
        <NormalButton text="<--Back" />
      </Link>
    </div>
  );
};

export default Gallary;

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateRows: "min-content 1fr",
    minHeight: "100vh",
    backgroundColor: "#f1f2fa",
    backgroundSize: "cover",
  },
  modal_wrapper: {
    display: "grid",
    gridTemplateRows: "1fr 3fr",
    rowGap: "2rem",
  },
  details_wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    columnGap: "2rem",
  },
  filter_wrapper: {
    display: "grid",
    gridTemplateColumns: "min-content min-content min-content min-content",
    columnGap: "3rem",
    padding: "2rem",
    paddingTop: "5rem",
    justifyContent: "center",
  },
  filter: {
    display: "grid",
  },
  label: {
    fontWeight: 600,
    color: "rgba(0,0,0,0.5)",
  },
  showcase: {
    display: "grid",
    gridTemplateColumns: "min-content min-content min-content",
    rowGap: "3rem",
    padding: "1rem",
    justifyContent: "center",
    columnGap: "3rem",
  },
  showcase_empty: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 800,
    color: "rgba(0,0,0,0.5)",
  },
});
