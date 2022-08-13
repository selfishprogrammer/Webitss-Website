import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Auth from "../../Services/Auth";
import Services from "../../Services/Service";
import moment from "moment";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import SuccessModal from "../../components/SuccessModal";
export default function ProfilePage() {
  const [orders, setorders] = useState([]);
  const [rating, setrating] = useState("");
  const [client_review, setclient_review] = useState("");
  const [client, setclient] = useState("");
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    getUsersDetails();
    getOrderHistory();
  }, []);
  const getUsersDetails = async () => {
    const data = await Auth.getUser();
    setclient(data?.name);
  };
  console.log("rating", rating);
  const submitReview = async (item) => {
    const reviewData = {
      order_id: item?.order_id,
      categories: item?.order,
      name: item?.orderType,
      details: item?.details_of_order,
      developer: item?.developer,
      developer_review: "",
      client_review,
      client,
      image_1: "",
      image_2: "",
      image_3: "",
      image_4: "",
      status: "completed",
      requirement: "",
      rating,
      costs: item?.price,
      date_of_start: "",
      date_of_end: "",
    };
    console.log("reviewDetails", reviewData);
    const review = await Services.reviewDetails(reviewData);
    if (review?.status === "true") {
      getOrderHistory();
      setisVisible(true);
      setTimeout(() => {
        setisVisible(false);
      }, 3000);
    } else {
      alert(review?.data);
    }
  };
  const getOrderHistory = async () => {
    const userEmail = await Auth.getUserEmail();
    console.log("email===>", userEmail);
    const data = await Services.orderHistory({ user_id: userEmail });
    if (data?.status === "true") {
      setorders(data?.records);
      console.log("orders", data?.records);
    }
    console.log("orders", orders);
  };
  const renderCost = (item) => {
    if (item?.price === "") {
      return;
    }
    return (
      <div className="shadow p-3 my-3 bg-white" style={{ borderRadius: 10 }}>
        <div className="d-flex justify-content-between">
          <div style={{ fontFamily: "monospace", fontWeight: "bold" }}>
            Cost :${item?.price}
          </div>
          <div style={{ fontFamily: "monospace", fontWeight: "bold" }}>
            Advance :${item?.advance_payment}
          </div>
          <div style={{ fontFamily: "monospace", fontWeight: "bold" }}>
            Due :${item?.due_payment}
          </div>
        </div>
      </div>
    );
  };
  const renderStatus = (item) => {
    if (item.status === "received") {
      return (
        <div className="d-flex justify-content-between">
          <div
            className="border p-2 mt-1 mx-2"
            style={{
              borderRadius: 10,
              width: 1,
              height: 1,
              backgroundColor: "blue",
              // alignSelf: "center",
            }}
          ></div>
          <p
            style={{
              fontFamily: "monospace",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Status:{item.status}
          </p>
        </div>
      );
    } else if (item.status === "reviewing") {
      return (
        <div className="d-flex justify-content-between">
          <div
            className="border p-2 mt-1 mx-2"
            style={{
              borderRadius: 10,
              width: 1,
              height: 1,
              backgroundColor: "yellow",
              // alignSelf: "center",
            }}
          ></div>
          <p
            style={{
              fontFamily: "monospace",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Status:{item.status}
          </p>
        </div>
      );
    } else if (item.status === "inprogress") {
      return (
        <div className="d-flex justify-content-between">
          <div
            className="border p-2 mt-1 mx-2"
            style={{
              borderRadius: 10,
              width: 1,
              height: 1,
              backgroundColor: "yellowgreen",
              // alignSelf: "center",
            }}
          ></div>
          <p
            style={{
              fontFamily: "monospace",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Status:{item.status}
          </p>
        </div>
      );
    } else if (item.status === "completed") {
      return (
        <div className="d-flex justify-content-between">
          <div
            className="border p-2 mt-1 mx-2"
            style={{
              borderRadius: 10,
              width: 1,
              height: 1,
              backgroundColor: "green",
              // alignSelf: "center",
            }}
          ></div>
          <p
            style={{
              fontFamily: "monospace",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Status:{item.status}
          </p>
        </div>
      );
    } else if (item.status === "rejected") {
      return (
        <div className="d-flex justify-content-between">
          <div
            className="border p-2 mt-1 mx-2"
            style={{
              borderRadius: 10,
              width: 1,
              height: 1,
              backgroundColor: "red",
              // alignSelf: "center",
            }}
          ></div>
          <p
            style={{
              fontFamily: "monospace",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Status:{item.status}
          </p>
        </div>
      );
    }
  };
  const renderReview = (item) => {
    if (item.rated === "" && item.status === "completed") {
      return (
        <>
          <div
            className="shadow bg-white px-5 py-2"
            style={{ borderRadius: 10 }}
          >
            <p
              className="text-center"
              style={{ fontFamily: "serif", fontSize: 20 }}
            >
              Rate our service :)
            </p>
            <div className="d-flex justify-content-center">
              <ReactStars
                count={5}
                onChange={(e) => setrating(e)}
                size="50"
                activeColor="#ffd700"
              />
            </div>
            <p
              className="text-center py-2"
              style={{ fontFamily: "serif", fontSize: 20 }}
            >
              Add Your Review :)
            </p>
            <textarea
              className="form-control shadow p-4 my-3"
              style={{
                width: "100%",
                height: 100,
                borderRadius: 20,
                fontFamily: "serif",
                fontWeight: "bold",
              }}
              value={client_review}
              onChange={(e) => setclient_review(e.target.value)}
              placeholder="Add Your Review"
            ></textarea>

            <div className="d-flex justify-content-center">
              <button
                className="btn btn-success form-control"
                onClick={() => submitReview(item)}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </>
      );
    }
  };
  const renderOrderItem = () => {
    return (
      <>
        <div
          id="text"
          className="text-center my-5"
          style={{ fontSize: 30, fontFamily: "monospace", fontWeight: "bold" }}
        >
          {"Your Order history".toLocaleUpperCase()}
        </div>
        {orders.map((item, key) => (
          <div
            className="shadow-lg  bg-warning my-2 px-3 pt-3"
            // id="steps"
            style={{ borderRadius: 15 }}
          >
            <div className="d-flex justify-content-between">
              <p style={{ fontFamily: "monospace", fontWeight: "bold" }}>
                Order No. :#{item.order_id}
              </p>
              {renderStatus(item)}
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <div style={{ fontFamily: "monospace", fontWeight: "bold" }}>
                  Order
                </div>
                <div style={{ fontFamily: "monospace", fontWeight: "normal" }}>
                  {item.order}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "monospace", fontWeight: "bold" }}>
                  Order Type
                </div>
                <div style={{ fontFamily: "monospace", fontWeight: "normal" }}>
                  {item.orderType}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <div style={{ fontFamily: "monospace", fontWeight: "bold" }}>
                  Developer
                </div>
                <div style={{ fontFamily: "monospace", fontWeight: "normal" }}>
                  {item.developer === "" ? "Not Assigned Yet" : item.developer}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "monospace", fontWeight: "bold" }}>
                  Phone
                </div>
                <div style={{ fontFamily: "monospace", fontWeight: "normal" }}>
                  {item.phone}
                </div>
              </div>
            </div>

            <div>
              <div
                className="pt-3"
                style={{
                  fontFamily: "monospace",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Details Of Project
              </div>
              <div
                className="py-3"
                style={{
                  fontFamily: "serif",
                  fontWeight: "normal",
                  textAlign: "center",
                }}
              >
                {item.details_of_order}
              </div>
            </div>

            {renderCost(item)}

            <p
              className="text-center pb-2"
              style={{ fontFamily: "monospace", fontWeight: "normal" }}
            >
              Ordered: {moment(item.date).format("DD-MMM-YYYY LT")}
            </p>

            <div className="m-3">{renderReview(item)}</div>
          </div>
        ))}
      </>
    );
  };

  const noRecord = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 200,
          }}
        >
          <div
            className="text-center"
            id="text"
            style={{
              fontSize: 30,
              fontFamily: "serif",
              fontWeight: "bold",
            }}
          >
            {"No order history ! Order Project to see your order Here".toLocaleUpperCase()}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div
            className="text-center"
            style={{
              fontSize: 30,
              fontFamily: "monospace",
              fontWeight: "bold",
            }}
          >
            <Link
              to="/order"
              className="btn btn-success form-control nav-link my-4"
              style={{ height: 40 }}
            >
              Order Projects
            </Link>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <SuccessModal
          IsVisible={isVisible}
          title="Thankyou for your rating! we will try our best to serve you good services"
        />
        <div className="col-md-6 offset-md-3">
          {orders.length > 0 ? renderOrderItem() : noRecord()}
        </div>
      </div>
    </div>
  );
}
