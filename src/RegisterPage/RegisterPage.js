import { Alert, AlertTitle } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ErrorText from "../components/ErrorText";
import ErrorToast from "../components/ErrorToast";
import { setUserData } from "../Redux/user";
import "../RegisterPage/register.css";
import Auth from "../Services/Auth";
import Services from "../Services/Service";
import { useNavigate } from "react-router";
import { logo } from "../components/Images";
export default function RegisterPage() {
  const [name, setname] = useState("");
  const [nameHasError, setnameHasError] = useState("");
  const [email, setemail] = useState("");
  const [emailHasError, setemailHasError] = useState("");
  const [phone, setphone] = useState("");
  const [phoneHasError, setphoneHasError] = useState("");
  const [password, setpassword] = useState("");
  const [passwordHasError, setpasswordHasError] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [cpasswordHasError, setcpasswordHasError] = useState("");
  const [backendResponce, setbackendResponce] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resetErrorField = () => {
    setnameHasError("");
    setemailHasError("");
    setphoneHasError("");
    setpasswordHasError("");
    setcpasswordHasError("");
    setbackendResponce("");
  };

  const resetInputField = () => {
    setname("");
    setemail("");
    setphone("");
    setpassword("");
    setcpassword("");
  };
  const register = async () => {
    resetErrorField();
    // resetInputField();
    var emailReg =
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}/g;
    console.log(name, email, phone, password, cpassword);
    if (name.length <= 0) {
      setnameHasError("Field Cannot Be Empty!");
    }
    if (email.length <= 0) {
      setemailHasError("Field Cannot Be Empty!");
    }
    if (phone.length <= 0) {
      setphoneHasError("Field Cannot Be Empty!");
    }
    if (password.length <= 0) {
      setpasswordHasError("Field Cannot Be Empty!");
    }
    if (cpassword.length <= 0) {
      setcpasswordHasError("Field Cannot Be Empty!");
    } else {
      if (name.length <= 6 || name.length >= 15) {
        setnameHasError("Length Of Name Should Between 6 to 15 Character!");
      } else if (!emailReg.test(email)) {
        setemailHasError("Please Enter Valid Email Address");
      } else if (phone.length < 10 || phone.length > 10) {
        setphoneHasError("Phone Number Must be Between 10 Digit");
      } else if (!passwordReg.test(password)) {
        setpasswordHasError(
          "Pasword Should Be 8 Digit one Special Character one Capital  and one Small Letter Must Present"
        );
      } else if (password !== cpassword) {
        setcpasswordHasError("Password Did not Match");
      } else {
        setisLoading(true);
        const registerData = {
          name,
          email,
          phone,
          password,
          categories: "users",
        };
        console.log("users===>>>", registerData);
        const responce = await Services.userRegister(registerData);
        console.log("registerData", responce);
        if (responce?.status === "true") {
          const resp = await Services.generateOtp({ email: email });
          if (resp.status === undefined) {
            navigate("/otp", {
              state: {
                from: "registerPage",
                userInfo: registerData,
              },
              replace: true,
            });
            setisLoading(false);
          } else {
            setbackendResponce(resp?.data);
            setisLoading(false);
          }
        } else {
          setbackendResponce(responce?.data);
          setisLoading(false);
        }
      }
    }
  };
  return (
    <div className="bg-white">
      <div className="col-md-4 offset-md-4">
        <div
          className="shadow-lg bg-white"
          style={{
            borderRadius: 10,
            marginTop: 170,
            padding: 30,
          }}
        >
          <div className=" d-flex justify-content-center">
            <img
              src={logo}
              height="80"
              width="80"
              className="rounded-circle mb-3"
              alt=""
              srcset=""
            />
          </div>
          <ErrorToast backendResponce={backendResponce} />
          <h3 className="text-center my-1" id="title">
            REGISTER
          </h3>
          <div className="p-3">
            <div className="form-group my-4">
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Name"
                style={{ borderRadius: 20 }}
              />
              <ErrorText errorMsg={nameHasError} />
            </div>
            <div className="form-group my-4">
              <input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Email"
                style={{ borderRadius: 20 }}
              />
              <ErrorText errorMsg={emailHasError} />
            </div>
            <div className="form-group my-4">
              <input
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                type="number"
                className="form-control"
                placeholder="Phone"
                style={{ borderRadius: 20 }}
              />
              <ErrorText errorMsg={phoneHasError} />
            </div>
            <div className="form-group my-4">
              <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Password"
                style={{ borderRadius: 20 }}
              />
              <ErrorText errorMsg={passwordHasError} />
            </div>
            <div className="form-group my-4">
              <input
                value={cpassword}
                onChange={(e) => setcpassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                style={{ borderRadius: 20 }}
              />
              <ErrorText errorMsg={cpasswordHasError} />
            </div>
            <div className="form-group my-4">
              <button
                disabled={isLoading}
                onClick={() => register()}
                className="btn btn-primary form-control"
                style={{
                  borderWidth: 0,
                  fontFamily: "sans-serif",
                  fontWeight: "700",
                  borderRadius: 20,
                }}
              >
                {isLoading ? "Loading...." : "Register"}
              </button>
            </div>
            <div className="d-flex justify-content-between">
              <Link
                id="title"
                to="/login"
                className="nav-link"
                style={{
                  color: "black",
                  fontSize: 15,
                  textDecoration: "underline",
                }}
              >
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
