import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useMutation } from "react-apollo";
import { updateUser } from "../../redux/actions/authActions";
import { bindActionCreators } from "redux";

const userMutation = gql`
  mutation updateUser(
    $email: String!
    $username: String!
    $firstname: String!
    $lastname: String!
    $contact: String!
  ) {
    updateUser(
      userInput: {
        username: $username
        firstname: $firstname
        lastname: $lastname
        email: $email
        contact: $contact
      }
    ) {
      username
      firstname
      lastname
      email
      contact
    }
  }
`;

const AccountSettings = (props) => {
  //eslint-disable-next-line
  const [update, { data, error }] = useMutation(userMutation);
  const classes = useStyles();
  const { username, firstname, lastname, email, contact } = props;

  const [usernameOpen, setUsernameOpen] = useState(false);
  const [firstNameOpen, setFirstnameOpen] = useState(false);
  const [lastNameOpen, setLastnameOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const [usernameState, setUsernameState] = useState(username);
  const [emailState, setEmailState] = useState(email);
  const [firstnameState, setFirstnameState] = useState(firstname);
  const [lastnameState, setLastnameState] = useState(lastname);
  const [contactState, setContactState] = useState(contact);

  const handleSubmit = (open, setOpen) => {
    setOpen(!open);

    if (open) {
      update({
        variables: {
          username: usernameState,
          firstname: firstnameState,
          lastname: lastnameState,
          email: emailState,
          contact: contactState,
        },
      }).then((result) => props.updateUser(result.data.updateUser));
    } else {
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "Username":
        setUsernameState(value);
        break;
      case "Firstname":
        setFirstnameState(value);
        break;
      case "Lastname":
        setLastnameState(value);
        break;
      case "Email":
        setEmailState(value);
        break;
      case "Contact":
        setContactState(value);
        break;
      default: {
        return null;
      }
    }
  };

  const fields = [
    {
      label: "Username",
      info: usernameState,
      open: usernameOpen,
      setOpen: setUsernameOpen,
    },
    {
      label: "Firstname",
      info: firstnameState,
      open: firstNameOpen,
      setOpen: setFirstnameOpen,
    },
    {
      label: "Lastname",
      info: lastnameState,
      open: lastNameOpen,
      setOpen: setLastnameOpen,
    },
    {
      label: "Email",
      info: emailState,
      open: emailOpen,
      setOpen: setEmailOpen,
    },
    {
      label: "Contact",
      info: contactState,
      open: contactOpen,
      setOpen: setContactOpen,
    },
  ];

  const info = fields.map((element, i) => {
    return (
      <div key={i}>
        <div style={{ marginTop: "1rem" }}>
          <h4 className={classes.label}>{element.label}</h4>
          <div
            className={classes.info}
            style={{ width: `${element.open ? 25 : 13}rem` }}
          >
            {element.open ? (
              <input
                name={element.label}
                value={element.info}
                className={classes.input}
                onChange={handleOnChange}
              />
            ) : (
              <p>{element.info}</p>
            )}
            <button
              className={classes.updateBtn}
              onClick={() => handleSubmit(element.open, element.setOpen)}
            >
              {element.open ? "SUBMIT" : "UPDATE"}
            </button>
            {element.open ? (
              <button
                className={classes.editCancelBtn}
                onClick={() => element.setOpen(false)}
              >
                CANCEL
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Account Settings</h1>
      <hr className={classes.divider}></hr>
      <div className={classes.profile}>
        <h2 style={{ fontWeight: 600 }}>Profile</h2>
        <div className={classes.profileInfo}>{info}</div>
      </div>
    </div>
  );
};

AccountSettings.propTypes = {
  updateUser: PropTypes.func.isRequired,
  username: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  contact: PropTypes.string,
};

const mapStateToProps = (state) => ({
  username: state.auth.username,
  email: state.auth.email,
  firstname: state.auth.firstname,
  lastname: state.auth.lastname,
  contact: state.auth.contact,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: bindActionCreators(updateUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    marginTop: "2rem",
    marginLeft: "2rem",
    marginBottom: "0.5rem",
  },
  divider: {
    border: "0.5px solid rgba(0,0,0,0.1)",
    marginLeft: "2rem",
  },
  input: {
    height: "2rem",
    border: "1px solid rgba(0,0,0,0.25)",
    borderRadius: "5px",
    marginTop: "1rem",
    textIndent: "1rem",
  },
  editCancelBtn: {
    height: "2rem",
    width: "5rem",
    fontWeight: 600,
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#f8f8ff",
    color: "var(--error-color)",
  },
  update: {
    height: "2rem",
    width: "5rem",
    fontWeight: 600,
    border: "none",
    borderRadius: "5px",
    backgroundColor: "var(--primary-color)",
    color: "white",
    marginTop: "2rem",
  },
  cancel: {
    height: "2rem",
    width: "5rem",
    fontWeight: 600,
    border: "none",
    borderRadius: "5px",
    backgroundColor: "white",
    color: "var(--error-color)",
    marginTop: "2rem",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "2rem",
    marginTop: "1rem",
  },
  profileInfo: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontWeight: 400,
    opacity: 0.5,
  },
  updateBtn: {
    marginLeft: "1rem",
    height: "1.6rem",
    width: "4rem",
    fontSize: "0.7rem",
    fontWeight: 700,
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#f8f8ff",
    color: "var(--accent-color)",
    "&:hover": {
      backgroundColor: "rgba(27, 42, 104, 0.25)",
      cursor: "pointer",
    },
  },
  info: {
    display: "flex",
    flexDirection: "row",
    marginTop: "0.5rem",
    alignItems: "center",
    width: "10rem",
    justifyContent: "space-between",
  },
});
