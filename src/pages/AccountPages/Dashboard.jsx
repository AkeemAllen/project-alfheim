import React, { useState } from "react";
import { createUseStyles } from "react-jss";
// import Room from "../../components/Room";
import { NormalButton } from "../../components/Buttons";
import Modal from "../../components/Modal";
import AddRoomForm from "../../components/forms/AddRoomForm";
import { useQuery } from "react-apollo";
import Loading from "../../components/Loading";
import Snackbar from "../../components/SnackBars";
import { getSingleOwnerRooms } from "../../gql/Queries";
import Card from "../../components/Dashboard Components/Card";
import RoomDetails from "../../components/Dashboard Components/RoomDetails";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [detailedViewOpen, setDetailedViewOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const classes = useStyles();

  const { loading, data } = useQuery(getSingleOwnerRooms, {
    variables: { owner: localStorage.getItem("userId") },
  });

  const [mounted, setMounted] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState();

  return (
    <div className={classes.container}>
      <Snackbar mounted={mounted} text={message} status={status} />
      <Modal handleClose={() => setOpen(false)} open={open}>
        <AddRoomForm
          setMessage={setMessage}
          setMounted={setMounted}
          setStatus={setStatus}
        />
      </Modal>
      <h2 className={classes.header}>Dashboard</h2>
      {detailedViewOpen ? null : (
        <div className={classes.toolbar}>
          <NormalButton
            text="Add Room"
            onClick={() => setOpen(true)}
            color="51cb20"
            darkerColor="3e941c"
          />
        </div>
      )}
      {loading ? (
        <Loading />
      ) : detailedViewOpen ? (
        <RoomDetails
          returnToCards={() => setDetailedViewOpen(false)}
          data={data.getRoomByOwner[index]}
        />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            margin: "2rem",
            columnGap: "3rem",
          }}
        >
          {data.getRoomByOwner.map((room, index) => {
            return (
              <Card
                price={room.price}
                available={room.isAvailable}
                visible={room.isVisible}
                id={room.id}
                personalID={room.personalID}
                openDetailedView={() => {
                  setDetailedViewOpen(true);
                  setIndex(index);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;

const useStyles = createUseStyles({
  container: {
    display: "grid",
  },
  header: {
    marginTop: "2rem",
    marginLeft: "2rem",
    marginBottom: "0.5rem",
    color: "rgba(0,0,0,0.5)",
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
