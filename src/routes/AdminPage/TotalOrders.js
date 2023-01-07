import React, { useState } from "react";
import "./AdminPages.css";
import Services from "../../Services/Service";
import AdminNav from "./AdminNav";
import { useLocation } from "react-router";
import DetailsCard from "../../components/DetailsCard";
import moment from "moment";
const TotalOrders = () => {
  const [detailsCardStatus, setdetailsCardStatus] = useState(false);
  // const [showModal, setShowModal] = useState(false)
  const [OrdersDetails, setOrdersDetails] = useState({});

  const location = useLocation();
  const { totalOrder } = location.state;
  const showDetails = async (getOrderDetails) => {
    console.log("totalDetails===>>", getOrderDetails);
    setOrdersDetails(getOrderDetails);
    setdetailsCardStatus(true);
  };
  console.log("orderDetails", OrdersDetails);
  console.log("items", totalOrder);
  const colorCodeBasedOnProjectStatus = (status) => {
    let color = "";
    // alert(status);
    console.log("items");
    switch (status) {
      case "pending":
        color = "yellowgreen";
        break;
      case "inprogress":
        color = "blue";

        break;
      case "completed":
        color = "yellowgreen";

        break;
      case "rejected":
        color = "red";

        break;
      case "Pending for advance":
        color = "brown";

        break;
      default:
        break;
    }
    return color;
  };
  return (
    <>
      <AdminNav />
      <div class="container-fluid" style={{ marginTop: 80 }}>
        <div className="row">
          <div class="col-md-8">
            <div
              className="shadow-lg bg-white p-5"
              style={{ borderRadius: 20 }}
            >
              <div className="text-center" style={{ fontSize: 30 }}>
                TOTAL ORDERS
              </div>
              <div
                className="mt-5"
                style={{ overflowY: "auto", height: "60vh" }}
              >
                <div class="table-responsive">
                  <table class="table table-bordered table-hover">
                    <thead style={{ cursor: "pointer" }}>
                      <tr>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          PROJECT ID
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          PROJECT NAME
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          CLIENT
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          CATEGORY
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          DEVELOPER
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          PROJECT STATUS
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          DATE OF ORDER
                        </th>
                      </tr>
                    </thead>
                    <tbody style={{ cursor: "pointer" }}>
                      {totalOrder.map((item, key) => (
                        <tr
                          style={{
                            backgroundColor:
                              OrdersDetails?.email === item.email &&
                              OrdersDetails.status === item.status &&
                              detailsCardStatus
                                ? colorCodeBasedOnProjectStatus(item.status)
                                : "transparent",
                          }}
                          onClick={() => showDetails(item)}
                        >
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {item?.OrderID}
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {item?.order.toUpperCase()}
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {item?.name.toUpperCase()}
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {item?.order.toUpperCase()}
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {item?.developer.toUpperCase()}
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {item?.status.toUpperCase()}
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {moment(item?.date)
                              .format("DD-MMM-YYYY LT")
                              .toUpperCase()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            {detailsCardStatus ? (
              <DetailsCard details={OrdersDetails} type="orders" />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default TotalOrders;
