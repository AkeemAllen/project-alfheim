import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { NormalButton } from "../Buttons";
import room from "../../assets/stock photos/room3.jpg";
import Modal from "../Modal";
import { BoxedInput } from "../Inputs";
import {
  addRule,
  addAmenity,
  updateRoom,
  deleteRoom,
  deleteSingleRule,
  deleteSingleAmenity,
} from "../../gql/Mutations";
import { useMutation } from "react-apollo";
import removeIcon from "../../assets/icons/Remove Icon.png";
import {
  updateRoom as reduxUpdateRoom,
  deleteRoom as reduxDelRoom,
  removeRule as reduxDelRule,
  removeAmenity as reduxDelAmenity,
} from "../../redux/actions/roomActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const RoomDetails = ({
  returnToCards,
  data,
  reduxUpdateRoom,
  index,
  reduxDelRoom,
  reduxDelRule,
  reduxDelAmenity,
}) => {
  const classes = useStyles();

  const [modalOpen, setModalOpen] = useState(false);
  const [confirmDelModal, setConfirmDelModal] = useState(false);
  const [field, setField] = useState("");
  const [fieldValue, setFieldValue] = useState("");

  const handleOpen = (id) => {
    setModalOpen(true);
    setField(id);
  };

  const details = [
    { title: "Occupancy", value: data.occupancy, id: "occupancy" },
    { title: "Gender", value: data.gender, id: "gender" },
    { title: "Price", value: `$${data.price}`, id: "price" },
    {
      title: "Available",
      value: data.isAvailable ? "Yes" : "No",
      id: "isAvailable",
    },
    { title: "Visible", value: data.isVisible ? "Yes" : "No", id: "isVisible" },
  ];

  const address = [
    { title: "Street", value: data.street, id: "street" },
    { title: "Town/City", value: data.town_city, id: "town_city" },
    { title: "Parish", value: data.parish, id: "parish" },
  ];

  const handleUpdate = () => {
    if (field === "rules") {
      newRule();
    } else if (field === "amenities") {
      newAmenity();
    } else {
      update();
    }

    if (field === "isAvailable") {
      reduxUpdateRoom(field, !data.isAvailable, index);
    } else if (field === "isVisible") {
      reduxUpdateRoom(field, !data.isVisible, index);
    } else {
      reduxUpdateRoom(field, fieldValue, index);
    }

    setModalOpen(false);
  };

  const [update] = useMutation(updateRoom, {
    variables: {
      occupancy: field === "occupancy" ? fieldValue : undefined,
      gender: field === "gender" ? fieldValue : undefined,
      price: field === "price" ? parseInt(fieldValue, 10) : undefined,
      street: field === "street" ? fieldValue : undefined,
      parish: field === "parish" ? fieldValue : undefined,
      town_city: field === "town_city" ? fieldValue : undefined,
      isAvailable: field === "isAvailable" ? !data.isAvailable : undefined,
      isVisible: field === "isVisible" ? !data.isVisible : undefined,
      id: data.id,
    },
  });

  const [deleteRule] = useMutation(deleteSingleRule, {
    variables: {
      id: data.id,
      ruleToDelete: fieldValue,
    },
  });

  const [deleteAmenity] = useMutation(deleteSingleAmenity, {
    variables: {
      id: data.id,
      amenityToDelete: fieldValue,
    },
  });

  const [newRule] = useMutation(addRule, {
    variables: {
      id: data.id,
      rule: fieldValue,
    },
  });

  const [removeRoom] = useMutation(deleteRoom, {
    variables: {
      id: data.id,
    },
  });

  const [newAmenity] = useMutation(addAmenity, {
    variables: {
      id: data.id,
      amenity: fieldValue,
    },
  });

  return (
    <div className={classes.container}>
      <div className={classes.topSection}>
        <h2 className={classes.lightBlack}>ID: {data.personalID}</h2>
        <NormalButton text="Back" onClick={returnToCards} />{" "}
      </div>
      <h2 className={classes.lightBlack}>Overview</h2>
      <div className={classes.detail_wrapper}>
        {details.map((detail) => {
          return (
            <div
              className={classes.detail}
              onClick={() => handleOpen(detail.id)}
            >
              <h4 className={classes.lightBlack}>{detail.title}</h4>
              <h2 style={{ color: "var(--main-color)" }}>{detail.value}</h2>
            </div>
          );
        })}
      </div>
      <div>
        <h2 className={classes.lightBlack} style={{ marginBottom: "1rem" }}>
          Location
        </h2>
        <div className={classes.splitColumns}>
          {address.map((detail) => {
            return (
              <div
                className={classes.detail}
                onClick={() => handleOpen(detail.id)}
              >
                <h4 style={{ color: "rgba(0,0,0,0.5)" }}>{detail.title}</h4>
                <h2 style={{ color: "var(--main-color)" }}>{detail.value}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.splitColumns}>
        <div
          style={{
            display: "grid",
            rowGap: "0.5rem",
            gridAutoRows: "min-content",
          }}
        >
          <h2 style={{ color: "rgba(0,0,0,0.5)" }}>Rules</h2>
          {data.rules.map((rule) => {
            return (
              <div className={classes.listItem}>
                {rule}
                <img
                  src={removeIcon}
                  alt="remove"
                  width="20"
                  onClick={() => {
                    setFieldValue(rule);
                    setTimeout(() => deleteRule(), 1000);
                    reduxDelRule(data.id, rule);
                  }}
                />
              </div>
            );
          })}
          <NormalButton text="Add Rule" onClick={() => handleOpen("rules")} />
        </div>
        <div
          style={{
            display: "grid",
            rowGap: "0.5rem",
            gridAutoRows: "min-content",
          }}
        >
          <h2 style={{ color: "rgba(0,0,0,0.5)" }}>Amenities</h2>
          {data.amenities.map((amenity, index) => {
            return (
              <div className={classes.listItem}>
                {amenity}{" "}
                <img
                  src={removeIcon}
                  alt="remove"
                  width="20"
                  onClick={() => {
                    setFieldValue(amenity);
                    setTimeout(() => deleteAmenity(), 1000);
                    reduxDelAmenity(data.id, amenity);
                  }}
                />
              </div>
            );
          })}
          <NormalButton
            text="Add Amenity"
            onClick={() => handleOpen("amenities")}
          />
        </div>
        <img src={room} alt="room" className={classes.image} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "3rem",
        }}
      >
        <NormalButton
          text="Delete"
          color="CDCDCD"
          darkerColor="FF7893"
          onClick={() => setConfirmDelModal(true)}
        />
      </div>
      <Modal open={modalOpen} handleClose={() => setModalOpen(false)}>
        <div style={{ display: "grid", rowGap: "1rem" }}>
          {(field === "isVisible") | (field === "isAvailable") ? null : (
            <BoxedInput
              type={field === "price" ? "number" : "text"}
              label={field}
              onChange={(e) => setFieldValue(e.target.value)}
            />
          )}
          <NormalButton
            text={
              field === "isAvailable"
                ? `Set To ${!data.isAvailable ? "Yes" : "No"}`
                : field === "isVisible"
                ? `Set To ${!data.isVisible ? "Yes" : "No"}`
                : field === "rules"
                ? "Add New Rule"
                : field === "amenities"
                ? "Add New Amenity"
                : `Update ${field}`
            }
            onClick={handleUpdate}
          />
        </div>
      </Modal>
      <Modal
        open={confirmDelModal}
        handleClose={() => setConfirmDelModal(false)}
      >
        <div style={{ display: "grid", rowGap: "1rem" }}>
          Deleting Room...
          <NormalButton
            text="Are Your Sure?"
            onClick={() => {
              returnToCards();
              reduxDelRoom(data.id);
              removeRoom();
            }}
            color="FF7893"
            darkerColor="FF2E58"
          />
        </div>
      </Modal>
    </div>
  );
};

RoomDetails.propTypes = {
  reduxUpdateRoom: PropTypes.func.isRequired,
  reduxDelRoom: PropTypes.func.isRequired,
  reduxDelRule: PropTypes.func.isRequired,
  reduxDelAmenity: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  reduxUpdateRoom: bindActionCreators(reduxUpdateRoom, dispatch),
  reduxDelRoom: bindActionCreators(reduxDelRoom, dispatch),
  reduxDelAmenity: bindActionCreators(reduxDelAmenity, dispatch),
  reduxDelRule: bindActionCreators(reduxDelRule, dispatch),
});

export default connect(null, mapDispatchToProps)(RoomDetails);

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridAutoRows: "min-content",
    rowGap: "1.5rem",
    padding: "2rem",
    backgroundColor: "transparent",
    margin: "2rem",
    borderRadius: "10px",
  },
  splitColumns: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    columnGap: "1rem",
  },
  lightBlack: {
    color: "rgba(0,0,0,0.5)",
  },
  topSection: {
    display: "grid",
    gridTemplateColumns: "1fr 0.1fr",
  },
  image: {
    width: "100%",
    height: "10rem",
    borderRadius: "10px",
    objectFit: "cover",
  },
  detail_wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    columnGap: "0.5rem",
  },
  detail: {
    backgroundColor: "#f1f2fa",
    padding: "1rem",
    minWidth: "10rem",
    borderRadius: "10px",
    justifySelf: "flex-start",
    display: "grid",
    rowGap: "1rem",
  },
  listItem: {
    padding: "0.5rem",
    backgroundColor: "#f1f2fa",
    borderRadius: "10px",
    height: "1.2rem",
    display: "grid",
    gridTemplateColumns: "1fr 0.1fr",
    alignItems: "center",
  },
});
