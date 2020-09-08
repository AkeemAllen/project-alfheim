import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { BoxedInput } from "../components/Inputs";
import { NormalButton } from "../components/Buttons";
import { Link } from "react-router-dom";
import useForm from "../components/forms/useForm";
import { useMutation } from "@apollo/react-hooks";
import SnackBar from "../components/SnackBars";
import { register as registerMutation } from "../gql/Mutations";
import { useSpring, animated } from "react-spring";

const Registration = () => {
  const stateSchema = {
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    firstname: { value: "", error: "" },
    lastname: { value: "", error: "" },
  };

  const animateForm = useSpring({
    from: { opacity: 0, transform: `translateX(-1600px)` },
    to: { opacity: 1, transform: `translateX(0px)` },
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const [snackBarMounted, setMounted] = useState(false);
  const [success, setSuccess] = useState();
  const [message, setMessage] = useState();

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
    const firstname = state.firstname.value;
    const lastname = state.lastname.value;
    const username = `${firstname}${lastname}`;

    register({ variables: { email, password, firstname, lastname, username } })
      .then((result) => {
        setMounted(true);
        setSuccess("success");
        setMessage("Verify Your Email");
        setTimeout(() => setMounted(false), 3000);
      })
      .catch((err) => {
        const error = err.toString().split(":")[2];
        setMounted(true);
        setSuccess("error");
        setMessage(error);
        setTimeout(() => setMounted(false), 3000);
      });
  }

  //eslint-disable-next-line
  const [register, { loading, data, error }] = useMutation(registerMutation, {
    errorPolicy: "all",
  });

  const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm
  );

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SnackBar mounted={snackBarMounted} status={success} text={message} />
      <div
        style={{
          backgroundColor: "var(--main-color)",
          height: "100vh",
          display: "grid",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <animated.div
          style={{
            boxShadow: "0 0 25px rgba(0,0,0,0.5)",
            height: "95vh",
            display: "grid",
            backgroundColor: "white",
            width: "50vw",
            borderRadius: "20px",
            marginLeft: "2rem",
            ...animateForm,
          }}
        >
          <div className={classes.formContainer}>
            <h1
              style={{
                display: "flex",
                justifySelf: "center",
                marginBottom: "1rem",
              }}
            >
              Register
            </h1>
            <form className={classes.form} onSubmit={handleOnSubmit}>
              <BoxedInput
                label="Firstname"
                onChange={handleOnChange}
                name="firstname"
                errorMessage={state.firstname.error}
                invalidInput={state.firstname.error ? true : false}
              />
              <BoxedInput
                label="Lastname"
                onChange={handleOnChange}
                name="lastname"
                errorMessage={state.lastname.error}
                invalidInput={state.lastname.error ? true : false}
              />
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
              <NormalButton text="Register" disabled={disable} />
              <p>
                Already Have An Account? <Link to="/login">Sign In</Link>
              </p>
            </form>
          </div>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <NormalButton text="Back" />
            </Link>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Registration;

const useStyles = createUseStyles({
  container: {
    overflow: "hidden",
  },
  formContainer: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    justifyContent: "center",
    alignItems: "center",
    // boxShadow: "0 0 25px rgba(0,0,0,0.5)",
    height: "50%",
    alignSelf: "center",
  },
  form: {
    display: "grid",
    rowGap: "2rem",
    textAlign: "center",
  },
});
