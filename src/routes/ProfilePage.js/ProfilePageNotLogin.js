import React from "react";
import { Link } from "react-router-dom";

export default function ProfilePageNotLogin() {
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
          id="text"
          className="text-center"
          style={{ fontSize: 30, fontFamily: "monospace", fontWeight: "bold" }}
        >
          {" Login to see your order history!".toLocaleUpperCase()}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div
          className="text-center"
          style={{ fontSize: 30, fontFamily: "monospace", fontWeight: "bold" }}
        >
          <Link
            to="/login"
            className="btn btn-info form-control nav-link my-4"
            style={{ height: 40 }}
          >
            Login/Signup
          </Link>
        </div>
      </div>
    </>
  );
}
