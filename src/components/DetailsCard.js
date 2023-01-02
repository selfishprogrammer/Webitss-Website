import moment from "moment";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Services from "../Services/Service";
import AccountStatusModal from "./AccountStatusModal";

export default function DetailsCard({ details, type }) {
  const [accountModalStatus, setaccountModalStatus] = useState(false);
  const navigate = useNavigate();
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

  const renderCardDetails = () => {
    switch (type) {
      case "user":
        return renderUserDetails();
      case "developer":
        return renderDeveloperDetails();
        case "totalOders":
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
              fontFamily: "monospace",
              width: "40%",
            }}
          >
            Account Type
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "50%",
            }}
          >
            {details.records.categories}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "monospace",
              width: "40%",
            }}
          >
            Created on
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "50%",
            }}
          >
            {moment(details.records.date).format("DD-MMM-YYYY LT")}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "monospace",
              width: "40%",
            }}
          >
            Account status
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "50%",
            }}
          >
            {details.records.accountStatus}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "monospace",
              width: "40%",
            }}
          >
            Orders
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "monospace",
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
              fontFamily: "monospace",
              width: "40%",
            }}
          >
            Advance Payment
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "monospace",
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
              fontFamily: "monospace",
              width: "40%",
            }}
          >
            Due Payment
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "monospace",
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
              fontFamily: "monospace",
              width: "40%",
            }}
          >
            Developer Assigned
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "monospace",
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
              fontFamily: "monospace",
              width: "40%",
            }}
          >
            Account Type
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "50%",
            }}
          >
            {details.records.categories}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "monospace",
              width: "40%",
            }}
          >
            Developer Role
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "50%",
            }}
          >
            {details.records.devRole}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "monospace",
              width: "40%",
            }}
          >
            Account status
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "50%",
            }}
          >
            {details.records.accountStatus}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "monospace",
              width: "40%",
            }}
          >
            Developer Status
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "50%",
            }}
          >
            {details.records.devStatus}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "monospace",
              width: "40%",
            }}
          >
            Orders
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "monospace",
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
              fontFamily: "monospace",
              width: "40%",
            }}
          >
            Created on
          </td>
          <td
            style={{
              fontFamily: "monospace",
              width: "15%",
            }}
          >
            :
          </td>
          <td
            style={{
              fontFamily: "monospace",
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
      </>
    );
  }

  return (
    <div
      class="shadow-sm bg-white p-3 border"
      style={{ borderRadius: 10, marginTop: 100 }}
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
        style={{ fontFamily: "monospace", fontWeight: "bold", fontSize: 25 }}
      >
        {details.records.name}
      </div>
      <div
        className="container mx-4"
        style={{ width: "99%", alignSelf: "center" }}
      >
        <tbody className="">
          <tr>
            <td
              style={{
                fontFamily: "monospace",
                width: "40%",
              }}
            >
              Mobile
            </td>
            <td
              style={{
                fontFamily: "monospace",
                alignItems: "center",
                width: "15%",
              }}
            >
              :
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "50%",
              }}
            >
              {details.records.phone}
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontFamily: "monospace",
                width: "40%",
              }}
            >
              Email
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "15%",
              }}
            >
              :
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "50%",
              }}
            >
              {details.records.email}
            </td>
          </tr>

          {renderCardDetails()}
        </tbody>
        <div className="d-flex justify-content-end my-4">
          <button
            onClick={() => setaccountModalStatus(true)}
            style={{ borderRadius: 8, fontWeight: "bold" }}
            className={
              details?.records.accountStatus === "active"
                ? "btn btn-danger"
                : "btn btn-success"
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
      </div>
    </div>
  );
}
