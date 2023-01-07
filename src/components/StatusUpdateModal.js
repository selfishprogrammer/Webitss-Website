import React from "react";
import Modal from "react-modal";
import { cross } from "./Images";

export default function StatusUpdateModal({
  IsVisible,
  closeModal,
  accept,
  details,
  status,
}) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: 0,
      borderWidth: 1,
      width: "40%",
    },
  };
  const customStyles2 = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: 0,
      borderWidth: 1,
      width: "90%",
    },
  };
  const renderAcceptProdectDetails = () => {
    if (status === "reject") {
      return (
        <div className="p-3">
          <div
            className="text-center my-3"
            style={{ fontWeight: "bold", fontFamily: "math", fontSize: 35 }}
          >
            {details.order}
          </div>
          <div className="d-flex justify-content-center">
            <p
              className="text-center px-4 py-2"
              style={{
                fontWeight: "bold",
                fontSize: 16,
                backgroundColor: "red",
                width: "30%",
                color: "#fff",
              }}
            >
              #{details.OrderID}
            </p>
          </div>

          <p
            className="text-center px-4 py-2"
            style={{
              fontWeight: "bold",
              fontSize: 16,
              backgroundColor: "red",
              width: "30%",
              color: "white",
            }}
          >
            REASON
          </p>

          <textarea
            className="form-control"
            style={{ borderRadius: 0, width: "100%", height: 400 }}
          >
            Enter Reject Reason Details
          </textarea>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-danger my-4 form-control"
              style={{ borderRadius: 10 }}
            >
              Reject
            </button>
          </div>
        </div>
      );
    } else if (status === "approved") {
      return (
        <div className="p-3">
          <div
            className="text-center my-3"
            style={{ fontWeight: "bold", fontFamily: "math", fontSize: 35 }}
          >
            PROJECT VERIFY
          </div>

          <div className="d-flex justify-content-between my-4">
            <div className="">
              <p
                className="text-center px-4 py-2"
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  backgroundColor: "red",
                  width: "100%",
                  color: "#fff",
                  borderRadius: 5,
                }}
              >
                Project Name
              </p>
              <input
                className="form-control"
                disabled
                value={details.order}
                placeholder="Project Name"
              />
            </div>
            <div className="">
              <p
                className="text-center px-4 py-2"
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  backgroundColor: "yellowgreen",
                  width: "100%",
                  color: "#fff",
                  borderRadius: 5,
                }}
              >
                Client Name
              </p>
              <input
                className="form-control"
                disabled
                value={details.name}
                placeholder="Client Name"
              />
            </div>
            <div className="">
              <p
                className="text-center px-4 py-2"
                style={{
                  fontWeight: "blue",
                  fontSize: 16,
                  backgroundColor: "red",
                  width: "100%",
                  color: "#fff",
                  borderRadius: 5,
                }}
              >
                E-Mail
              </p>
              <input
                className="form-control"
                disabled
                value={details.email}
                placeholder="E-mail"
              />
            </div>
          </div>

          <div className="d-flex justify-content-between my-4">
            <div className="">
              <p
                className="text-center px-4 py-2"
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  backgroundColor: "green",
                  width: "100%",
                  color: "#fff",
                  borderRadius: 5,
                }}
              >
                Project Price
              </p>
              <input className="form-control" placeholder="Project Price" />
            </div>
            <div className="">
              <p
                className="text-center px-4 py-2"
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  backgroundColor: "red",
                  width: "100%",
                  color: "#fff",
                  borderRadius: 5,
                }}
              >
                Advance Payment
              </p>
              <input className="form-control" placeholder="Advance Payment" />
            </div>
            <div className="">
              <p
                className="text-center px-4 py-2"
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  backgroundColor: "green",
                  width: "100%",
                  color: "#fff",
                  borderRadius: 5,
                }}
              >
                Developer Name{" "}
              </p>
              <input className="form-control" placeholder="Developer Name" />
            </div>
          </div>
          <textarea
            className="form-control"
            style={{ borderRadius: 0, width: "100%", height: 200 }}
          >
            Enter Project Details
          </textarea>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-success my-4 form-control"
              style={{ borderRadius: 10 }}
            >
              Approved
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Modal
        isOpen={IsVisible}
        style={status === "reject" ? customStyles : customStyles2}
        contentLabel="Example Modal"
      >
        <div className="d-flex justify-content-end">
          <img
            src={cross}
            alt=""
            width="20"
            height="20"
            style={{ backgroundColor: "red" }}
            onClick={closeModal}
          />
        </div>
        {/* {renderContent()} */}
        {renderAcceptProdectDetails()}
        <div
          className={`shadow bg-${details === "active" ? "danger" : "success"}`}
          style={{ borderRadius: 20, cursor: "pointer" }}
          onClick={() => accept()}
        ></div>
      </Modal>
    </div>
  );
}
