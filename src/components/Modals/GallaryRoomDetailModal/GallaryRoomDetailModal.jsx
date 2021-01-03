import React from "react";
import Modal from "../../Modal/Modal";
import "./GallaryRoomDetailModal.scss";
import closeIcon from "../../../assets/icons/Close Icon.png";
const GallaryRoomDetailModal = ({
  ownerInfo,
  amenities,
  rules,
  open,
  setOpen,
}) => {
  return (
    <div>
      <Modal handleClose={() => setOpen(false)} open={open}>
        <div className="gallary-room-detail-modal-wrapper">
          <div>
            <div className="gallary-room-detail-modal-top">
              <h3>Details</h3>
              <img src={closeIcon} alt="close" onClick={() => setOpen(false)} />
            </div>
            <p className="description">
              Large 1 br, 27000 per month, own light and water meter. Well
              appointed 2 room, 35,000 per month, own light and water meter
              recently renovated. Bybrook Avenue, Kgn 20 Call or Watsapp
              8768244904
            </p>
            <p>Contact: 876-578-6421</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GallaryRoomDetailModal;
