import React from "react";
import { createUseStyles } from "react-jss";
import Modal from "../Modal";

const GallaryRoomDetailModal = ({
  ownerInfo,
  amenities,
  rules,
  open,
  setOpen,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Modal handleClose={() => setOpen(false)} open={open}>
        <div className={classes.modal_wrapper}>
          <div>
            <h1>Details</h1>
            <p
              style={{
                fontWeight: 500,
                color: "rgba(0,0,0,0.5)",
              }}
            >
              Owner: {ownerInfo.firstname} {ownerInfo.lastname}
            </p>
            <p
              style={{
                fontWeight: 500,
                color: "rgba(0,0,0,0.5)",
              }}
            >
              Email: {ownerInfo.email}
            </p>
            <p
              style={{
                fontWeight: 500,
                color: "rgba(0,0,0,0.5)",
              }}
            >
              Phone: {ownerInfo.contact}
            </p>
          </div>
          <div className={classes.details_wrapper}>
            <div style={{ display: "grid", gridAutoRows: "min-content" }}>
              <h3>Amenities</h3>
              <ul style={{ marginLeft: "2rem" }}>
                {amenities.map((amenity) => {
                  return <li className={classes.list}>{amenity}</li>;
                })}
              </ul>
            </div>
            <div>
              <h3>Rules</h3>
              <ul style={{ marginLeft: "2rem" }}>
                {rules.map((rule) => {
                  return <li className={classes.list}>{rule}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GallaryRoomDetailModal;

const useStyles = createUseStyles({
  modal_wrapper: {
    display: "grid",
    rowGap: "2rem",
    width: "500px",
  },
  list: {
    paddingTop: "0.5rem",
    color: "rgba(0,0,0,0.5)",
  },
  details_wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: "2rem",
    rowGap: "2rem",
  },
});
