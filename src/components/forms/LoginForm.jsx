import React, { useState, useEffect, useRef } from "react";
import "../../stylesheets/component-stylesheets/Login.scss";
import { MdLock, MdEmail } from "react-icons/md";
import { Redirect } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import useForm from "./useForm";
import gql from "graphql-tag";
import Loading from "../Loading";
import { useSpring, animated, config } from "react-spring";
import { authorizeUser } from "../../redux/actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { useLazyQuery } from "react-apollo";
import SnackBar from "../SnackBar";

const loginQuery = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login = (props) => {
  const [triggered, setTriggered] = useState(false);
  const [login, { loading, data, error }] = useLazyQuery(loginQuery);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      try {
        props.authorizeUser(data.login.token);
        console.log("running");
      } catch (err) {
        console.log(err);
      }
    } else {
      isMounted.current = true;
    }
  }, [data]);

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

  const { transform, color, backgroundColor } = useSpring({
    config: { mass: 1, tension: 1000, friction: 5 },
    transform: `translateX(4px)`,
    color: `white`,
    backgroundColor: `#ff0055`,
  });

  const { auth, user, loginError } = props;

  if (auth) {
    return <Redirect to="/account" />;
  }

  return (
    <div>
      <SnackBar message="Verify Your Email" triggered={triggered} />
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
            <MdEmail size="25" className="input-icon" />
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
            <MdLock size="25" className="input-icon" />
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
          <animated.button
            style={{ transform }}
            className={disable ? "disabled-btn" : "sign-in-btn"}
            type="submit"
            disabled={disable}
          >
            {loading ? <Loading /> : "Sign In"}
          </animated.button>
          {/* {validToken ? <Redirect to="/account" /> : null} */}
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  authorizeUser: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
  loginError: PropTypes.string,
};

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
  loginError: state.auth.loginError,
});

const mapDispatchToProps = (dispatch) => ({
  authorizeUser: bindActionCreators(authorizeUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
