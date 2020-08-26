import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { NormalButton } from "../Buttons";
import room from "../../assets/stock photos/room3.jpg";
import {
  addRule,
  addAmenity,
  updateRoom,
  deleteSingleRule,
  deleteSingleAmenity,
} from "../../gql/Mutations";
import { useMutation } from "react-apollo";
import removeIcon from "../../assets/icons/Remove Icon.png";
import occupancyIcon from "../../assets/icons/Occupancy Icon.png";
import dollarIcon from "../../assets/icons/Dollar Icon.png";
import genderIcon from "../../assets/icons/Gender Icon.png";
import {
  updateRoom as reduxUpdateRoom,
  removeRule as reduxDelRule,
  removeAmenity as reduxDelAmenity,
} from "../../redux/actions/roomActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DeleteRoomModal from "../Modals/DeleteRoomModal";
import UpdateRoomModal from "../Modals/UpdateRoomModal";

const RoomDetails = ({
  returnToCards,
  data,
  reduxUpdateRoom,
  index,
  reduxDelRule,
  reduxDelAmenity,
}) => {
  const classes = useStyles();

  const [modalOpen, setModalOpen] = useState(false);
  const [confirmDelModal, setConfirmDelModal] = useState(false);
  const [field, setField] = useState("");
  const [fieldValue, setFieldValue] = useState("");
  const [imageHover, setImageHover] = useState(false);

  const handleOpen = (id) => {
    setModalOpen(true);
    setField(id);
  };

  const details = [
    {
      title: "Occupancy",
      value: data.occupancy,
      id: "occupancy",
      icon: occupancyIcon,
    },
    { title: "Gender", value: data.gender, id: "gender", icon: genderIcon },
    { title: "Price", value: `$${data.price}`, id: "price", icon: dollarIcon },
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

  const handleRemoval = (field, value) => {
    setFieldValue(value);
    field === "rules"
      ? setTimeout(() => deleteRule(), 1000) && reduxDelRule(data.id, value)
      : setTimeout(() => deleteAmenity(), 1000) &&
        reduxDelAmenity(data.id, value);
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

  const [newAmenity] = useMutation(addAmenity, {
    variables: {
      id: data.id,
      amenity: fieldValue,
    },
  });

  return (
    <div className={classes.container}>
      <div className={classes.topSection}>
        <h2 className={classes.lightBlack}>{data.personalID}</h2>
        <NormalButton text="Back" onClick={returnToCards} />{" "}
      </div>
      {/* <h2 className={classes.lightBlack}>Overview</h2> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "2rem",
          width: "70rem",
          margin: "auto",
          marginBottom: "7rem",
        }}
      >
        <img
          src={room}
          alt="room"
          className={classes.image}
          onMouseEnter={() => setImageHover(true)}
          onMouseLeave={() => setImageHover(false)}
        />
        <div
          style={{
            backgroundColor: "#f1f2fa",
            borderRadius: "10px",
            padding: "1rem",
          }}
        >
          <h2 className={classes.lightBlack} style={{ marginBottom: "1rem" }}>
            Location
          </h2>
          {address.map((location) => {
            return (
              <h2
                style={{ color: "var(--main-color)", paddingLeft: "1rem" }}
                onClick={() => handleOpen(location.id)}
              >
                {location.value}
              </h2>
            );
          })}
        </div>
      </div>
      <div className={classes.detail_wrapper}>
        {details.map((detail) => {
          return (
            <div
              className={classes.detail}
              onClick={() => handleOpen(detail.id)}
            >
              <div>
                <h4 className={classes.lightBlack}>{detail.title}</h4>
                <h2 style={{ color: "var(--main-color)" }}>{detail.value}</h2>
              </div>
              {(detail.title === "Available") |
              (detail.title === "Visible") ? null : (
                <img
                  src={detail.icon}
                  alt="icon"
                  width="50"
                  style={{ justifySelf: "flex-end" }}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className={classes.splitColumns}>
        <div className={classes.listColumn}>
          <h2 style={{ color: "rgba(0,0,0,0.5)", marginBottom: "1rem" }}>
            Rules
          </h2>
          {data.rules.map((rule) => {
            return (
              <div className={classes.listItem}>
                {rule}
                <img
                  src={removeIcon}
                  alt="remove"
                  width="20"
                  onClick={() => handleRemoval("rules", rule)}
                />
              </div>
            );
          })}
          <NormalButton text="Add Rule" onClick={() => handleOpen("rules")} />
        </div>
        <div className={classes.listColumn}>
          <h2 style={{ color: "rgba(0,0,0,0.5)", marginBottom: "1rem" }}>
            Amenities
          </h2>
          {data.amenities.map((amenity) => {
            return (
              <div className={classes.listItem}>
                {amenity}{" "}
                <img
                  src={removeIcon}
                  alt="remove"
                  width="20"
                  onClick={() => handleRemoval("amenities", amenity)}
                />
              </div>
            );
          })}
          <NormalButton
            text="Add Amenity"
            onClick={() => handleOpen("amenities")}
          />
        </div>
      </div>
      <div className={classes.bottomSection}>
        <NormalButton
          text="Delete"
          color="CDCDCD"
          darkerColor="FF7893"
          onClick={() => setConfirmDelModal(true)}
        />
      </div>
      <UpdateRoomModal
        open={modalOpen}
        closeHandler={() => setModalOpen(false)}
        field={field}
        setFieldValue={setFieldValue}
        handleUpdate={handleUpdate}
        data={data}
      />
      <DeleteRoomModal
        open={confirmDelModal}
        closeHandler={() => setConfirmDelModal(false)}
        returnToCards={() => returnToCards()}
        id={data.id}
      />
    </div>
  );
};

RoomDetails.propTypes = {
  reduxUpdateRoom: PropTypes.func.isRequired,
  reduxDelRule: PropTypes.func.isRequired,
  reduxDelAmenity: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  reduxUpdateRoom: bindActionCreators(reduxUpdateRoom, dispatch),
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
    gridTemplateColumns: "1fr 1fr",
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
    marginBottom: "3rem",
  },
  detail: {
    backgroundColor: "#f1f2fa",
    padding: "1rem",
    minWidth: "10rem",
    borderRadius: "10px",
    justifySelf: "flex-start",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    rowGap: "1rem",
    // justifyContent: "space-between",
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
  bottomSection: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "3rem",
  },
  listColumn: {
    display: "grid",
    rowGap: "0.5rem",
    gridAutoRows: "min-content",
  },
});
