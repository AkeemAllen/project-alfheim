import React, { useState, useEffect } from "react";
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
  fieldValue,
}) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if ((field === "isAvailable") | (field === "isVisible")) {
      setDisabled(false);
    } else if (
      (fieldValue === "") |
      (fieldValue === undefined) |
      (fieldValue === null) |
      (fieldValue === 0)
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [fieldValue, field]);

  const closeModal = () => {
    if (field === "price") {
      setFieldValue(0);
    } else {
      setFieldValue("");
    }
    closeHandler();
  };

  return (
    <Modal open={open} handleClose={closeModal}>
      <div style={{ display: "grid", rowGap: "1rem" }}>
        {(field === "isVisible") | (field === "isAvailable") ? null : (
          <BoxedInput
            type={field === "price" ? "number" : "text"}
            label={field}
            onChange={(e) => {
              setFieldValue(e.target.value);
            }}
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
          disabled={disabled}
          onClick={handleUpdate}
        />
      </div>
    </Modal>
  );
};

export default UpdateRoomModal;
