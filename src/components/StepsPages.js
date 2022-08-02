/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../routes/HomePage/home.css";
export default function StepsPages() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div className="container" style={{ marginTop: 50, marginBottom: 50 }}>
        <h3
          className="text-center"
          style={{
            color: "black",
            fontWeight: "bold",
            fontFamily: "monospace",
            marginBottom: 30,
          }}
        >
          Steps to get you Project
        </h3>

        <div className=" row">
          <div className="col-md-3">
            <div
              className="shadow-lg bg-white p-4 my-4"
              id="steps"
              style={{ borderRadius: 20, cursor: "pointer" }}
            >
              <div className="d-flex justify-content-center">
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_520583.png"
                  width="90"
                  height="90"
                />
              </div>
              <div className="d-flex justify-content-center my-3">
                <div
                  className="shadow-lg rounded-circle p-2"
                  style={{
                    //   borderRadius: 40,
                    backgroundColor: "rgb(83, 185, 210)",
                    width: 40,
                    height: 40,
                  }}
                >
                  <p
                    className="text-center"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "monospace",
                    }}
                  >
                    1
                  </p>
                </div>
              </div>
              <h3
                className="text-center"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                Register with us
              </h3>
              <p
                className="text-center"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                Register Yourself And Add Your information About Yourself
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="shadow-lg bg-white p-4 my-4"
              id="steps"
              style={{ borderRadius: 20, cursor: "pointer" }}
            >
              <div className="d-flex justify-content-center">
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_76872.png"
                  width="90"
                  height="90"
                />
              </div>
              <div className="d-flex justify-content-center mt-3 mb-2">
                <div
                  className="shadow-lg rounded-circle py-2"
                  style={{
                    //   borderRadius: 40,
                    backgroundColor: "rgb(83, 185, 210)",
                    width: 40,
                    height: 40,
                  }}
                >
                  <p
                    className="text-center"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "monospace",
                    }}
                  >
                    2
                  </p>
                </div>
              </div>
              <h3
                className="text-center"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                Connect with developers
              </h3>
              <p
                className="text-center"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                Connect with developers to express your project.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="shadow-lg bg-white p-4 my-4"
              id="steps"
              style={{ borderRadius: 20, cursor: "pointer" }}
            >
              <div className="d-flex justify-content-center">
                <img
                  src="https://www.svgrepo.com/show/123516/code-interface-symbol-of-signs.svg"
                  width="90"
                  height="90"
                />
              </div>
              <div className="d-flex justify-content-center mt-3 mb-3">
                <div
                  className="shadow-lg rounded-circle py-2"
                  style={{
                    //   borderRadius: 40,
                    backgroundColor: "rgb(83, 185, 210)",
                    width: 40,
                    height: 40,
                  }}
                >
                  <p
                    className="text-center"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "monospace",
                    }}
                  >
                    3
                  </p>
                </div>
              </div>
              <h3
                className="text-center"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                Work Started
              </h3>
              <p
                className="text-center"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                Our Developers Will Work On Your Project and Will Remain in
                Contact With You.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="shadow-lg bg-white p-4 my-4"
              id="steps"
              style={{ borderRadius: 20, cursor: "pointer" }}
            >
              <div className="d-flex justify-content-center">
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_453163.png"
                  width="90"
                  height="90"
                />
              </div>
              <div className="d-flex justify-content-center mt-3 mb-3">
                <div
                  className="shadow-lg rounded-circle py-2"
                  style={{
                    //   borderRadius: 40,
                    backgroundColor: "rgb(83, 185, 210)",
                    width: 40,
                    height: 40,
                  }}
                >
                  <p
                    className="text-center"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "monospace",
                    }}
                  >
                    4
                  </p>
                </div>
              </div>
              <h3
                className="text-center"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                Delivered
              </h3>
              <p
                className="text-center"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                In Last Step We Will Deliver This To You.. and will always will
                be there to help you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
