import React, { useRef, useEffect } from "react";
import SnackBar from "../components/SnackBars";
import { createUseStyles } from "react-jss";
import { BoxedInput } from "../components/Inputs";
import { NormalButton } from "../components/Buttons";
import { Link } from "react-router-dom";
import useForm from "../components/forms/useForm";
import gql from "graphql-tag";
import { useLazyQuery } from "react-apollo";
import { authorizeUser } from "../redux/actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

const loginQuery = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login = (props) => {
  const classes = useStyles();

  const [login, { loading, data, error }] = useLazyQuery(loginQuery, {
    errorPolicy: "all",
  });

  const isMounted = useRef(false);

  useEffect(
    () => {
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
    },
    //eslint-disable-next-line
    [data]
  );

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

  function onSubmitForm(state) {
    const email = state.email.value;
    const password = state.password.value;
    login({ variables: { email, password } });
  }

  const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm
  );

  return (
    <div className={classes.container}>
      {/* <SnackBar mounted={snackBarMounted} status={success} text={message} /> */}
      <div
        style={{ backgroundColor: "var(--main-color)", height: "100vh" }}
      ></div>
      <div
        style={{
          boxShadow: "0 0 25px rgba(0,0,0,0.5)",
          height: "100vh",
          display: "grid",
        }}
      >
        <div className={classes.formContainer}>
          {/* <img src={logo} alt="Logo" width="100" style={{ margin: "auto" }} /> */}
          <h1 style={{ margin: "auto" }}>Login</h1>
          <form className={classes.form} onSubmit={handleOnSubmit}>
            <BoxedInput
              label="Email"
              onChange={handleOnChange}
              name="email"
              errorMessage={state.email.error}
              invalidInput={state.email.error ? true : false}
            />
            <BoxedInput
              label="Password"
              onChange={handleOnChange}
              name="password"
              type="password"
              errorMessage={state.password.error}
              invalidInput={state.password.error ? true : false}
            />
            <NormalButton text="Login" disabled={disable} type="submit" />
            <p>
              Don't Have An Account? <Link to="/register">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  authorizeUser: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
  loginError: PropTypes.string,
  triggered: PropTypes.string,
};

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
  loginError: state.auth.loginError,
  triggered: state.snackBar.triggered,
});

const mapDispatchToProps = (dispatch) => ({
  authorizeUser: bindActionCreators(authorizeUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const useStyles = createUseStyles({
  container: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    gridTemplateColumns: "1fr 1fr",
  },
  formContainer: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    justifyContent: "center",
    alignItems: "center",
    // boxShadow: "0 0 25px rgba(0,0,0,0.5)",
    height: "25rem",
    marginTop: "10rem",
  },
  form: {
    display: "grid",
    rowGap: "2rem",
    textAlign: "center",
  },
});
