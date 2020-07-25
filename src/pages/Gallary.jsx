import React from "react";
import "../stylesheets/Gallary.scss";
import { FaFilter, FaSearch } from "react-icons/fa";
import Card from "../components/GallaryCard";
import { Link } from "react-router-dom";

const Gallary = () => {
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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
