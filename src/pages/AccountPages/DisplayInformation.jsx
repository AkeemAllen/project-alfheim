import React from "react";
import { MdEdit } from "react-icons/md";
import { createUseStyles } from "react-jss";

const DisplayInformation = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Account Settings</h1>
      <hr className={classes.divider}></hr>
      <div className={classes.profile}>
        <h2 style={{ fontWeight: 600 }}>Profile</h2>
        <div className={classes.profileInfo}>
          <div style={{ marginTop: "1rem" }}>
            <h4 style={{ fontWeight: 400, opacity: 0.8 }}>Name</h4>
            <div className={classes.info}>
              <p>Akeem Allen</p>
              <MdEdit size="18" />
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <h4 style={{ fontWeight: 400, opacity: 0.8 }}>Email</h4>
            <div className={classes.info} style={{ width: "14rem" }}>
              <p>allenakeem8@gmail.com</p>
              <MdEdit size="18" />
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <h4 style={{ fontWeight: 400, opacity: 0.8 }}>Contacts</h4>
            <div className={classes.info}>
              <p>504-578-6421</p>
              <MdEdit size="18" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayInformation;

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
  info: {
    display: "flex",
    flexDirection: "row",
    marginTop: "0.5rem",
    alignItems: "center",
    width: "10rem",
    justifyContent: "space-between",
  },
});
