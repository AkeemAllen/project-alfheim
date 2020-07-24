import React from "react";
import "../stylesheets/SignUp.scss";
import { MdAccountCircle, MdLock } from "react-icons/md";
import Footer from "../components/Footer";

const SignUp = () => {
  return (
    <div>
      <div className="signup-container">
        <div className="nav">
          <button className="btn">Home</button>
          <button className="btn">Gallary</button>
        </div>
        <div className="form">
          <div className="form-logo">
            <h3>Alfheim</h3>
          </div>
          <h3 className="message">
            <strong>Sign In</strong> to view you account
          </h3>
          <div className="form-content">
            <div className="input">
              <MdAccountCircle size="30" className="input-icon" />
              <input
                className="form-input"
                placeholder="Username/Email"
              ></input>
            </div>
            <div className="input">
              <MdLock size="30" className="input-icon" />
              <input className="form-input" placeholder="Password"></input>
            </div>
            <button>Sign In</button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SignUp;
