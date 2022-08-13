import moment from "moment";
import React from "react";
import { useLocation } from "react-router";
export default function TotalOrders() {
  const location = useLocation();
  const { totalOrder } = location.state;

  return (
    <div>
      <div
        id="text"
        className="text-center my-4"
        style={{ fontSize: 30, fontFamily: "serif" }}
      >
        TOTAL ORDERS
      </div>
      <div
        className="container shadow-sm border p-5"
        // style={{ borderRadius: 20 }}
      >
        <div style={{ overflowX: "auto" }}>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Serial No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Order</th>
                <th scope="col">Order Type</th>
                <th scope="col">Details Of Order</th>
                <th scope="col">Status</th>
                <th scope="col">Developer</th>
                <th scope="col">Price</th>
                <th scope="col">Advanced Payment</th>
                <th scope="col">Due Payment</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            {totalOrder?.map((item, key) => (
              <tbody>
                <tr>
                  <th scope="row">{key + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.order}</td>
                  <td>{item.orderType}</td>
                  <td>{item.details_of_order}</td>
                  <td>{item.status}</td>
                  <td>{item.developer}</td>
                  <td>{item.price}</td>
                  <td>{item.advance_payment}</td>
                  <td>{item.due_payment}</td>
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
