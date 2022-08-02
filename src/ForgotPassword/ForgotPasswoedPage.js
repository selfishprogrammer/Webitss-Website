/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorText from "../components/ErrorText";
import ErrorToast from "../components/ErrorToast";
import { logo } from "../components/Images";
import Services from "../Services/Service";

export default function ForgotPasswoedPage() {
  const [email, setemail] = useState("");
  const [emailHasError, setemailHasError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [backendResponce, setbackendResponce] = useState("");
  const navigate = useNavigate();
  const resetInputField = () => {
    setemail("");
  };
  const resetErrorField = () => {
    setemailHasError("");
  };
  const editPassword = async () => {
    resetErrorField();
    var emailReg =
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (email.length <= 0) {
      setemailHasError("Field Cannot Be Empty!");
    } else if (!emailReg.test(email)) {
      setemailHasError("Please Enter Valid Email Address");
    } else {
      resetInputField();
      setisLoading(true);

      const verifyEmail = await Services.forgotPassword({ email });
      if (verifyEmail.status === "true") {
        const resp = await Services.generateOtp({ email });
        // console.log("responce==================>", registerData);
        console.log("responce======>", resp.status);
        if (resp.status === undefined) {
          const userEmail = {
            email,
          };
          navigate("/otp", {
            state: {
              from: "forgotPassword",
              userInfo: userEmail,
            },
            replace: true,
          });
        } else {
          alert(resp.data);
        }
      } else {
        setbackendResponce(verifyEmail.data);
      }
      setisLoading(false);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="col-md-6 offset-md-3" style={{ paddingTop: 150 }}>
          <div
            className="shadow-lg border"
            style={{ borderRadius: 10, opacity: 1 }}
          >
            <div className="d-flex justify-content-center p-4">
              <Link to="/">
                <img
                  src="https://webitss.com/static/media/logo_webitss.4b5c4c13ae62557fe69d.png"
                  style={{
                    width: 80,
                    height: 80,
                  }}
                />
              </Link>
            </div>
            <ErrorToast backendResponce={backendResponce} />
            <h3 className="text-center my-1" id="title">
              FORGET PASSWORD
            </h3>
            <div className="container my-4 px-4">
              <p style={{ fontSize: 15, fontFamily: "serif", color: "black" }}>
                <i
                  class="fa fa-info-circle"
                  aria-hidden="true"
                  style={{ color: "black" }}
                ></i>
                &nbsp; We will send you a verification on register email
                address.You have to verify your email to reset your password.
              </p>
              <div className="form-group my-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-control"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  style={{ borderRadius: 20 }}
                />
                <ErrorText errorMsg={emailHasError} />
              </div>
              <div className="form-group my-2">
                <button
                  disabled={isLoading}
                  className="btn btn-primary form-control"
                  style={{
                    fontSize: 20,
                    fontFamily: "initial",
                    borderRadius: 20,
                  }}
                  //   onClick={() => editPassword()}
                  onClick={editPassword}
                >
                  {isLoading ? "Loading...." : "Save"}
                </button>
              </div>
              <div className="d-flex justify-content-center my-2">
                <Link
                  to="/login"
                  className="mx-2 nav-link"
                  style={{
                    fontSize: 15,
                    fontFamily: "initial",
                    color: "black",
                  }}
                >
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
