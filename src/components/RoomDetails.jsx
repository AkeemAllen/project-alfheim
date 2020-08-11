import React from "react";
import "../stylesheets/component-stylesheets/Modal.scss";
import { createUseStyles } from "react-jss";

const RoomDetails = ({ show, modalClosed }) => {
  const classes = useStyles();
  return (
    <div>
      <Backdrop styles={classes.backdrop} show={show} clicked={modalClosed} />

      <div
        className={classes.container}
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? 1 : 0,
        }}
      >
        <h1 className={classes.header}>Details</h1>
        <div className={classes.details}>
          <div className={classes.cell}>
            <h2 className={classes.h2}>Amenities</h2>
            <ul className={classes.ul}>
              <li className={classes.li}>Water</li>
              <li className={classes.li}>Electricity</li>
              <li className={classes.li}>Gas</li>
            </ul>
          </div>
          <div className={classes.cell}>
            <h2 className={classes.h2}>Rules</h2>
            <ul className={classes.ul}>
              <li className={classes.li}>No vistors passed the hours of 12</li>
              <li className={classes.li}>No vistors passed the hours of 12</li>
            </ul>
          </div>
          <div className={classes.cell}>
            <h2 className={classes.h2}>Things To Note</h2>
          </div>
          <div className={classes.cell}>
            <h2 className={classes.h2}>Owner</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const Backdrop = ({ show, clicked, styles }) =>
  show ? <div className={styles} onClick={clicked}></div> : null;

export default RoomDetails;

const useStyles = createUseStyles({
  container: {
    position: "fixed",
    zIndex: "500",
    backgroundColor: "white",
    border: "none",
    borderRadius: "10px",
    left: "32.3%",
    top: "35%",
    boxSizing: "border-box",
    transform: `translate(-50%, -50%)`,
    transition: "all 0.3s ease-out",
  },
  backdrop: {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: "100",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  header: {
    // backgroundColor: "var(--main-color)",
    color: "var(--main-color)",
    textIndent: "1rem",
    marginTop: "1rem",
    borderRadius: "9px 9px 0px 0px",
  },
  details: {
    marginTop: "1rem",
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gridTemplateColumns: "1fr 1fr",
    columnGap: "2rem",
    rowGap: "2rem",
    padding: "1rem",
  },
  cell: {},
  h2: {
    color: "var(--main-color)",
    fontWeight: 500,
  },
  ul: {
    padding: "0.5rem 0.5rem 0.5rem 2rem",
    color: "rgba(0,0,0,0.5)",
  },
  li: {
    maxWidth: "17rem",
    marginTop: "0.5rem",
  },
});
