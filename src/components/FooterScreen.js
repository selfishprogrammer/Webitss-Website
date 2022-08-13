import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/Images/logo_webitss.png";

export default function FooterScreen() {
  return (
    <div>
      <footer
        class="container-fluid mt-4 py-3 text-light"
        style={{ backgroundColor: "#161e2c" }}
      >
        <div class="container">
          <div class="col-md-6 offset-md-3">
            <div class="d-flex justify-content-center my-2">
              <div class="mx-2" style={{ fontSize: 25 }}>
                <a
                  target="_blank"
                  href="https://www.instagram.com/webitss.in/"
                  class="nav-link"
                  style={{ color: "white" }}
                >
                  <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </div>
              <div class="mx-2" style={{ fontSize: 25 }}>
                <a
                  target="_blank"
                  href="https://www.instagram.com/webitss.in/"
                  class="nav-link"
                  style={{ color: "white" }}
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-4">
            <div className="col-md-3">
              <Link
                className="text-center mb-4"
                to="#"
                style={{
                  color: "black",
                  fontFamily: "serif",
                  fontSize: 18,
                }}
              >
                <span style={{ color: "grey" }}>
                  <b>MAIN MENU</b>
                </span>
              </Link>
              <p className=" mt-4">
                <Link
                  to="/"
                  className="my-1 text-center"
                  style={{
                    color: "black",
                    fontFamily: "serif",
                    fontSize: 15,
                  }}
                >
                  <span style={{ color: "white", textDecoration: "underline" }}>
                    <b>HOME</b>
                  </span>
                </Link>
              </p>
              <p className="">
                <Link
                  to="/about"
                  className="my-1 text-center"
                  style={{
                    color: "black",
                    fontFamily: "serif",
                    fontSize: 15,
                  }}
                >
                  <span style={{ color: "white", textDecoration: "underline" }}>
                    <b>ABOUT US</b>
                  </span>
                </Link>
              </p>
              <p className="">
                <Link
                  to="/contact"
                  className="my-1 text-center"
                  style={{
                    color: "black",
                    fontFamily: "serif",
                    fontSize: 15,
                  }}
                >
                  <span style={{ color: "white", textDecoration: "underline" }}>
                    <b>CONTACT US</b>
                  </span>
                </Link>
              </p>
            </div>
            <div className="col-md-3">
              <Link
                className="text-center mb-4"
                to="#"
                style={{
                  color: "black",
                  fontFamily: "serif",
                  fontSize: 18,
                }}
              >
                <span style={{ color: "grey" }}>
                  <b>SERVICES</b>
                </span>
              </Link>
              <p className=" mt-4">
                <Link
                  to="/"
                  className="my-1 text-center"
                  style={{
                    color: "black",
                    fontFamily: "serif",
                    fontSize: 15,
                  }}
                >
                  <span style={{ color: "white", textDecoration: "underline" }}>
                    <b>WEB DESIGN</b>
                  </span>
                </Link>
              </p>
              <p className="">
                <Link
                  to="/"
                  className="my-1 text-center"
                  style={{
                    color: "black",
                    fontFamily: "serif",
                    fontSize: 15,
                  }}
                >
                  <span style={{ color: "white", textDecoration: "underline" }}>
                    <b>WEB DEVELOPMENT</b>
                  </span>
                </Link>
              </p>
              <p className="">
                <Link
                  to="/"
                  className="my-1 text-center"
                  style={{
                    color: "black",
                    fontFamily: "serif",
                    fontSize: 15,
                  }}
                >
                  <span style={{ color: "white", textDecoration: "underline" }}>
                    <b>APP DEVELOPMENT</b>
                  </span>
                </Link>
              </p>
              <p className="">
                <Link
                  to="/"
                  className="my-1 text-center"
                  style={{
                    color: "black",
                    fontFamily: "serif",
                    fontSize: 15,
                  }}
                >
                  <span style={{ color: "white", textDecoration: "underline" }}>
                    <b>DEKSTOP APPLICATION</b>
                  </span>
                </Link>
              </p>
              <p className="">
                <Link
                  to="/"
                  className="my-1 text-center"
                  style={{
                    color: "black",
                    fontFamily: "serif",
                    fontSize: 15,
                  }}
                >
                  <span style={{ color: "white", textDecoration: "underline" }}>
                    <b>HOSTING</b>
                  </span>
                </Link>
              </p>
            </div>
            <div className="col-md-3">
              <Link
                className="text-center mb-4"
                to="#"
                style={{
                  color: "black",
                  fontFamily: "serif",
                  fontSize: 18,
                }}
              >
                <span style={{ color: "grey" }}>
                  <b>ADDRESS</b>
                </span>
              </Link>
              <div className=" mt-4">
                <h6>KESTOPUR KOLKATA</h6>
                <h6>NEAR D-MARN VILLA , KRISHNAPUR</h6>
                <h6>NEW TOWN</h6>
                <h6>711087</h6>
                <h6>KOLKATA , WEST BENGAL</h6>
              </div>
            </div>{" "}
            <div className="col-md-3">
              <Link
                className="text-center mb-4"
                to="#"
                style={{
                  color: "black",
                  fontFamily: "serif",
                  fontSize: 18,
                }}
              >
                <span style={{ color: "grey" }}>
                  <b>CONTACT US</b>
                </span>
              </Link>
              <div className=" mt-4">
                <h6>786712345</h6>
                <h6>info@webitss.com</h6>
              </div>
            </div>{" "}
            {/* <div>
              <Link
                className="btn btn-default bg-white  mx-2"
                to="/about"
                style={{
                  width: "18rem",
                  color: "black",
                  fontFamily: "serif",
                  fontSize: 18,
                }}
              >
                <i class="fa fa-meh-o" aria-hidden="true"></i>
                <span style={{ color: "#002f34" }}> About Us</span>
              </Link>
            </div> */}
            {/* <Link
              className="btn btn-default bg-white mx-2"
              to="/about"
              style={{
                width: "18rem",
                color: "black",
                fontFamily: "serif",
                fontSize: 18,
              }}
            >
              <i class="fa fa-commenting" aria-hidden="true"></i> Contact Us
            </Link>
            <Link
              className="btn btn-default bg-white mx-2"
              to="/about"
              style={{
                width: "18rem",
                color: "black",
                fontFamily: "serif",
                fontSize: 18,
              }}
            >
              <i class="fa fa-users" aria-hidden="true"></i> Our Teams
            </Link>
            <Link
              className="btn btn-default bg-white mx-2"
              to="/about"
              style={{
                width: "18rem",
                color: "black",
                fontFamily: "serif",
                fontSize: 18,
              }}
            >
              <i class="fa fa-book" aria-hidden="true"></i> Blogs
            </Link>
          </div>
        </div>
        <div className="container">
          <h3
            style={{ color: "white", textAlign: "center", fontFamily: "serif" }}
          >
            Our Projects
          </h3>
          <table class="table table-borderless">
            <tbody>
              <tr>
                <td>
                  <Link
                    className="mx-2 nav-link"
                    to="/about"
                    style={{
                      width: "18rem",
                      color: "white",
                      fontFamily: "serif",
                      fontSize: 18,
                    }}
                  >
                    <span
                      style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                    >
                      MAIN MENU
                    </span>
                  </Link>
                </td>
                <td>
                  <Link
                    className="mx-2 nav-link"
                    to="/about"
                    style={{
                      width: "18rem",
                      color: "white",
                      fontFamily: "serif",
                      fontSize: 18,
                    }}
                  >
                    <span
                      style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                    >
                      SEVICES
                    </span>
                  </Link>
                </td>
                <td>
                  <Link
                    className="mx-2 nav-link"
                    to="/about"
                    style={{
                      width: "18rem",
                      color: "white",
                      fontFamily: "serif",
                      fontSize: 18,
                    }}
                  >
                    <span
                      style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                    >
                      ADDRESS
                    </span>
                  </Link>
                </td>
                <td>
                  <Link
                    className="mx-2 nav-link"
                    to="/about"
                    style={{
                      width: "18rem",
                      color: "white",
                      fontFamily: "serif",
                      fontSize: 18,
                    }}
                  >
                    <span
                      style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                    >
                      CONTACT US
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    className="ml-4 nav-link"
                    to="/about"
                    style={{
                      color: "white",
                      fontFamily: "serif",
                      fontSize: 13,
                    }}
                  >
                    <span
                      style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                    >
                      HOME
                    </span>
                  </Link>
                </td>
                <td>
                  <Link
                    to="/"
                    style={{
                      fontFamily: "serif",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    cricscore
                  </Link>
                </td>
                <td>
                  <Link
                    to="/"
                    style={{
                      fontFamily: "serif",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    GoLive
                  </Link>
                </td>
                <td>
                  <Link
                    to="/"
                    style={{
                      fontFamily: "serif",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    Foodies
                  </Link>
                </td>
                <td>
                  <Link
                    to="/"
                    style={{
                      fontFamily: "serif",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    whatsApp 2.0
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to="/"
                    style={{
                      fontFamily: "serif",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    Society Management System
                  </Link>
                </td>
                <td>
                  <Link
                    to="/"
                    style={{
                      fontFamily: "serif",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    Billing System
                  </Link>
                </td>
                <td>
                  <Link
                    to="/"
                    style={{
                      fontFamily: "serif",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    HikeUp
                  </Link>
                </td>
                <td>
                  <Link
                    to="/"
                    style={{
                      fontFamily: "serif",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    eZTracker
                  </Link>
                </td>
                <td>
                  <Link
                    to="/"
                    style={{
                      fontFamily: "serif",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    webitss
                  </Link>
                </td>
              </tr>
            </tbody>
          </table> */}
          </div>
        </div>
        <hr />

        <hr />
        <p class="mb-0 text-center">© 2021-2022 webitss.com</p>
        <p class="mb-0 text-center">
          <a href="/">Back to top |</a>
          <a href="/privacy-policy">Privacy Policy|</a>
          <a href="/tc">Terms&Conditions</a>
        </p>

        <p></p>
      </footer>
    </div>
  );
}
