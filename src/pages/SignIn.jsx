import React from "react";
import "../stylesheets/SignIn.scss";
import { MdAccountCircle, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
// import Footer from "../components/Footer";

const SignIn = () => {
  return (
    <div>
      <div className="signin-container">
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
            <strong>Sign In</strong> to view you account
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
            <button className="sign-in-btn">Sign In</button>
          </div>
        </div>
      </div>
      <div className="question">
        <h3>
          Don't Have An Account?{" "}
          <strong>
            <Link className="link" to="/registration">
              Sign Up
            </Link>
          </strong>
        </h3>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SignIn;
