import React from "react";
import { createUseStyles } from "react-jss";
import useForm from "../components/forms/useForm";
import { useMutation } from "@apollo/react-hooks";
import { register as registerMutation } from "../gql/Mutations";
import { withFirebase } from "../components/Firebase";
import { NormalButton } from "../components/Buttons";
import { withRouter } from "react-router";
import { compose } from "recompose";
import { BoxedInput } from "../components/Inputs";

const Registration = ({ history, firebase }) => {
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

  function onSubmitForm(state) {
    const email = state.email.value;
    const password = state.password.value;
    // const firstname = state.firstname.value;
    // const lastname = state.lastname.value;
    // const username = `${firstname}${lastname}`;

    firebase.doCreateUserWithEmailAndPassword(email, password);
    // .catch((err) => {
    //   const error = err.toString().split(":")[2];
    //   setMounted(true);
    //   setSuccess("error");
    //   setMessage(error);
    //   setTimeout(() => setMounted(false), 3000);
    // });
    // register({ variables: { email, password, firstname, lastname, username } })
    //   .then((result) => {
    // setMounted(true);
    // setSuccess("success");
    // setMessage("Verify Your Email");
    // setTimeout(() => setMounted(false), 3000);
    //   })
    //   .catch((err) => {
    // const error = err.toString().split(":")[2];
    // setMounted(true);
    // setSuccess("error");
    // setMessage(error);
    // setTimeout(() => setMounted(false), 3000);
    //   });
  }

  //eslint-disable-next-line
  const [register, { loading, data, error }] = useMutation(registerMutation, {
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
        <article className={classes.formContainer}>
          <h1 style={{ fontSize: "24px", fontWeight: 800 }}>Create Account</h1>
          <p style={{ fontWeight: 500, color: "rgba(0,0,0,0.5)" }}>
            Already Have an Account?{" "}
            <text
              onClick={() => history.push("/login")}
              className={classes.signInText}
            >
              Sign In
            </text>
          </p>
          <NormalButton
            text="Sign up with Google"
            style={{ fontSize: "1rem", fontWeight: 700, height: "45px" }}
          />
          <text style={{ opacity: 0.5, fontWeight: 500 }}>or</text>
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
          />
        </article>
      </div>
    </div>
  );
};

const ComposedRegistration = compose(withFirebase, withRouter)(Registration);

export default ComposedRegistration;

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
