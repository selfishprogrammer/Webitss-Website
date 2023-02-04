/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../routes/HomePage/home.css";
import { step,groth } from "./Images";
export default function StepsPages() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* <div
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
      </div> */}
      <div class='container pt-3'>
        <div class='row'>
          <div class='col-lg-12'>
            <div class='section-header text-center' style={{fontWeight:"900", color:"steelblue"}}>
              <h2>GROWTH YOUR BUSSINESS</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid p-3">
        <div class="row ">
          <div class="col-md-6">
            {/* <p> */}
            Both versions convey a topic; it’s pretty easy to predict that 
            the paragraph will be about epidemiological evidence, but only the second version establishes 
            an argumentative point and puts it in context. The paragraph doesn’t just describe the epidemiological evidence; 
            it shows how epidemiology is telling the same story as etiology. Similarly, 
            while Version A doesn’t relate to anything in particular, Version B immediately suggests that 
            the prior paragraph addresses the biological pathway (i.e. etiology) of a disease and that the 
            new paragraph will bolster the emerging hypothesis with a different kind of evidence. As a reader, 
            it’s easy to keep track of how the paragraph about cells and chemicals and such relates to the paragraph about 
            populations in different places.<br></br>
            {/* </p> */}
            Knowing this convention of academic writing can help you both read and write more effectively. When you’re reading a complicated academic piece for the first time, you might want to go through reading only the first sentence or two of each paragraph to get the overall outline of the argument. Then you can go back and read all of it with a clearer picture of how each of the details fit in. And when you’re writing, you may also find it useful to write the first sentence of each paragraph (instead of a topic-based outline) to map out a thorough argument before getting immersed in sentence-level wordsmithing.
          </div>
              <div class="col-md-6">
                <div class="text-center">
              <img src={groth} width='60%' height='100%' class="img-fluid" alt="" />
              </div>
            </div> 
        </div>
      </div>
    </div>
  );
}
