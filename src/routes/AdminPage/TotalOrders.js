import React, { useState } from "react";
import "./AdminPages.css";
import Services from "../../Services/Service";
import AdminNav from "./AdminNav";
import { useLocation } from "react-router";
import DetailsCard from "../../components/DetailsCard";
import moment from "moment";
const TotalOrders = () => {
  const [detailsCardStatus, setdetailsCardStatus] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [developerDetailsAndOrder, setdeveloperDetailsAndOrder] = useState({});

  const location = useLocation();
  const { totalDevelopers } = location.state;

  const showDetails = async (email) => {
    console.log("email==>", email);
    const getDevelopersDetails = await Services.getDevelopersDetailsAndOrder({
      email: email,
    });
    console.log("totalDetails===>>", getDevelopersDetails);
    if (getDevelopersDetails && getDevelopersDetails.status === "true") {
      setdeveloperDetailsAndOrder(getDevelopersDetails);
      setdetailsCardStatus(true);
    } else {
      alert(getDevelopersDetails.data);
    }
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
                      </tr>
                    </thead>
                    <tbody style={{ cursor: "pointer" }}>
                      {/* {totalDevelopers.map((item, key) => ( */}
                        <tr
                          // style={{
                          //   backgroundColor:
                          //     developerDetailsAndOrder?.records?.email ===
                          //       item.email && detailsCardStatus
                          //       ? item.accountStatus === "active"
                          //         ? "#33DAFF"
                          //         : "red"
                          //       : "transparent",
                          // }}
                          // onClick={() => showDetails(item.email)}
                          onClick={()=>{setShowModal(true)}}
                        >
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {/* {item.name} */}
                            D169452
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {/* {item.email} */}
                            DATABASE MANAGEMENT
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {/* {item.phone} */}
                            BUBAI DAS
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            DESKTOP APPLICATION
                            {/* {item.devRole} */}
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {/* {item.devStatus} */}
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            WITTING VERIFY
                            {/* {item.accountStatus} */}
                          </td>
                          {/* <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {moment(item.date).format("DD-MMM-YYYY LT")}
                          </td> */}
                        </tr>
                      {/* ))} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            {showModal ? (
              <DetailsCard
                // details={developerDetailsAndOrder}
                type="totalOders"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default TotalOrders;

