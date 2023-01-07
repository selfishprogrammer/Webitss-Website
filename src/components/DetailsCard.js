import moment from "moment";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Services from "../Services/Service";
import AccountStatusModal from "./AccountStatusModal";
import StatusUpdateModal from "./StatusUpdateModal";

export default function DetailsCard({ details, type }) {
  const [accountModalStatus, setaccountModalStatus] = useState(false);
  const [statusUpdateModal, setstatusUpdateModal] = useState(false);
  const [status, setstatus] = useState("");

  const navigate = useNavigate();
  const handleProjectStatus = (sts) => {
    setstatus(sts);
    setstatusUpdateModal(true);
  };

  const updateUserOrDeveloperStatus = async (reason) => {
    const updateDetails = {
      email: details.records.email,
      status:
        details.records.accountStatus === "active" ? "deactive" : "active",
      statusOf: type,
      reason: reason,
    };
    const updateAccountStatus =
      await Services.updateUserOrDeveloperAccountStatus(updateDetails);
    if (updateAccountStatus && updateAccountStatus.status === "true") {
      setaccountModalStatus(false);
      navigate("/admin");
    } else {
      alert("Something went wrong!");
    }
  };
  console.log("details===>>", details);

  const renderCardDetails = () => {
    switch (type) {
      case "user":
        return renderUserDetails();
      case "developer":
        return renderDeveloperDetails();
      case "orders":
        return renderTotalDetails();
      default:
        return null;
    }
  };

  const renderUserDetails = () => {
    return (
      <>
        <tr>
          <td
            style={{
              fontFamily: "math",
              width: "40%",
            }}
          >
            Account Type
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "50%",
            }}
          >
            {details.records.categories}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              width: "40%",
            }}
          >
            Created on
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "50%",
            }}
          >
            {moment(details.records.date).format("DD-MMM-YYYY LT")}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              width: "40%",
            }}
          >
            Account status
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "50%",
            }}
          >
            {details.records.accountStatus}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              width: "40%",
            }}
          >
            Orders
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "50%",
              color: "red",
            }}
          >
            {details?.orderDetails === null
              ? "none"
              : details?.orderDetails?.order}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              width: "40%",
            }}
          >
            Advance Payment
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "50%",
            }}
          >
            {details?.orderDetails === null
              ? "none"
              : details?.orderDetails?.advance_payment}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              width: "40%",
            }}
          >
            Due Payment
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "50%",
            }}
          >
            {details?.orderDetails === null
              ? "none"
              : details?.orderDetails?.due_payment}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              width: "40%",
            }}
          >
            Developer Assigned
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "50%",
            }}
          >
            {details?.orderDetails === null
              ? "none"
              : details?.orderDetails?.developer}
          </td>
        </tr>
      </>
    );
  };

  const renderDeveloperDetails = () => {
    return (
      <>
        <tr>
          <td
            style={{
              fontFamily: "math",
              width: "40%",
            }}
          >
            Account Type
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "50%",
            }}
          >
            {details.records.categories}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              width: "40%",
            }}
          >
            Developer Role
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "50%",
            }}
          >
            {details.records.devRole}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              width: "40%",
            }}
          >
            Account status
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "50%",
            }}
          >
            {details.records.accountStatus}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              width: "40%",
            }}
          >
            Developer Status
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "50%",
            }}
          >
            {details.records.devStatus}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              width: "40%",
            }}
          >
            Orders
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "50%",
              color: "red",
            }}
          >
            {details?.orderDetails === null
              ? "none"
              : details?.orderDetails?.order}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              width: "40%",
            }}
          >
            Created on
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              width: "50%",
            }}
          >
            {moment(details.records.date).format("DD-MMM-YYYY LT")}
          </td>
        </tr>
      </>
    );
  };

  const renderTotalDetails = () => {
    return (
      <>
        <tr>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "40%",
            }}
          >
            Category
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "50%",
            }}
          >
            {details.order}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "40%",
            }}
          >
            Details
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "50%",
              borderWidth: 1,
              borderRadius: 6,
            }}
          >
            {details?.details_of_order}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "40%",
            }}
          >
            Project Price
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "50%",
            }}
          >
            {details?.price}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "40%",
            }}
          >
            Status
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "50%",
            }}
          >
            {details?.status}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "40%",
            }}
          >
            Advance Payment
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "50%",
              color: "red",
            }}
          >
            {details?.advance_payment}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "40%",
            }}
          >
            Due Payment
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "50%",
              color: "red",
            }}
          >
            {details?.due_payment}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "40%",
            }}
          >
            Developer Name
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "50%",
              color: "red",
            }}
          >
            {details?.developer}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "40%",
            }}
          >
            Developer Email
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "50%",
              color: "red",
            }}
          >
            {details?.developerEmail}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "40%",
            }}
          >
            Order On
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "math",
              paddingTop: 15,
              width: "50%",
            }}
          >
            {moment(details?.date).format("DD-MMM-YYYY LT")}
          </td>
        </tr>
      </>
    );
  };

  const renderButton = () => {
    if (type === "user" || type === "developer") {
      return (
        <>
          <div className="d-flex justify-content-end my-4">
            <button
              onClick={() => setaccountModalStatus(true)}
              style={{ borderRadius: 8, fontWeight: "bold" }}
              className={
                details?.records.accountStatus === "active"
                  ? "form-control btn btn-outline-danger"
                  : "form-control btn btn-outline-success"
              }
            >
              {details?.records.accountStatus === "active"
                ? "Deactive"
                : "Active"}
            </button>
          </div>
          <AccountStatusModal
            IsVisible={accountModalStatus}
            accept={(reason) => updateUserOrDeveloperStatus(reason)}
            closeModal={() => setaccountModalStatus(false)}
            details={details.records.accountStatus}
          />
        </>
      );
    } else {
      if (details.status === "received") {
        return (
          <div className="row my-4">
            <div className="col-md-6">
              <button
                className="form-control btn btn-outline-danger"
                onClick={() => handleProjectStatus("reject")}
              >
                Reject
              </button>
            </div>
            <div className="col-md-6">
              <button
                className="form-control btn btn-outline-success"
                onClick={() => handleProjectStatus("approved")}
              >
                Approve
              </button>
            </div>
          </div>
        );
      } else if (details.status === "inprogress") {
        return (
          <div className="row my-4">
            <div className="col-md-6">
              <button className="form-control btn btn-outline-danger">
                Reject
              </button>
            </div>
            <div className="col-md-6">
              <button className="form-control btn btn-outline-success">
                Complete
              </button>
            </div>
          </div>
        );
      } else if (details.status === "completed" && details.rated === "No") {
        return (
          <button className="form-control btn btn-outline-warning my-4">
            Notify to Rate
          </button>
        );
      } else if (details.status === "Pending for advance") {
        return (
          <div className="row my-4">
            <div className="col-md-4">
              <button className="form-control btn btn-outline-danger">
                Reject
              </button>
            </div>
            <div className="col-md-4">
              <button className="form-control btn btn-outline-success">
                Notify For Advance Payment
              </button>
            </div>
            <div className="col-md-4">
              <button className="form-control btn btn-outline-primary">
                Procced to In Progress
              </button>
            </div>
          </div>
        );
      } else if (details.status === "rejected") {
        return (
          <button className="form-control btn btn-outline-secondary my-4">
            Reactivate
          </button>
        );
      }
    }
  };
  return (
    <div
      class="shadow-sm bg-white p-3 border"
      style={{
        borderRadius: 10,
        marginTop: type === "orders" ? 0 : 100,
        marginBottom: 10,
      }}
    >
      <div className="col-md-12">
        <img
          width="60"
          height="60"
          src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"
          class="rounded mx-auto d-block"
          alt="..."
        />
      </div>
      <div
        className="text-center my-4"
        style={{ fontFamily: "math", fontWeight: "bold", fontSize: 25 }}
      >
        {type === "orders" ? details.order : details.records.name}
      </div>
      {type === "orders" ? (
        <div className="d-flex justify-content-center">
          <div
            className=" my-2 p-1"
            style={{
              fontFamily: "math",
              fontWeight: "bold",
              fontSize: 17,
              backgroundColor: "red",
              color: "white",
              width: "50%",
              textAlign: "center",
            }}
          >
            #{details.OrderID}
          </div>
        </div>
      ) : null}
      <div
        className="container mx-4"
        style={{ width: "99%", alignSelf: "center" }}
      >
        <tbody className="">
          <tr>
            <td
              style={{
                fontFamily: "math",
                width: "40%",
              }}
            >
              Mobile
            </td>
            <td
              style={{
                fontFamily: "math",
                alignItems: "center",
                width: "15%",
              }}
            >
              :
            </td>
            <td
              style={{
                fontFamily: "math",
                width: "50%",
              }}
            >
              {type === "orders" ? details.phone : details.records.phone}
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontFamily: "math",
                width: "40%",
              }}
            >
              Email
            </td>
            <td
              style={{
                fontFamily: "math",
                width: "15%",
              }}
            >
              :
            </td>
            <td
              style={{
                fontFamily: "math",
                width: "50%",
              }}
            >
              {type === "orders" ? details.email : details.records.email}
            </td>
          </tr>

          {renderCardDetails()}
        </tbody>
        {renderButton()}
      </div>

      <StatusUpdateModal
        IsVisible={statusUpdateModal}
        closeModal={() => setstatusUpdateModal(false)}
        accept={() => setstatusUpdateModal(false)}
        status={status}
        details={details}
      />
    </div>
  );
}
