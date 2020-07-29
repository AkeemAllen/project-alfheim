import React, { useState } from "react";
import "../stylesheets/component-stylesheets/Login.scss";
import { MdAccountCircle, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import useForm from "./useForm";
import gql from "graphql-tag";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import jwt from "jsonwebtoken";
import Loading from "./Loading";

const loginQuery = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const stateSchema = {
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  };

  const validationStateSchema = {
    email: {
      required: true,
      validator: {
        //eslint-disable-next-line
        regEx: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
        error: "Invalid Email Format",
      },
    },
    password: {
      required: true,
      validator: {
        regEx: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/,
        error: "Must be longer than 6 characters, include at least (1) number",
      },
    },
  };

  const validateToken = (token) => {
    const decodedToken = jwt.verify(token, process.env.REACT_APP_SECRET);
  };

  const onSubmitForm = (state) => {
    const email = state.email.value;
    const password = state.password.value;
    login({ variables: { email, password } });
  };

  const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm
  );

  const [login, { loading, data }] = useLazyQuery(loginQuery);
  const [tempLoading, setLoading] = useState(true);

  return (
    <form className="login-form" onSubmit={handleOnSubmit}>
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
            className={state.email.error ? "form-error" : "form-input"}
            placeholder="Email"
            name="email"
            value={state.email.value}
            onChange={handleOnChange}
          ></input>
        </div>
        {state.email.error && (
          <p style={{ color: "red" }}>{state.email.error}</p>
        )}
        <div className="input">
          <MdLock size="30" className="input-icon" />
          <input
            className={state.password.error ? "form-error" : "form-input"}
            placeholder="Password"
            type="password"
            name="password"
            value={state.password.value}
            onChange={handleOnChange}
          ></input>
        </div>
        {state.password.error && (
          <p style={{ color: "red" }}>{state.password.error}</p>
        )}
        {/* <Link to="/account" style={{ textDecoration: "none", color: "white" }}> */}
        <button
          className={disable ? "disabled-btn" : "sign-in-btn"}
          type="submit"
          disabled={disable}
        >
          {tempLoading ? <Loading /> : "Sign In"}
        </button>
        {/* </Link> */}
      </div>
    </form>
  );
};

export default Login;
