import moment from "moment";
import React, { useEffect } from "react";
import { useLocation } from "react-router";
export default function TotalQueries() {
  const location = useLocation();
  const { totalQueries } = location.state;

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
                <th scope="col">Queries</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            {totalQueries.map((item, key) => (
              <tbody>
                <tr>
                  <th scope="row">{key + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.queries}</td>

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
