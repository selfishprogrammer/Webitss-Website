import moment from "moment";
import React, { useEffect } from "react";
import { useLocation } from "react-router";
export default function TotalUsers() {
  const location = useLocation();
  const { totalUser } = location.state;

  return (
    <div>
      <div
        id="text"
        className="text-center my-4"
        style={{ fontSize: 30, fontFamily: "serif" }}
      >
        TOTAL USERS
      </div>
      <div
        className="container shadow-sm border p-5"
        style={{ borderRadius: 20 }}
      >
        <div style={{ overflowX: "auto" }}>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Serial No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Password</th>
                <th scope="col">Categories</th>
                <th scope="col">OtpValue</th>
                <th scope="col">EmailVerified</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            {totalUser.map((item, key) => (
              <tbody>
                <tr>
                  <th scope="row">{key + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.password}</td>
                  <td>{item.categories}</td>
                  <td>{item.otpValue}</td>
                  <td>{item.emailVerified}</td>
                  <td>{moment(item.date).format("DD-MMM-YYYY LT")}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
