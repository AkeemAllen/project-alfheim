import React from "react";
import { createUseStyles } from "react-jss";
import room from "../assets/stock photos/room1.jpg";

const Room = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <img src={room} alt="" className={classes.image} />
      <div className={classes.container}>
        <div className={classes.details}>
          <p className={classes.point}>
            <h4 className={classes.label}>Occupancy:</h4>
            Double
            <button className={classes.updateBtn}>UPDATE</button>
          </p>
          <p className={classes.point}>
            <h4 className={classes.label}>Rules</h4>
            <button className={classes.updateBtn}>UPDATE</button>
          </p>
          <p className={classes.point}>
            <h4 className={classes.label}>Gender:</h4>
            Male
            <button className={classes.updateBtn}>UPDATE</button>
          </p>
          <p className={classes.point}>
            <h4 className={classes.label}>Amenities</h4>
            <button className={classes.updateBtn}>UPDATE</button>
          </p>
          <p className={classes.point}>
            <h4 className={classes.label}>Price:</h4>
            $15,000
            <button className={classes.updateBtn}>UPDATE</button>
          </p>
        </div>
        <div className={classes.actions}>
          <div className={classes.checkboxes}>
            <div style={{ marginRight: "3rem" }}>
              <input type="checkbox" className={classes.checkbox} />
              Available
            </div>
            <div>
              <input type="checkbox" className={classes.checkbox} />
              Display
            </div>
          </div>
          <button className={classes.delBtn}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Room;

const useStyles = createUseStyles({
  mainContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 4.5fr",
    backgroundColor: "#fff",
    width: "90%",
    height: "10rem",
    borderRadius: "20px",
    padding: "1rem",
    // boxShadow: "5px 5px 12px 1px",
  },
  container: {
    display: "grid",
    gridTemplateRows: "70% 30%",
  },
  details: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    // marginTop: "1rem",
  },
  checkboxes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  checkbox: {
    marginRight: "0.5rem",
    border: "none",
    borderRadius: "0px",
  },
  updateBtn: {
    marginLeft: "1rem",
    height: "1.6rem",
    width: "3rem",
    fontSize: "0.7rem",
    fontWeight: 700,
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#f1f2fa",
    color: "var(--accent-color)",
  },
  label: {
    marginRight: "1rem",
    fontWeight: 500,
  },
  point: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "15rem",
    height: "10rem",
    borderRadius: "20px 20px 20px 20px",
  },
  actions: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  delBtn: {
    display: "flex",
    alignSelf: "center",
    justifySelf: "flex-end",
    // marginBottom: "0.5rem",
    marginRight: "1rem",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    width: "7rem",
    height: "3rem",
    backgroundColor: "#f1f2fa",
    borderRadius: "5px",
    padding: "5px 7px",
    color: "var(--error-color)",
    fontWeight: "500",
    fontSize: "1rem",
  },
});
