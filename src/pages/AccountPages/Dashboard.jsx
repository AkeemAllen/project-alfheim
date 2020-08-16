import React, { useState } from "react";
import { createUseStyles } from "react-jss";
// import Room from "../../components/Room";
import { NormalButton } from "../../components/Buttons";
import Modal from "../../components/Modal";
import AddRoomForm from "../../components/forms/AddRoomForm";
import Table from "../../components/Table";
import { useQuery } from "react-apollo";
import Loading from "../../components/Loading";
import Snackbar from "../../components/SnackBars";
import { getSingleOwnerRooms } from "../../gql/Queries";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const { loading, data } = useQuery(getSingleOwnerRooms, {
    variables: { owner: localStorage.getItem("userId") },
  });

  const [mounted, setMounted] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState();

  return (
    // <div>
    <div className={classes.container}>
      <Snackbar mounted={mounted} text={message} status={status} />
      <Modal handleClose={() => setOpen(false)} open={open}>
        <AddRoomForm
          setMessage={setMessage}
          setMounted={setMounted}
          setStatus={setStatus}
        />
      </Modal>
      <h1 className={classes.header}>Dashboard</h1>
      <hr className={classes.divider} />
      <div className={classes.toolbar}>
        <NormalButton
          text="Add Room"
          onClick={() => setOpen(true)}
          color="2D394D"
          darkerColor="242E3E"
        />
      </div>
      {console.log(data)}
      {loading ? <Loading /> : <Table data={[...data.getRoomByOwner]} />}
    </div>
    // </div>
  );
};

export default Dashboard;

const useStyles = createUseStyles({
  container: {
    display: "grid",
    // height: "100vh",
    // width: "100%",
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
  rooms: {
    display: "grid",
    gridTemplateColumns: "1fr",
    rowGap: "3rem",
    justifyContent: "center",
    width: "100%",
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
