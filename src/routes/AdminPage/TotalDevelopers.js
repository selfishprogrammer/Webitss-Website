import React, { useState } from "react";
import "./AdminPages.css";
import Services from "../../Services/Service";
import AdminNav from "./AdminNav";
import { useLocation } from "react-router";
import DetailsCard from "../../components/DetailsCard";
import moment from "moment";
const TotalDevelopers = () => {
  const [detailsCardStatus, setdetailsCardStatus] = useState(false);
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
                TOTAL DEVELOPERS
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
                          Name
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          PHONE
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          ROLE
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          DEVELOPER STATUS
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          ACCOUNT STATUS
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          DATE OF CREATION
                        </th>
                      </tr>
                    </thead>
                    <tbody style={{ cursor: "pointer" }}>
                      {totalDevelopers.map((item, key) => (
                        <tr
                          style={{
                            backgroundColor:
                              developerDetailsAndOrder?.records?.email ===
                                item.email && detailsCardStatus
                                ? item.accountStatus === "active"
                                  ? "#33DAFF"
                                  : "red"
                                : "transparent",
                          }}
                          onClick={() => showDetails(item.email)}
                        >
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {item.name}
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {item.email}
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {item.phone}
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {item.devRole}
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {item.devStatus}
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {item.accountStatus}
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {moment(item.date).format("DD-MMM-YYYY LT")}
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
              <DetailsCard
                details={developerDetailsAndOrder}
                type="developer"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default TotalDevelopers;
