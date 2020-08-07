import React, { useState } from "react";
import "../../stylesheets/component-stylesheets/Register.scss";
import { MdLock, MdEmail } from "react-icons/md";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import useForm from "./useForm";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import SnackBar from "../SnackBar";
import Loading from "../Loading";

const registerMutation = gql`
  mutation register($email: String!, $password: String!) {
    createUser(
      userInput: {
        username: ""
        firstname: ""
        lastname: ""
        email: $email
        password: $password
        contact: ""
      }
    ) {
      email
    }
  }
`;
const Registration = () => {
  const [triggered, setTriggered] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleAnimationEnd = () => {
    setTriggered(false);
  };

  const stateSchema = {
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    confirmPassword: { value: "", error: "" },
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
    confirmPassword: {
      required: true,
      validator: {
        regEx: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/,
        error: "Must be longer than 6 characters, include at least (1) number",
      },
    },
  };

  function onSubmitForm(state) {
    const email = state.email.value;
    const password = state.password.value;
    register({ variables: { email, password } }).then((result) => {
      console.log(result);
      setMessage("Verify Your Email");
      setTriggered(true);
      setSuccess(true);
    });
    // try {
    //   } catch (err) {
    //     console.log(err);
    //     console.log(error);
    //     setMessage(err);
    //     setTriggered(true);
    //     setSuccess(false);
    // }
  }

  //eslint-disable-next-line
  const [register, { loading, data, error }] = useMutation(registerMutation, {
    errorPolicy: "all",
  });
  if (error) {
    console.log(error);
  }

  const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm
  );
  return (
    <div>
      {triggered ? (
        <SnackBar
          message={message}
          triggered={triggered}
          success={success}
          endAnimation={handleAnimationEnd}
        />
      ) : null}
      <form className="registration-form" onSubmit={handleOnSubmit}>
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
            <MdEmail size="25" className="input-icon" />
            <input
              className={state.email.error ? "form-error" : "form-input"}
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleOnChange}
            ></input>
          </div>
          {state.email.error && (
            <p style={{ color: "red" }}>{state.email.error}</p>
          )}
          <div className="input">
            <MdLock size="25" className="input-icon" />
            <input
              className={state.password.error ? "form-error" : "form-input"}
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleOnChange}
            ></input>
          </div>
          {state.password.error && (
            <p style={{ color: "red" }}>{state.password.error}</p>
          )}
          <div className="input">
            <MdLock size="25" className="input-icon" />
            <input
              className={
                state.confirmPassword.error ? "form-error" : "form-input"
              }
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleOnChange}
            ></input>
          </div>
          {state.confirmPassword.error && (
            <p style={{ color: "red" }}>{state.confirmPassword.error}</p>
          )}
          <button
            className={disable ? "disabled-btn" : "sign-up-btn"}
            type="submit"
            disabled={disable}
          >
            {loading ? <Loading /> : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
