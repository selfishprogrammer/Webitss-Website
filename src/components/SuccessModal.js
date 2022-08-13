/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Modal from "react-modal";
export default function SuccessModal({ title, IsVisible }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: 10,
      borderWidth: 0,
    },
  };
  return (
    <div>
      <Modal
        isOpen={IsVisible}
        //   onAfterOpen={afterOpenModal}
        //   onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="d-flex justify-content-center">
          <img
            src="https://icon-library.com/images/tick-icon/tick-icon-16.jpg"
            width="60"
            height="60"
          />
        </div>
        <div
          className="text-center"
          style={{ fontSize: 20, fontFamily: "initial", padding: 20 }}
        >
          {title}
        </div>
      </Modal>
    </div>
  );
}
