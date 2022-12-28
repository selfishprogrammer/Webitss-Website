import moment from "moment";
import React from "react";

export default function DetailsCard({ details }) {
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
        </tbody>
      </div>
    </div>
  );
}
