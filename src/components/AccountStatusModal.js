import React, { useState } from "react";
import Modal from "react-modal";
import { cross } from "./Images";

export default function AccountStatusModal({
  IsVisible,
  accept,
  details,
  closeModal,
}) {
  const [reason, setreason] = useState("");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: 10,
      borderWidth: 2,
    },
  };

  const renderContent = () => {
    if (details === "active") {
      return (
        <>
          <div
            className="text-center"
            style={{ fontSize: 20, fontFamily: "math", padding: 20 }}
          >
            Mention why you are deactivating this account
          </div>

          <textarea
            value={reason}
            onChange={(e) => setreason(e.target.value)}
            className="form-control mb-5"
          >
            Add Reason
          </textarea>
        </>
      );
    } else {
      return (
        <div
          className="text-center"
          style={{ fontSize: 20, fontFamily: "math", padding: 20 }}
        >
          Are You Sure want to active this Account ??
        </div>
      );
    }
  };

  return (
    <div>
      <Modal
        isOpen={IsVisible}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="d-flex justify-content-end">
          <img src={cross} alt="" onClick={closeModal} />
        </div>
        {renderContent()}
        <div
          className={`shadow bg-${details === "active" ? "danger" : "success"}`}
          style={{ borderRadius: 20, cursor: "pointer" }}
          onClick={() => accept(reason)}
        >
          <div
            id="text"
            className="text-center"
            style={{ padding: 10, color: "white", fontSize: 20 }}
          >
            {details === "active" ? "Deactive" : "Active"}
          </div>
        </div>
      </Modal>
    </div>
  );
}
