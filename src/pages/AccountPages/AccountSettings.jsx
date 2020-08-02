import React from "react";
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
            <h4 className={classes.label}>Username</h4>
            <div className={classes.info}>
              <p>allenakeem8</p>
              <button className={classes.updateBtn}>UPDATE</button>
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <h4 className={classes.label}>Name</h4>
            <div className={classes.info}>
              <p>Akeem Allen</p>
              <button className={classes.updateBtn}>UPDATE</button>
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <h4 className={classes.label}>Email</h4>
            <div className={classes.info} style={{ width: "14rem" }}>
              <p>allenakeem8@gmail.com</p>
              <button className={classes.updateBtn}>UPDATE</button>
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <h4 className={classes.label}>Contacts</h4>
            <div className={classes.info}>
              <p>504-578-6421</p>
              <button className={classes.updateBtn}>UPDATE</button>
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
  label: {
    fontWeight: 400,
    opacity: 0.5,
  },
  updateBtn: {
    marginLeft: "1rem",
    height: "1.6rem",
    width: "3rem",
    fontSize: "0.7rem",
    fontWeight: 700,
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#f8f8ff",
    color: "var(--accent-color)",
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
