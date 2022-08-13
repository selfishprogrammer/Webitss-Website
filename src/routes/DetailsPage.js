/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import FooterScreen from "../components/FooterScreen";
import { Covido2, Covido4, covido5 } from "../components/Images";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router";
import "../routes/HomePage/home.css";
import { base_url } from "../constants/Urls";
export default function DetailsPage() {
  const location = useLocation();
  const { projects } = location.state;
  return (
    <div>
      <Navbar />
      <div
        // style={{ borderRadius: 20 }}
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={`${base_url}Components/Uploads/${projects?.image_1}`}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={`${base_url}Components/Uploads/${projects?.image_2}`}
              alt="Second slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div style={{ textAlign: "center", fontSize: 23, fontFamily: "initial" }}>
        <b>Details Of Projects</b>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6 my-2">
            <div
              className="shadow-lg bg-warning p-3 "
              id="steps2"
              style={{ borderRadius: 20, width: "100%", minHeight: 290 }}
            >
              <div
                style={{
                  fontSize: 20,
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Requirements From Clients
              </div>
              <div
                className="my-1 p-4"
                style={{
                  fontFamily: "monospace",
                  fontSize: 18,
                  fontWeight: "initial",
                }}
              >
                {projects?.details}
              </div>
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div
              className="shadow-lg bg-warning p-3"
              id="steps2"
              style={{ borderRadius: 20, width: "100%" }}
            >
              <div
                style={{
                  fontSize: 20,
                  fontFamily: "monospace",
                  fontWeight: "bold",
                }}
              >
                Project Info
              </div>
              <div className="d-flex justify-content-between my-2">
                <div className="">
                  <div style={{ fontFamily: "monospace", textAlign: "end" }}>
                    Project Type
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontWeight: "bold",
                      textAlign: "start",
                    }}
                  >
                    {projects?.categories}
                  </div>
                </div>
                <div className="">
                  <div style={{ fontFamily: "monospace", textAlign: "end" }}>
                    Project Name
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontWeight: "bold",
                      textAlign: "end",
                    }}
                  >
                    {projects?.name}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between my-2">
                <div className="" style={{ alignContent: "center" }}>
                  <div style={{ fontFamily: "monospace", textAlign: "end" }}>
                    Project Owner Company
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      textAlign: "start",
                      fontWeight: "bold",
                    }}
                  >
                    {projects?.client}
                  </div>
                </div>
                <div className="">
                  <div style={{ fontFamily: "monospace", textAlign: "end" }}>
                    Project Workers Company
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontWeight: "bold",
                      textAlign: "end",
                    }}
                  >
                    Webitss Infotech
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between my-2">
                <div className="" style={{ alignContent: "center" }}>
                  <div style={{ fontFamily: "monospace", textAlign: "end" }}>
                    Client Name
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      textAlign: "start",
                      fontWeight: "bold",
                    }}
                  >
                    {projects?.client}
                  </div>
                </div>
                <div className="">
                  <div style={{ fontFamily: "monospace", textAlign: "end" }}>
                    Developers
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontWeight: "bold",
                      textAlign: "end",
                    }}
                  >
                    {projects?.developer}
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between my-2">
                <div className="" style={{ alignContent: "center" }}>
                  <div style={{ fontFamily: "monospace", textAlign: "end" }}>
                    Rating by Client
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      textAlign: "start",
                      fontWeight: "bold",
                    }}
                  >
                    {projects?.rating}/5
                  </div>
                </div>
                <div className="">
                  <div style={{ fontFamily: "monospace", textAlign: "end" }}>
                    Status
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontWeight: "bold",
                      textAlign: "end",
                    }}
                  >
                    Completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="shadow-lg bg-white" id="steps2">
              <img
                src={`${base_url}Components/Uploads/${projects?.image_4}`}
                width="100%"
                height="300px"
              />
              <h4
                class="py-3"
                style={{
                  fontFamily: "monospace",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Client Review
              </h4>
              <p
                class="text-center px-4 pt-2 pb-5"
                style={{
                  fontFamily: "monospace",
                  textAlign: "center",
                  // fontWeight: "bold",
                }}
              >
                {projects?.client_review}
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="shadow-lg bg-white" id="steps2">
              <img
                src={`${base_url}Components/Uploads/${projects?.image_3}`}
                width="100%"
                height="300px"
              />
              <h4
                class="py-3"
                style={{
                  fontFamily: "monospace",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Developers Review
              </h4>
              <p
                class="text-center px-4 pt-2 pb-5"
                style={{
                  fontFamily: "monospace",
                  textAlign: "center",
                  // fontWeight: "bold",
                }}
              >
                {projects?.developer_review}
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterScreen />
    </div>
  );
}
