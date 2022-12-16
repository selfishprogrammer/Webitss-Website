import React, { useEffect } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

export default function LoginModal({ IsVisible, close }) {
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
          Please Login to order your projects and connect with us.
        </div>
        <div
          className="text-center"
          style={{ fontSize: 20, fontFamily: "initial", padding: 20 }}
        >
          <Link
            to="/login"
            style={{
              fontSize: 20,
              fontFamily: "initial",
              padding: 20,
              alignSelf: "center",
            }}
          >
            Login
          </Link>
          <Link
            to="/"
            style={{
              fontSize: 20,
              fontFamily: "initial",
              padding: 20,
              alignSelf: "center",
            }}
          >
            Back to Home
          </Link>
        </div>
      </Modal>
    </div>
  );
}
