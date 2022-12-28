import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Services from "../../Services/Service";
import AdminNav from "./AdminNav";
import { useLocation, useNavigate } from "react-router";
import DetailsCard from "../../components/DetailsCard";
import moment from "moment";

const TotalUsers = () => {
  const [detailsCardStatus, setdetailsCardStatus] = useState(false);
  const [userDetailsAndOrder, setuserDetailsAndOrder] = useState({});

  const location = useLocation();
  const { totalUser } = location.state;

  const showDetails = async (email) => {
    console.log("email==>", email);
    const getUserDetails = await Services.getUserDetailsAndOrder({
      email: email,
    });
    console.log("totalDetails===>>", getUserDetails);
    if (getUserDetails && getUserDetails.status === "true") {
      setuserDetailsAndOrder(getUserDetails);
      setdetailsCardStatus(true);
    } else {
      alert(getUserDetails.data);
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
                TOTAL USERS
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
                          VERIFIED
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          TYPE
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          STATUS
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
                      {totalUser.map((item, key) => (
                        <tr
                          style={{
                            backgroundColor:
                              item.accountStatus === "active"
                                ? "#08B1F9"
                                : "#FB4747",
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
                            {item.emailVerified}
                          </td>
                          <td
                            style={{
                              fontFamily: "monospace",
                            }}
                          >
                            {item.categories}
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
              <DetailsCard details={userDetailsAndOrder} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default TotalUsers;
