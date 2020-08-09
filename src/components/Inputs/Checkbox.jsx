import React from "react";
import "../../stylesheets/Checkbox.scss";

const Checkbox = ({ onClick }) => {
  return (
    <div className="checkbox-container">
      <input type="checkbox" id="check" hidden onClick={onClick} />
      <label for="check" className="checkmark"></label>
    </div>
  );
};

export default Checkbox;
