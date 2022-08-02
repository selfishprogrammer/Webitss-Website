/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import FooterScreen from "../components/FooterScreen";
import { Covido2, Covido4, covido5 } from "../components/Images";
import Navbar from "../components/Navbar";
import "../routes/HomePage/home.css";
export default function DetailsPage() {
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
            <img className="d-block w-100" src={Covido4} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Covido2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={covido5} alt="Third slide" />
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
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-md-4 my-2">
            <div
              className="shadow-lg p-3 "
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div
              className="shadow-lg p-3"
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
                    Website
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
                    Covido
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
                    Goverment Of India
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
                    RK Roshan
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
                    Team Webitss (Rahul Jha and Team)
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
                    4.5/5
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
              <div
                style={{
                  fontFamily: "monospace",
                  fontWeight: "normal",
                  textAlign: "center",
                  fontSize: 18,
                }}
              >
                COSTS
              </div>
              <div
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                $1500
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div
              className="shadow-lg p-3 "
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
                Details Of Projects/Technology We Used
              </div>
              <div
                className="my-1 p-4"
                style={{
                  fontFamily: "monospace",
                  fontSize: 18,
                  fontWeight: "initial",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
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
                src="https://cdn.mos.cms.futurecdn.net/xY8C5oXg6dCknTCKDfCfTi-1200-80.jpg"
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
                We Are Here To Provide Websites Mobile Applications To New
                Startups in Low Rates And In Limited Time With Free External
                Support.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="shadow-lg bg-white" id="steps2">
              <img
                src="https://www.clipartkey.com/mpngs/m/25-258664_conference-clipart-company-meeting-online-on-demand-home.png"
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
                We Are Here To Provide Websites Mobile Applications To New
                Startups in Low Rates And In Limited Time With Free External
                Support.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterScreen />
    </div>
  );
}
