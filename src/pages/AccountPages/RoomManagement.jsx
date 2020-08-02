import React, { useState } from "react";
import AddRoomModal from "../../components/forms/AddRoomModal";
import EditRoomModal from "../../components/forms/EditRoomModal";
// import { MdFilterList } from "react-icons/md";
// import { FiFilter } from "react-icons/fi";
import room from "../../assets/stock photos/room1.jpg";
import room2 from "../../assets/stock photos/room2.jpg";
import room3 from "../../assets/stock photos/room3.jpg";
import room4 from "../../assets/stock photos/room4.jpg";
import { createUseStyles } from "react-jss";
import FormHolder from "../../components/FormHolder";

const RoomManagement = () => {
  const [open, setOpen] = useState(true);
  const [openEdit, setOpenEdit] = useState(false);

  const modalHandler = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  const modalHandlerEdit = (event) => {
    event.preventDefault();
    setOpenEdit(!openEdit);
  };
  const classes = useStyles();
  return (
    <div>
      <FormHolder show={open} modalClosed={modalHandler}>
        <AddRoomModal />
      </FormHolder>

      <div className={classes.container}>
        <h1 className={classes.header}>Room Management</h1>
        <hr className={classes.divider} />
        <div className={classes.toolbar}>
          <button className={classes.btn} onClick={modalHandler}>
            Add Room
          </button>
          {/* <div className={classes.filter}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: "1rem",
            }}
          >
            <h4>Filter</h4>
            <FiFilter size="20" />
          </div>
          <div className="filter-result">
            <h4>All</h4>
          </div>
        </div> */}
        </div>
        <div className={classes.rooms}>
          <img
            src={room}
            alt="room"
            className={classes.image}
            onClick={modalHandlerEdit}
          />
          <img src={room2} alt="room2" className={classes.image} />
          <img src={room3} alt="room2" className={classes.image} />
          <img src={room4} alt="room2" className={classes.image} />
        </div>
        {/* <AddRoomModal show={open} modalClosed={modalHandler} /> */}
        {/* <EditRoomModal show={openEdit} modalClosed={modalHandlerEdit} /> */}
      </div>
    </div>
  );
};

export default RoomManagement;

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
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
  toolbar: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "2rem",
    marginTop: "2rem",
    marginBottom: "1rem",
    width: "80%",
    justifyContent: "space-between",
  },
  filter: {
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    width: "7rem",
    backgroundColor: "var(--primary-color)",
    borderRadius: "5px",
    padding: "5px 7px",
    color: "white",
    fontWeight: "500",
    fontSize: "1rem",
  },
  rooms: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    width: "5rem",
    marginLeft: "2rem",
    marginTop: "1rem",
  },
  image: {
    width: "18rem",
    height: "12rem",
    borderRadius: "20px",
    marginRight: "5rem",
    marginBottom: "5rem",
  },
});
