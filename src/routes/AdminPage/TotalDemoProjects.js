import moment from "moment";
import React from "react";
import { useLocation } from "react-router";
export default function TotalDemoProjects() {
  const location = useLocation();
  const { totalDemo } = location.state;

  return (
    <div>
      <div
        id="text"
        className="text-center my-4"
        style={{ fontSize: 30, fontFamily: "serif" }}
      >
        TOTAL DEMOPROJECTS
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
                <th scope="col">Order ID</th>
                <th scope="col">Categories</th>
                <th scope="col">Name</th>
                <th scope="col">Details</th>
                <th scope="col">Developer</th>
                <th scope="col">Developer Review</th>
                <th scope="col">Client Review</th>
                <th scope="col">Client</th>
                <th scope="col">Image 1</th>
                <th scope="col">Image 2</th>
                <th scope="col">Image 3</th>
                <th scope="col">Image 4</th>
                <th scope="col">Status</th>
                <th scope="col">Requirements</th>
                <th scope="col">Ratings</th>
                <th scope="col">Costs</th>
                <th scope="col">Date Of Start</th>
                <th scope="col">Date Of End</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            {totalDemo?.map((item, key) => (
              <tbody>
                <tr>
                  <th scope="row">{key + 1}</th>
                  <td>{item.order_id}</td>
                  <td>{item.categories}</td>
                  <td>{item.name}</td>
                  <td>{item.details}</td>
                  <td>{item.developer}</td>
                  <td>{item.developer_review}</td>
                  <td>{item.client_review}</td>
                  <td>{item.client}</td>
                  <td>{item.image_1}</td>
                  <td>{item.image_2}</td>
                  <td>{item.image_3}</td>
                  <td>{item.image_4}</td>
                  <td>{item.status}</td>
                  <td>{item.requirement}</td>
                  <td>{item.rating}</td>
                  <td>{item.costs}</td>
                  <td>{item.date_of_start}</td>
                  <td>{item.date_of_end}</td>
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
