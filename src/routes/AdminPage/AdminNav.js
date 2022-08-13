import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setLogin, setUserData } from "../../Redux/user";
import Auth from "../../Services/Auth";

export default function AdminNav() {
  const { isLogin } = useSelector((state) => state.user);
  console.log("isLogin", isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setLogin(false));
    dispatch(setUserData(null));
    Auth.setUser(null);
    Auth.setUserEmail(null);
    Auth.setUserSecret(null);
    navigate("/login");
  };
  return (
    <>
      <div className="sticky-top">
        <nav className=" navbar navbar-expand-lg navbar-light bg-white shadow-sm">
          <Link className="navbar-brand d-flex align-middle" to="/">
            <img
              src="https://webitss.com/static/media/logo_webitss.4b5c4c13ae62557fe69d.png"
              height="50"
              width="50"
              className="rounded-circle"
              alt=""
              srcset=""
            />
            <span
              className=" pt-2 pl-2"
              style={{
                fontFamily: "cursive",
                fontSize: 20,
                color: "blue",
                msAlignSelf: "center",
                justifySelf: "center",
                flexDirection: "row",
              }}
            >
              <b>WEBITSS</b>
            </span>
          </Link>
          <div className="nav-link ml-auto d-flex justify-content-between">
            <div className="nav-item ">
              <Link
                className="nav-link"
                style={{ color: "black" }}
                data-toggle="tooltip"
                to="/"
                data-placement="bottom"
                title="Home"
              >
                <HomeIcon />
              </Link>
            </div>
            {isLogin ? (
              <div className="nav-item">
                <button
                  onClick={logout}
                  className="nav-link"
                  style={{
                    color: "red",
                    borderWidth: 0,
                    backgroundColor: "#fff",
                  }}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Logout"
                >
                  <AccountCircleOutlinedIcon />
                </button>
              </div>
            ) : (
              <div className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: "black" }}
                  to="/login"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Register/Login"
                >
                  <AccountCircleOutlinedIcon />
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
