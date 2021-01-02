import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import useForm from "../components/forms/useForm";
import { useMutation } from "@apollo/react-hooks";
import { register as registerMutation } from "../gql/Mutations";
import { NormalButton } from "../components/Buttons";
import { withFirebase } from "../components/Firebase";
import { withRouter } from "react-router";
import { compose } from "recompose";
import { BoxedInput } from "../components/Inputs";
import SnackBar from "../components/SnackBars";
import { authorizeUser, authUserEmail } from "../redux/actions/authActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loading from "../components/Loading";

const Registration = ({ history, firebase, authorizeUser, authUserEmail }) => {
  //#region
  const stateSchema = {
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    firstname: { value: "", error: "" },
    lastname: { value: "", error: "" },
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
        regEx: /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,128}$/,
        error:
          "At least 8 characters, uppercase, lowercase, number, and a symbol",
      },
    },
    firstname: {
      required: true,
      validator: {
        regEx: /^([^0-9]*)$/,
        error: "No Numbers",
      },
    },
    lastname: {
      required: true,
      validator: {
        regEx: /^([^0-9]*)$/,
        error: "No Numbers",
      },
    },
  };
  //#endregion

  const [mounted, setMounted] = useState(false);
  const [success, setSuccess] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function onSignInWithGoogle() {
    firebase
      .doSignInWithPopUp()
      .then((authData) => {
        setLoading(true);
        console.log(authData);
        const user = authData.user;
        const firstName = user.displayName.split(" ")[0];
        const lastName = user.displayName.split(" ")[1];
        const phone =
          user.phoneNumber === null ? "No number provided" : user.phoneNumber;

        register({
          variables: {
            uuid: user.uid,
            email: user.email,
            firstname: firstName,
            lastName: lastName,
            phoneNumber: phone,
          },
        })
          .then((res) => {
            authorizeUser({ ...authData, userId: res.data.addUser.id });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          history.push("/account");
        }, 4000);
      });
  }

  const onSubmitForm = (state) => {
    const email = state.email.value;
    const password = state.password.value;
    const firstname = state.firstname.value;
    const lastname = state.lastname.value;
    const username = `${firstname}${lastname}`;

    firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authData) => {
        console.log(authData);
        setMounted(true);
        setSuccess("success");
        setMessage("Verify Your Email");
        setTimeout(() => setMounted(false), 3000);
        authUserEmail({ firstname, lastname, username, ...authData });
      })
      .catch((err) => {
        console.log(err);
        setMounted(true);
        setSuccess("error");
        setMessage(err.message);
        setTimeout(() => setMounted(false), 5000);
      });
    firebase.onAuthStateChanged();
  };

  //eslint-disable-next-line
  const [register, { data, error }] = useMutation(registerMutation, {
    errorPolicy: "all",
  });

  //eslint-disable-next-line
  const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm
  );

  const classes = useStyles();
  return (
    <div>
      <SnackBar mounted={mounted} status={success} text={message} />
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
          <h1 style={{ fontSize: "24px", fontWeight: 800 }}>Create Account</h1>
          <p style={{ fontWeight: 400, color: "rgba(0,0,0,0.5)" }}>
            Already Have an Account?{" "}
            <i
              onClick={() => history.push("/login")}
              className={classes.signInText}
            >
              Sign In
            </i>
          </p>
          <NormalButton
            text="Sign up with Google"
            style={{ fontSize: "1rem", fontWeight: 700, height: "45px" }}
            onClick={() => {
              onSignInWithGoogle();
            }}
          />
          <i style={{ opacity: 0.5, fontWeight: 500 }}>or</i>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "0.5rem",
            }}
          >
            <BoxedInput
              label="FirstName"
              style={{ width: "125px" }}
              onChange={handleOnChange}
              name="firstname"
              errorMessage={state.firstname.error}
              invalidInput={state.firstname.error ? true : false}
            />
            <BoxedInput
              label="LastName"
              style={{ width: "125px" }}
              onChange={handleOnChange}
              name="lastname"
              errorMessage={state.lastname.error}
              invalidInput={state.lastname.error ? true : false}
            />
          </div>
          <BoxedInput
            label="Email"
            style={{ width: "325px" }}
            onChange={handleOnChange}
            name="email"
            errorMessage={state.email.error}
            invalidInput={state.email.error ? true : false}
          />
          <BoxedInput
            label="Password"
            style={{ width: "325px" }}
            onChange={handleOnChange}
            name="password"
            type="password"
            errorMessage={state.password.error}
            invalidInput={state.password.error ? true : false}
          />
          <NormalButton
            text="Sign up with email"
            style={{ fontSize: "1rem", fontWeight: 700, height: "45px" }}
            disabled={disable}
            type="submit"
          />
          {loading ? <Loading /> : null}
        </form>
      </div>
    </div>
  );
};

Registration.propTypes = {
  authorizeUser: PropTypes.func.isRequired,
  authUserEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  authUserEmail: bindActionCreators(authUserEmail, dispatch),
  authorizeUser: bindActionCreators(authorizeUser, dispatch),
});

const ComposedRegistration = compose(withFirebase, withRouter)(Registration);

export default connect(null, mapDispatchToProps)(ComposedRegistration);

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
