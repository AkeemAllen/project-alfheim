import React from "react";
import "../stylesheets/Gallary.scss";
import { FaFilter, FaSearch } from "react-icons/fa";
import Card from "../components/GallaryCard";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_ROOMS = gql`
  query allRooms {
    allRooms {
      price
    }
  }
`;

const Gallary = () => {
  const { data, loading, error } = useQuery(GET_ROOMS);

  if (loading) return <div>loading</div>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div className="gallary-container">
      <div className="gallary-sidebar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3>Alfheim</h3>
        </Link>
      </div>
      <div className="gallary">
        <div className="filters">
          <button className="filter">
            Occupancy
            <FaFilter size="15" />{" "}
          </button>
          <button className="filter">
            Price Range
            <FaFilter size="15" />{" "}
          </button>
          <button className="filter">
            Gender
            <FaFilter size="15" />{" "}
          </button>
          <div className="input-container">
            <FaSearch size="18" className="input-icon" />{" "}
            <input className="input" placeholder="Seach..." />
          </div>
        </div>
        <div className="showcase">
          {data.allRooms.map((room) => {
            return <Card />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallary;
