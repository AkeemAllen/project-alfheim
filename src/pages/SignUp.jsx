import React from "react";
import "../stylesheets/SignUp.scss";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="form">
        <div className="form-logo">
          <h3>Alfheim</h3>
        </div>
        <h3 className="message">
          <strong>Sign In</strong> to view you account
        </h3>
        <div className="form-content">
          <input className="form-input"></input>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
