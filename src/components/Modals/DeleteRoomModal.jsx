import React from "react";
import Modal from "../Modal";
import { NormalButton } from "../Buttons";
import { deleteRoom } from "../../redux/actions/roomActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useMutation } from "react-apollo";
import { deleteRoom as delRoomMutation } from "../../gql/Mutations";

const DeleteRoomModal = ({
  open,
  closeHandler,
  returnToCards,
  id,
  deleteRoom,
}) => {
  const [removeRoom] = useMutation(delRoomMutation, {
    variables: {
      id,
    },
  });
  return (
    <Modal open={open} handleClose={closeHandler}>
      <div style={{ display: "grid", rowGap: "1rem" }}>
        Deleting Room...Are You Sure?
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "0.5rem",
          }}
        >
          <NormalButton
            text="Cancel"
            onClick={() => {
              closeHandler();
            }}
            color="FF7893"
            darkerColor="FF2E58"
          />
          <NormalButton
            text="Yes"
            onClick={() => {
              deleteRoom(id);
              closeHandler();
              returnToCards();
              removeRoom(id);
            }}
            color="CDCDCD"
            darkerColor="FF2E58"
          />
        </div>
      </div>
    </Modal>
  );
};

DeleteRoomModal.propTypes = {
  deleteRoom: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteRoom: bindActionCreators(deleteRoom, dispatch),
});

export default connect(null, mapDispatchToProps)(DeleteRoomModal);
