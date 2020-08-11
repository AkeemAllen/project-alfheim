import React from "react";
import "../../stylesheets/Checkbox.scss";

const Checkbox = ({ onClick, label }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="checkbox-container">
        <input type="checkbox" id="check" hidden onClick={onClick} />
        <label for="check" className="checkmark"></label>
      </div>
      {label}
    </div>
  );
};

export default Checkbox;
