import React from "react";
import "../stylesheets/Gallary.scss";
import { FaFilter, FaSearch } from "react-icons/fa";
import Card from "../components/GallaryCard";
import { Link } from "react-router-dom";
import { LineInput } from "../components/Inputs";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { createUseStyles } from "react-jss";
import { NormalButton } from "../components/Buttons";

const GET_ROOMS = gql`
  query allRooms {
    allRooms {
      price
      occupancy
      gender
      street
    }
  }
`;

const Gallary = () => {
  const { data, loading, error } = useQuery(GET_ROOMS);
  const classes = useStyles();

  if (loading) return <div>loading</div>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div className={classes.container}>
      <div className={classes.filter_wrapper}>
        {/* <h2 style={{ justifySelf: "flex-end", alignSelf: "flex-end" }}>
          Filters
        </h2> */}
        <div className={classes.filter}>
          <label className={classes.label}>Occupancy</label>
          <LineInput type="text" label="Single, Double, Any" />
        </div>
        <div className={classes.filter}>
          <label className={classes.label}>Gender</label>
          <LineInput type="text" label="Male, Female, Any" />
        </div>
        <div className={classes.filter}>
          <label className={classes.label}>Price</label>
          <LineInput type="number" label="> $0" />
        </div>
      </div>
      {data.allRooms.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "min-content min-content min-content",
            padding: "1rem",
            justifyContent: "center",
            columnGap: "3rem",
          }}
        >
          {data.allRooms.map((room) => {
            return (
              <Card
                occupancy={room.occupancy}
                price={room.price}
                gender={room.gender}
                street={room.street}
              />
            );
          })}
        </div>
      ) : (
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 800,
            color: "rgba(0,0,0,0.5)",
          }}
        >
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
    height: "100vh",
    backgroundColor: "#f1f2fa",
  },
  filter_wrapper: {
    display: "grid",
    gridTemplateColumns: "min-content min-content min-content min-content",
    columnGap: "3rem",
    padding: "2rem",
    justifyContent: "center",
  },
  filter: {
    display: "grid",
  },
  label: {
    fontWeight: 600,
    color: "rgba(0,0,0,0.5)",
  },
});
