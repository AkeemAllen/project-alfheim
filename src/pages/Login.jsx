import React, { useRef, useEffect } from "react";
import SnackBar from "../components/SnackBars";
import { createUseStyles } from "react-jss";
import { BoxedInput } from "../components/Inputs";
import { NormalButton, TextButton } from "../components/Buttons";
import useForm from "../components/forms/useForm";
import { useLazyQuery } from "react-apollo";
import { authorizeUser } from "../redux/actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { login as loginQuery } from "../gql/Queries";
import { useState } from "react";
import { withFirebase } from "../components/Firebase";
import { withRouter } from "react-router";
import { compose } from "recompose";
import Loading from "../components/Loading";

const Login = ({
  history,
  authorizeUser,
  mounted,
  status,
  message,
  firebase,
}) => {
  const classes = useStyles();

  //eslint-disable-next-line
  const [login, { error, data }] = useLazyQuery(loginQuery, {
    errorPolicy: "all",
  });

  const isMounted = useRef(false);

  const [emailLogin, setEmailLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      if (isMounted.current) {
        try {
          authorizeUser(data.login.token, data.login.firstTimeLogIn);
        } catch (err) {
          console.log(error);
        }
      } else {
        isMounted.current = true;
      }
    },
    //eslint-disable-next-line
    [data, error]
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
        regEx: /^(.*)$/,
        error:
          "At least 8 characters, uppercase, lowercase, number, and a symbol",
      },
    },
  };

  const onSignInWithGoogle = () => {
    firebase
      .doSignInWithPopUp()
      .then((authData) => {
        setLoading(true);
        authorizeUser(authData);
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          history.push("/account");
        }, 4000);
      });
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
    <div>
      <SnackBar mounted={mounted} status={status} text={message} />
      <NormalButton
        text="< Back To Alfheim"
        color="f3f3f3"
        darkerColor="f3f3f3"
        style={{
          color: "black",
          fontWeight: 700,
          fontSize: "1rem",
          position: "absolute",
          top: 20,
          left: 40,
        }}
        onClick={() => history.push("/")}
      />
      <div className={classes.container}>
        <form className={classes.formContainer} onSubmit={handleOnSubmit}>
          <h1 style={{ fontSize: "24px", fontWeight: 800 }}>
            Welcome To Alfheim
          </h1>
          <p style={{ fontWeight: 400, color: "rgba(0,0,0,0.5)" }}>
            Don't Have an Account?{" "}
            <i
              onClick={() => history.push("/register")}
              className={classes.signInText}
            >
              Sign up
            </i>
          </p>
          <NormalButton
            text="Continue with Google"
            style={{ fontSize: "1rem", fontWeight: 700, height: "45px" }}
            onClick={() => onSignInWithGoogle()}
          />
          {emailLogin ? (
            <div style={{ display: "grid", rowGap: "1rem" }}>
              <i style={{ opacity: 0.5, fontWeight: 500 }}>or</i>
              <BoxedInput
                label="email"
                style={{ width: "350px" }}
                onChange={handleOnChange}
                name="email"
                errorMessage={state.email.error}
                invalidInput={state.email.error ? true : false}
              />{" "}
              <BoxedInput
                label="password"
                style={{ width: "350px" }}
                onChange={handleOnChange}
                name="password"
                type="password"
                errorMessage={state.password.error}
                invalidInput={state.password.error ? true : false}
              />
            </div>
          ) : null}
          {emailLogin ? (
            <NormalButton
              text="Sign in"
              style={{ fontSize: "1rem", fontWeight: 700, height: "45px" }}
              // onClick={() => setEmailLogin(!emailLogin)}
              disabled={disable}
              type="submit"
            />
          ) : (
            <TextButton
              text="Sign in with email"
              style={{ fontSize: "1rem", fontWeight: 700, height: "45px" }}
              onClick={() => setEmailLogin(true)}
            />
          )}
          {loading ? <Loading /> : null}
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  authorizeUser: PropTypes.func.isRequired,
  loginError: PropTypes.string,
  mounted: PropTypes.bool,
  status: PropTypes.string,
  message: PropTypes.string,
};

const mapStateToProps = (state) => ({
  loginError: state.auth.loginError,
  mounted: state.snackBar.mounted,
  status: state.snackBar.status,
  message: state.snackBar.message,
});

const mapDispatchToProps = (dispatch) => ({
  authorizeUser: bindActionCreators(authorizeUser, dispatch),
});

const ComposedLogin = compose(withRouter, withFirebase)(Login);

export default connect(mapStateToProps, mapDispatchToProps)(ComposedLogin);

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    height: "100vh",
  },
  formContainer: {
    display: "grid",
    rowGap: "1rem",
    justifySelf: "center",
    alignSelf: "center",
    textAlign: "center",
    minWidth: "400px",
    transform: "translateY(-80px)",
  },
  signInText: {
    "&:hover": {
      cursor: "pointer",
    },
    color: "var(--main-green)",
  },
});
