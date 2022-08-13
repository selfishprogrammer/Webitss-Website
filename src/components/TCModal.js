import React, { useEffect } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

export default function TCModal({ IsVisible, accept }) {
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
          Please Accept Our T&C And Privacy Policy To Procced Further.
        </div>
        <div
          className="text-center"
          style={{ fontSize: 20, fontFamily: "initial", padding: 20 }}
        >
          <Link
            to="/tc"
            style={{
              fontSize: 20,
              fontFamily: "initial",
              padding: 20,
              alignSelf: "center",
            }}
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy-policy"
            style={{
              fontSize: 20,
              fontFamily: "initial",
              padding: 20,
              alignSelf: "center",
            }}
          >
            Privacy Policy
          </Link>
        </div>
        <div
          className="shadow bg-white"
          style={{ borderRadius: 20, cursor: "pointer" }}
          onClick={() => accept()}
        >
          <div
            id="text"
            className="text-center"
            style={{ padding: 10, color: "blue", fontSize: 20 }}
          >
            ACCEPT
          </div>
        </div>
      </Modal>
    </div>
  );
}
