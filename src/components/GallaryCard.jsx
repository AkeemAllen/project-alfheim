import React from "react";
import "../stylesheets/component-stylesheets/GallaryCard.scss";
import room from "../assets/stock photos/room2.jpg";
import { MdLocationSearching } from "react-icons/md";

const GallaryCard = () => {
  return (
    <div className="gallary-card">
      <div className="media">
        <img src={room} alt="media" className="media" />
      </div>
      <div className="title">
        <h3>Single Occupancy - Male</h3>
      </div>
      <div className="content">
        <div className="location">
          <MdLocationSearching size="15" />
          <h3>4 RiverView Avenue, Kingston 5</h3>
        </div>
      </div>
      <div className="footer">
        <h3>$15000/mth</h3>
      </div>
    </div>
  );
};

export default GallaryCard;
