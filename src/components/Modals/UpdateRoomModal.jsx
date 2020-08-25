import React from "react";
import Modal from "../Modal";
import { BoxedInput } from "../Inputs";
import { NormalButton } from "../Buttons";

const UpdateRoomModal = ({
  open,
  closeHandler,
  field,
  setFieldValue,
  handleUpdate,
  data,
}) => {
  return (
    <Modal open={open} handleClose={closeHandler}>
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
  );
};

export default UpdateRoomModal;
