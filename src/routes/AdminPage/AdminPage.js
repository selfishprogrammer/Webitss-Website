import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Services from "../../Services/Service";
import AdminNav from "./AdminNav";
import { useNavigate } from "react-router";

export default function AdminPage() {
  const [totalUser, settotalUsers] = useState([]);
  const [totalUserCount, settotalUserCounts] = useState("");
  const [totalOrder, settotalOrders] = useState([]);
  const [totalOrderCount, settotalOrderCounts] = useState("");
  const [completedTotalOrder, setcompletedTotalOrders] = useState([]);
  const [completedTotalOrderCount, setcompletedTotalOrderCounts] = useState("");
  const [rejectedTotalOrder, setrejectedTotalOrders] = useState([]);
  const [rejectedTotalOrderCount, setrejectedTotalOrderCounts] = useState("");
  const [reviewingTotalOrder, setreviewingTotalOrders] = useState([]);
  const [reviewingTotalOrderCount, setreviewingTotalOrderCounts] = useState("");
  const [totalRecivedOrder, settotalRecivedOrders] = useState([]);
  const [totalRecivedOrderCount, settotalRecivedOrderCounts] = useState("");
  const [totalInprogressOrder, settotalInprogressOrders] = useState([]);
  const [totalInprogressOrderCount, settotalInprogressOrderCounts] =
    useState("");
  const [totalQueries, settotalQueriess] = useState([]);
  const [totalQueriesCount, settotalQueriesCounts] = useState("");
  const [totalDemo, settotalDemos] = useState([]);
  const [totalDemoCount, settotalDemoCounts] = useState("");
  const [totalDevelopers, settotalDeveloperss] = useState([]);
  const [totalDeveloperCount, settotalDeveloperCounts] = useState("");
  useEffect(() => {
    totalUsers();
    totalOrders();
    totalCompletedOrders();
    totalRejectedOrders();
    totalReviewingOrders();
    totalRecivedOrders();
    totalInprogressOrders();
    totalQueriess();
    totalDemoProject();
    totalDeveloper();
  }, []);

  const totalUsers = async () => {
    const data = await Services.totalUsers();
    if (data?.status === "true") {
      settotalUsers(data?.records);
      settotalUserCounts(data?.count);
    } else {
      settotalUsers(data?.records);
      settotalUserCounts("0");
    }
  };
  const totalOrders = async () => {
    const data = await Services.totalOrders({ status: "" });
    if (data?.status === "true") {
      settotalOrders(data?.records);
      settotalOrderCounts(data?.count);
    } else {
      settotalOrders(data?.records);
      settotalOrderCounts("0");
    }
  };

  const totalCompletedOrders = async () => {
    const data = await Services.totalOrders({ status: "completed" });
    if (data?.status === "true") {
      setcompletedTotalOrders(data?.records);
      setcompletedTotalOrderCounts(data?.count);
    } else {
      setcompletedTotalOrders(data?.records);
      setcompletedTotalOrderCounts("0");
    }
  };

  const totalRejectedOrders = async () => {
    const data = await Services.totalOrders({ status: "rejected" });
    if (data?.status === "true") {
      setrejectedTotalOrders(data?.records);
      setrejectedTotalOrderCounts(data?.count);
    } else {
      setrejectedTotalOrders(data?.records);
      setrejectedTotalOrderCounts("0");
    }
  };

  const totalInprogressOrders = async () => {
    const data = await Services.totalOrders({ status: "inprogress" });
    if (data?.status === "true") {
      settotalInprogressOrders(data?.records);
      settotalInprogressOrderCounts(data?.count);
    } else {
      settotalInprogressOrders(data?.records);
      settotalInprogressOrderCounts("0");
    }
  };

  const totalReviewingOrders = async () => {
    const data = await Services.totalOrders({ status: "reviewing" });
    if (data?.status === "true") {
      setreviewingTotalOrders(data?.records);
      setreviewingTotalOrderCounts(data?.count);
    } else {
      setreviewingTotalOrders(data?.records);
      setreviewingTotalOrderCounts("0");
    }
  };

  const totalRecivedOrders = async () => {
    const data = await Services.totalOrders({ status: "received" });
    if (data?.status === "true") {
      settotalRecivedOrders(data?.records);
      settotalRecivedOrderCounts(data?.count);
    } else {
      settotalRecivedOrders(data?.records);
      settotalRecivedOrderCounts("0");
    }
  };

  const totalQueriess = async () => {
    const data = await Services.totaQueries();
    if (data?.status === "true") {
      settotalQueriess(data?.records);
      settotalQueriesCounts(data?.count);
    } else {
      settotalQueriess(data?.records);
      settotalQueriesCounts("0");
    }
  };

  const totalDemoProject = async () => {
    const data = await Services.demoProjects();
    if (data?.status === "true") {
      settotalDemos(data?.records);
      settotalDemoCounts(data?.count);
    } else {
      settotalDemos(data?.records);
      settotalDemoCounts("0");
    }
  };

  const totalDeveloper = async () => {
    const data = await Services.totalDevelopers();
    if (data?.status === "true") {
      settotalDeveloperss(data?.records);
      settotalDeveloperCounts(data?.count);
    } else {
      settotalDeveloperss(data?.records);
      settotalDeveloperss("0");
    }
  };
  const navigate = useNavigate();

  console.log("users===>>>", totalUserCount, totalUser);
  return (
    <div>
      <AdminNav />
      <div className="container my-4">
        <div className="row">
          <div
            className="col-md-4 my-3"
            id="steps"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/totalUsers", {
                state: {
                  totalUser: totalUser,
                },
              });
            }}
          >
            <div className="shadow px-5 py-2" style={{ borderRadius: 20 }}>
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 30, fontFamily: "serif" }}
              >
                TOTAL USERS
              </div>
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 30, fontFamily: "serif" }}
              >
                {totalUserCount}
              </div>
            </div>
          </div>
          <div
            className="col-md-4 my-3"
            id="steps"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/totalDevelopers", {
                state: {
                  totalDevelopers: totalDevelopers,
                },
              });
            }}
          >
            <div className="shadow px-5 py-2" style={{ borderRadius: 20 }}>
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 30, fontFamily: "serif" }}
              >
                TOTAL DEVS
              </div>
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 30, fontFamily: "serif" }}
              >
                {totalUserCount}
              </div>
            </div>
          </div>
          <div
            className="col-md-4 my-3"
            id="steps"
            style={{ cursor: "pointer" }}
          >
            <div
              className="shadow px-5 py-2"
              style={{ borderRadius: 20 }}
              onClick={() => {
                navigate("/totalOrders", {
                  state: {
                    totalOrder: totalOrder,
                  },
                });
              }}
            >
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 30, fontFamily: "serif" }}
              >
                TOTAL ORDERS
              </div>
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 30, fontFamily: "serif" }}
              >
                {totalOrderCount}
              </div>
            </div>
          </div>
          <div
            className="col-md-4 my-3"
            id="steps"
            style={{ cursor: "pointer" }}
          >
            <div
              className="shadow px-5 py-2"
              style={{ borderRadius: 20 }}
              onClick={() => {
                navigate("/totalQueries", {
                  state: {
                    totalQueries: totalQueries,
                  },
                });
              }}
            >
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 30, fontFamily: "serif" }}
              >
                TOTAL QUERIES
              </div>
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 30, fontFamily: "serif" }}
              >
                {totalQueriesCount}
              </div>
            </div>
          </div>

          <div
            className="col-md-4 my-3"
            id="steps"
            style={{ cursor: "pointer" }}
          >
            <div
              className="shadow px-5 py-2"
              style={{ borderRadius: 20 }}
              onClick={() => {
                navigate("/totalOrders", {
                  state: {
                    totalOrder: rejectedTotalOrder,
                  },
                });
              }}
            >
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 25, fontFamily: "serif" }}
              >
                TOTAL REJECTED ORDER
              </div>
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 25, fontFamily: "serif" }}
              >
                {rejectedTotalOrderCount}
              </div>
            </div>
          </div>

          <div
            className="col-md-4 my-3"
            id="steps"
            style={{ cursor: "pointer" }}
          >
            <div
              className="shadow px-5 py-2"
              onClick={() => {
                navigate("/totalOrders", {
                  state: {
                    totalOrder: reviewingTotalOrder,
                  },
                });
              }}
              style={{ borderRadius: 20 }}
            >
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 30, fontFamily: "serif" }}
              >
                TOTAL REVIEWING
              </div>
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 30, fontFamily: "serif" }}
              >
                {reviewingTotalOrderCount}
              </div>
            </div>
          </div>

          <div
            className="col-md-4 my-3"
            id="steps"
            style={{ cursor: "pointer" }}
          >
            <div
              className="shadow px-5 py-2"
              style={{ borderRadius: 20 }}
              onClick={() => {
                navigate("/totalOrders", {
                  state: {
                    totalOrder: completedTotalOrder,
                  },
                });
              }}
            >
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 25, fontFamily: "serif" }}
              >
                TOTAL COMPLETED ORDER
              </div>
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 25, fontFamily: "serif" }}
              >
                {completedTotalOrderCount}
              </div>
            </div>
          </div>

          <div
            className="col-md-4 my-3"
            id="steps"
            style={{ cursor: "pointer" }}
          >
            <div
              className="shadow px-5 py-2"
              onClick={() => {
                navigate("/totalOrders", {
                  state: {
                    totalOrder: totalRecivedOrder,
                  },
                });
              }}
              style={{ borderRadius: 20 }}
            >
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 25, fontFamily: "serif" }}
              >
                TOTAL RECIEVED ORDER
              </div>
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 25, fontFamily: "serif" }}
              >
                {totalRecivedOrderCount}
              </div>
            </div>
          </div>

          <div
            className="col-md-4 my-3"
            id="steps"
            style={{ cursor: "pointer" }}
          >
            <div
              className="shadow px-5 py-2"
              style={{ borderRadius: 20 }}
              onClick={() => {
                navigate("/totalOrders", {
                  state: {
                    totalOrder: totalInprogressOrder,
                  },
                });
              }}
            >
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 25, fontFamily: "serif" }}
              >
                TOTAL INPROGRESS ORDER
              </div>
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 25, fontFamily: "serif" }}
              >
                {totalInprogressOrderCount}
              </div>
            </div>
          </div>

          <div
            className="col-md-4 my-3"
            id="steps"
            style={{ cursor: "pointer" }}
          >
            <div
              className="shadow px-5 py-2"
              style={{ borderRadius: 20 }}
              onClick={() => {
                navigate("/totalDemoProject", {
                  state: {
                    totalDemo: totalDemo,
                  },
                });
              }}
            >
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 25, fontFamily: "serif" }}
              >
                TOTAL DEMO PROJECTS
              </div>
              <div
                className="text-center"
                id="text"
                style={{ fontSize: 25, fontFamily: "serif" }}
              >
                {totalDemoCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
