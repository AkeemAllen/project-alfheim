import React from "react";
import "./NavBar.scss";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  return (
    <nav className="navigation" onClick={() => history.push("/")}>
      <h1>JamaicanLiving</h1>
    </nav>
  );
};

export default NavBar;
