import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { setUserData } from "../../Redux/user";
import Auth from "../../Services/Auth";
import Services from "../../Services/Service";

export default function OtpPage() {
  const navigate = useNavigate();

  const location = useLocation();
  const [otp, setotp] = useState("");
  const [sendButton, setsendButton] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setsendButton(true);
    setTimeout(() => {
      setsendButton(false);
    }, 60000);
  }, []);
  const resendOtp = async () => {
    const { userInfo } = location.state;
    setsendButton(true);
    console.log("userInfo", userInfo);
    const resp = await Services.generateOtp({ email: userInfo.email });
    console.log(resp);
  };
  const submitOtp = async () => {
    const { userInfo, from } = location.state;
    const verifyOtpData = {
      email: userInfo.email,
      otp,
    };
    const otpVerify = await Services.verifyOtp(verifyOtpData);
    if (otpVerify.status === "true") {
      if (from === "registerPage") {
        Auth.setUser(userInfo);
        Auth.setUserEmail(userInfo.email);
        Auth.setUserSecret(userInfo);
        dispatch(setUserData(userInfo));
        navigate("/");
      } else if (from === "forgotPassword") {
        navigate("/resetPassword", {
          state: {
            email: userInfo.email,
          },
        });
      }
    } else {
      alert(otpVerify.data);
    }
  };
  const renderButton = () => {
    if (sendButton) {
      return (
        <button
          className="btn btn-outline-success form-control"
          onClick={() => {
            submitOtp();
          }}
        >
          <span
            style={{
              fontFamily: "math",
              fontWight: "bold",
              color: "black",
            }}
          >
            Submit OTP
          </span>
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-outline-secondary form-control"
          onClick={() => {
            resendOtp();
          }}
        >
          <span
            style={{
              fontFamily: "math",
              fontWight: "bold",
              color: "black",
            }}
          >
            Resend OTP
          </span>
        </button>
      );
    }
  };
  return (
    <div>
      <div style={{ marginTop: 100 }}>
        <div className="container">
          <div className="col-md-6 offset-md-3">
            <div
              className="shadow-lg bg-white border"
              style={{ borderRadius: 10, marginTop: 300, opacity: 1 }}
            >
              <div
                className="card-header bg-white text-center"
                style={{
                  color: "black",
                  fontFamily: "serif",
                  borderRadius: "10px 10px 0px 0px",
                  fontSize: 20,
                }}
              >
                Homeiz
              </div>
              <div className="m-3">
                <p style={{ fontSize: 17, fontFamily: "math" }}>
                  Please enter the confirmation code in the verification email
                  that is sent to the address you selected. The confirmation
                  code is valid for 5 minutes.
                </p>

                <p style={{ fontSize: 17, fontFamily: "math" }}>
                  Otp sent to{" "}
                  <span
                    style={{ fontSize: 17, fontFamily: "math", color: "green" }}
                  >
                    {location.state.userInfo.email}
                  </span>
                </p>
                <p
                  className="my-2"
                  style={{ fontSize: 17, fontFamily: "math" }}
                >
                  This confirmation code is only valid for 5 minutes. If you did
                  not request for this code, please contact{" "}
                  <span>
                    <a
                      style={{ color: "red" }}
                      href="mailto:rahuljha3246@gmail.com"
                    >
                      {location.state?.userInfo?.email}
                    </a>
                  </span>
                  .
                </p>
                <div className="form-group my-4">
                  <input
                    type="tel"
                    placeholder="Enter Your Otp"
                    className="form-control"
                    name="name"
                    value={otp}
                    onChange={(e) => setotp(e.target.value)}
                    id="name"
                    maxLength="6"
                    style={{
                      textAlign: "center",
                      fontFamily: "math",
                      fontSize: 30,
                    }}
                  />
                </div>
                <div className="form-group my-4">{renderButton()}</div>
              </div>
              <div
                className="card-footer bg-white"
                style={{ borderRadius: "0px 0px 10px 10px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
