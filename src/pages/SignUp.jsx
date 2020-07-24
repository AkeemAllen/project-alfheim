import React from "react";
import "../stylesheets/SignUp.scss";
import { MdAccountCircle, MdLock } from "react-icons/md";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="signup-container">
        <div className="nav">
          <Link to="/" className="link">
            <button className="btn">Home</button>
          </Link>
          <Link to="/gallary" className="link">
            <button className="btn">Gallary</button>
          </Link>
        </div>
        <div className="form">
          <div className="form-logo">
            <h3>Alfheim</h3>
          </div>
          <h3 className="message">
            <strong>Register</strong> to create an account
          </h3>
          <div className="form-content">
            <h5>using</h5>
            <div className="single-sign-on">
              <button className="sign-on-btn">
                <FaGoogle size="18" />
                Google
              </button>
              <button className="sign-on-btn">
                <FaFacebook size="18" />
                Facebook
              </button>
            </div>
            <h5>or</h5>
            <div className="input">
              {/* <MdAccountCircle size="30" className="input-icon" />
              <input
                className="form-input"
                placeholder="Unique UserName"
              ></input> */}
            </div>
            <div className="input">
              <MdAccountCircle size="30" className="input-icon" />
              <input
                className="form-input"
                type="text"
                placeholder="Email"
              ></input>
            </div>
            <div className="input">
              <MdAccountCircle size="30" className="input-icon" />
              <input
                className="form-input"
                type="text"
                placeholder="Confirm Email"
              ></input>
            </div>
            <div className="input">
              <MdLock size="30" className="input-icon" />
              <input
                className="form-input"
                type="password"
                placeholder="Password"
              ></input>
            </div>
            <div className="input">
              <MdLock size="30" className="input-icon" />
              <input
                className="form-input"
                type="password"
                placeholder="Confirm Password"
              ></input>
            </div>
            <button className="sign-up-btn">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="question">
        <h3>
          Already Have An Account?{" "}
          <strong>
            <Link className="link" to="/signin">
              Sign In
            </Link>
          </strong>
        </h3>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SignUp;
