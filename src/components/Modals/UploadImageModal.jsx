import React, { useState } from "react";
import Modal from "../Modal";
import { NormalButton } from "../Buttons";
import { BoxedInput } from "../Inputs";
import { uploadImage } from "../../redux/actions/roomActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { updateRoom } from "../../gql/Mutations/RoomMutations";
// import { useMutation } from "react-apollo";

const UploadImageModal = ({
  id,
  open,
  closeHandler,
  uploadImage,
  index,
  addImage,
}) => {
  const [file, setFile] = useState(null);

  const fileSelectedHandler = (event) => {
    setFile(event.target.files[0]);
  };

  const fileUploadHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file, file.name);
    uploadImage(id, formData, addImage, index);
    closeHandler();
    setTimeout(() => setFile(null), 3000);
  };

  return (
    <Modal
      open={open}
      handleClose={() => {
        closeHandler();
        setFile(null);
      }}
    >
      <form
        encType="multipart/form-data"
        style={{ display: "grid", rowGap: "1rem" }}
      >
        <h2>Upload Image</h2>
        <BoxedInput
          type="file"
          name="file"
          id="file"
          onChange={fileSelectedHandler}
        />
        <NormalButton
          text="Upload Image"
          onClick={(e) => fileUploadHandler(e)}
          disabled={file === null}
        >
          Upload
        </NormalButton>
      </form>
    </Modal>
  );
};

UploadImageModal.propTypes = {
  uploadImage: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  uploadImage: bindActionCreators(uploadImage, dispatch),
});

export default connect(null, mapDispatchToProps)(UploadImageModal);
