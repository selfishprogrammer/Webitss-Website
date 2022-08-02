/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Navbar from "../../components/Navbar";

export default function () {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            fontFamily: "monospace",
            marginTop: 15,
            marginBottom: 180,
          }}
        >
          Contact Us
        </h1>
        <div className="m-5">
          <div className="form-group">
            <input
              style={{ borderRadius: 20 }}
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <input
              style={{ borderRadius: 20 }}
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <input
              style={{ borderRadius: 20 }}
              className="form-control"
              placeholder="Your Phone"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Your Queries"
              style={{ width: "100%", height: 200, borderRadius: 30 }}
            ></textarea>
          </div>
          <div className="form-group">
            <button
              className="btn btn-warning form-control"
              style={{ borderRadius: 20, fontFamily: "monospace" }}
            >
              <b>Contact us</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
