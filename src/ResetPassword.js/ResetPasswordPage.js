import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import ErrorToast from "../components/ErrorToast";
import ErrorText from "../components/ErrorText";
import Services from "../Services/Service";
import { logo } from "../components/Images";

export default function ResetPasswordPage() {
  const [password, setpassword] = useState("");
  const [passwordHasError, setpasswordHasError] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [cpasswordHasError, setcpasswordHasError] = useState("");
  const [backendResponce, setbackendResponce] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const resetErrorField = () => {
    setpasswordHasError("");
    setcpasswordHasError("");
    setbackendResponce("");
  };
  const resetInputField = () => {
    setpassword("");
    setcpassword("");
  };
  const resetPassword = async () => {
    resetErrorField();
    var passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}/g;
    if (password.length <= 0) {
      setpasswordHasError("Field Cannot Be Empty!");
    }
    if (cpassword.length <= 0) {
      setcpasswordHasError("Field Cannot Be Empty!");
    } else {
      if (!passwordReg.test(password)) {
        setpasswordHasError(
          "Pasword Should Be 8 Digit one Special Character one Capital  and one Small Letter Must Present"
        );
      } else if (password !== cpassword) {
        setcpasswordHasError("Password Did not Match");
      } else {
        setisLoading(true);
        const { email } = location.state;
        const newPassword = {
          email,
          password,
        };
        const changePassword = await Services.resetPassword(newPassword);
        if (changePassword.status === "true") {
          alert(changePassword.data);
          setTimeout(() => {
            navigate("/login", { replace: true });
          }, 2000);
        } else {
          setbackendResponce(changePassword.data);
        }
        setisLoading(false);
      }
    }
    resetInputField();
  };
  return (
    <div>
      <div className="col-md-4 offset-md-4 " style={{ paddingTop: 130 }}>
        <div
          className="shadow-lg  border"
          style={{ borderRadius: 10, opacity: 1 }}
        >
          <ErrorToast backendResponce={backendResponce} />
          <div className="d-flex justify-content-center py-4">
            <Link to="/">
              <img
                src={logo}
                style={{
                  width: 80,
                  height: 80,
                }}
              />
            </Link>
          </div>
          <h3 className="text-center my-4" id="title">
            RESEST PASSWORD
          </h3>
          <div className="text-center" style={{ marginRight: 138 }}>
            {/* {" "} */}
            {/* <BounceLoader
            loading={isLoading}
            color="yellowgreen"
            size={140}
          /> */}
          </div>
          <div className="container my-1">
            <div className="form-group my-3">
              <input
                type="text"
                placeholder="New Password"
                className="form-control"
                name="password"
                value={password}
                style={{ borderRadius: 20 }}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                id="password"
              />
              <ErrorText errorMsg={passwordHasError} />
            </div>
            <div className="form-group my-3">
              <input
                type="password"
                placeholder="Conform New Password"
                className="form-control"
                name="cpassword"
                value={cpassword}
                style={{ borderRadius: 20 }}
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
                id="cpassword"
              />
              <ErrorText errorMsg={cpasswordHasError} />
            </div>
            <div className="form-group mb-5 mt-2">
              <button
                disabled={isLoading}
                className="btn btn-primary form-control"
                style={{
                  fontSize: 20,
                  fontFamily: "initial",
                  borderRadius: 20,
                }}
                onClick={resetPassword}
              >
                {isLoading ? "Loading..." : "Reset"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
