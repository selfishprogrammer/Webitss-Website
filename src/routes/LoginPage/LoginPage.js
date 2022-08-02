import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../LoginPage/login.css";
import { useNavigate } from "react-router";
import Services from "../../Services/Service";
import Auth from "../../Services/Auth";
import { setLogin, setUserData } from "../../Redux/user";
import ErrorToast from "../../components/ErrorToast";
import ErrorText from "../../components/ErrorText";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [emailHasError, setemailHasError] = useState("");
  const [password, setpassword] = useState("");
  const [passwordHasError, setpasswordHasError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [backendResponce, setbackendResponce] = useState("");
  const navigate = useNavigate();
  const resetErrorField = () => {
    setemailHasError("");
    setpasswordHasError("");
  };
  const resetInputField = () => {
    setemail("");
    setpassword("");
  };

  const login = async () => {
    resetErrorField();
    var emailReg =
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}/g;
    if (email.length <= 0) {
      setemailHasError("Field Cannot Be Empty!");
    }
    if (password.length <= 0) {
      setpasswordHasError("Field Cannot Be Empty!");
    } else {
      if (!emailReg.test(email)) {
        setemailHasError("Please Enter Valid Email Address");
      } else if (!passwordReg.test(password)) {
        setpasswordHasError(
          "Pasword Should Be 8 Digit one Special Character one Capital  and one Small Letter Must Present"
        );
      } else {
        resetInputField();
        setisLoading(true);
        const userData = {
          email,
          password,
        };
        setisLoading(true);
        const userLoginData = await Services.userLogin(userData);
        if (userLoginData.status === "true") {
          const loginData = {
            name: userLoginData?.name,
            email: userLoginData?.email,
            phone: userLoginData?.phone,
            categories: userLoginData?.categories,
            user_id: userLoginData?.user_id,
          };
          Auth.setUser(loginData);
          Auth.setUserEmail(loginData.email);
          dispatch(setUserData(loginData));
          dispatch(setLogin(true));
          const user = await Auth.getUser();
          if (user.categories === "admin") {
            navigate("/admin");
          } else if (user.categories === "owner") {
            navigate("/owner");
          } else {
            navigate("/");
          }
          setisLoading(false);
        } else if (userLoginData.status === "notVerified") {
          setbackendResponce(userLoginData?.data);
          const registerData = {
            name: userLoginData?.name,
            email: userLoginData?.email,
            phone: userLoginData?.phone,
            categories: userLoginData?.categories,
            user_id: userLoginData?.user_id,
          };
          setTimeout(async () => {
            const resp = await Services.generateOtp({
              email: userLoginData?.email,
            });
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
          }, 4000);
        } else {
          setbackendResponce(userLoginData.data);
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
          style={{ borderRadius: 10, marginTop: 100, padding: 30 }}
        >
          <div className=" d-flex justify-content-center">
            <img
              src="https://webitss.com/static/media/logo_webitss.4b5c4c13ae62557fe69d.png"
              height="80"
              width="80"
              className="rounded-circle mb-3"
              alt=""
              srcset=""
            />
          </div>
          <h3 className="text-center my-1" id="title">
            LOGIN
          </h3>
          <ErrorToast backendResponce={backendResponce} />
          <div className="p-3">
            <div className="form-group my-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="form-control"
                placeholder="Email....."
                style={{ borderRadius: 20 }}
              />
              <ErrorText errorMsg={emailHasError} />
            </div>
            <div className="form-group my-4">
              <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Password....."
                style={{ borderRadius: 20 }}
              />
              <ErrorText errorMsg={passwordHasError} />
            </div>
            <div className="form-group my-4">
              <button
                disabled={isLoading}
                className="btn btn-primary form-control"
                style={{
                  borderWidth: 0,
                  fontFamily: "sans-serif",
                  fontWeight: "700",
                  borderRadius: 20,
                }}
                onClick={login}
              >
                {isLoading ? "Loading....." : "Login"}
              </button>
            </div>
            <div className="d-flex justify-content-between">
              <Link
                id="title"
                to="/register"
                className="nav-link"
                style={{
                  color: "black",
                  fontSize: 15,
                  textDecoration: "underline",
                }}
              >
                New to webitss?
              </Link>
              <Link
                id="title"
                to="/forgotPassword"
                className="nav-link"
                style={{
                  color: "black",
                  fontSize: 15,
                  textDecoration: "underline",
                }}
              >
                Forget Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
