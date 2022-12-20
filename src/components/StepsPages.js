/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../routes/HomePage/home.css";
export default function StepsPages() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div
        className="container-fluid"
        style={{ marginTop: 50, marginBottom: 50 }}
      >
        <div
          className="text-center"
          id="text"
          style={{
            color: "blue",
            // fontWeight: "bold",
            fontFamily: "serif",
            marginBottom: 30,
            fontSize: 30,
          }}
        >
          STEPS TO GET YOUR PROJECTS
        </div>

        <div className=" row">
          <div className="col-md-3">
            <div
              className="shadow bg-white p-4 my-4"
              id="steps"
              style={{ borderRadius: 20, cursor: "pointer", height: "89%" }}
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
                  className="shadow-lg bg-primary rounded-circle p-2"
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
                      fontFamily: "serif",
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
                  fontFamily: "serif",
                }}
              >
                Register with us
              </h3>
              <p
                className="text-center"
                style={{
                  color: "black",
                  // fontWeight: "bold",
                  fontFamily: "serif",
                }}
              >
                Register yourself and add your information about yourself.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="shadow bg-white p-4 my-4"
              id="steps"
              style={{ borderRadius: 20, cursor: "pointer", height: "89%" }}
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
                  className="shadow-lg bg-warning rounded-circle py-2"
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
                      fontFamily: "serif",
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
                  fontFamily: "serif",
                }}
              >
                Connect with developers
              </h3>
              <p
                className="text-center pt-2"
                style={{
                  color: "black",
                  // fontWeight: "bold",
                  fontFamily: "serif",
                }}
              >
                Connect with developers to give idea of your projects and all
                other requirements that you have.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="shadow bg-white p-4 my-4"
              id="steps"
              style={{ borderRadius: 20, cursor: "pointer", height: "89%" }}
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
                  className="shadow-lg bg-danger rounded-circle py-2"
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
                      fontFamily: "serif",
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
                  fontFamily: "serif",
                }}
              >
                Work started
              </h3>
              <p
                className="text-center"
                style={{
                  color: "black",
                  // fontWeight: "bold",
                  fontFamily: "serif",
                }}
              >
                Our developers will work on your project and will remain in
                contact with you.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="shadow bg-white p-4 my-4"
              id="steps"
              style={{ borderRadius: 20, cursor: "pointer", height: "89%" }}
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
                  className="shadow-lg bg-success rounded-circle py-2"
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
                      fontFamily: "serif",
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
                  fontFamily: "serif",
                }}
              >
                Delivered
              </h3>
              <p
                className="text-center"
                style={{
                  color: "black",
                  // fontWeight: "bold",
                  fontFamily: "serif",
                }}
              >
                In last step we will deliver this to you.. and will always will
                be there to help you if any issue arrives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
