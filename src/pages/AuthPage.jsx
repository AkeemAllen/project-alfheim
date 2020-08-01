import React, { useState } from "react";
import Login from "../components/forms/LoginForm";
import Registration from "../components/forms/RegistrationForm";
import "../stylesheets/AuthPage.scss";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [form, setForm] = useState("Login");

  const changeForm = (form) => {
    setForm(form);
  };

  return (
    <div className="authpage">
      <div className="nav">
        <Link to="/" className="link">
          <button className="btn">Home</button>
        </Link>
      </div>
      <div className="forms">
        {form === "Login" ? <Login /> : null}
        {form === "Registration" ? <Registration /> : null}
        {form === "Login" ? <SignUpQuestion changeForm={changeForm} /> : null}
        {form === "Registration" ? (
          <SignInQuestion changeForm={changeForm} />
        ) : null}
      </div>
    </div>
  );
};

const SignInQuestion = (props) => {
  const { changeForm } = props;
  return (
    <div className="question">
      <h3>
        Already Have An Account?{" "}
        <strong onClick={() => changeForm("Login")}>Sign In</strong>
      </h3>
    </div>
  );
};

const SignUpQuestion = (props) => {
  const { changeForm } = props;
  return (
    <div className="question">
      <h3>
        Don't Have An Account?{" "}
        <strong onClick={() => changeForm("Registration")}>Sign Up</strong>
      </h3>
    </div>
  );
};
export default AuthPage;
