import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setUserData } from "../Redux/user";
import Auth from "../Services/Auth";
import { useNavigate } from "react-router";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { newLogo } from "./Images";
export default function Navbar() {
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
      {/* <div className="sticky-top">
        <nav className=" navbar navbar-expand-lg navbar-light bg-white shadow-sm">
          <Link className="navbar-brand d-flex align-middle" to="/">
            <img
              src={newLogo}
              height="50"
              width="50"
              className="rounded-circle"
              alt=""
              srcset=""
            />
            <span
              className=" pt-2 pl-2"
              style={{
                fontFamily: "sans-serif",
                fontSize: 20,
                color: "blue",
                msAlignSelf: "center",
                justifySelf: "center",
                flexDirection: "row",
              }}
            >
              <b>WEBITSS</b>
            </span>
            <small
              style={{
                marginTop: 16,
                marginLeft: 5,
                fontFamily: "sans-serif",
                fontSize: 10,
                color: "blue",
              }}
            >
              IT SOLUTIONS
            </small>
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
            <div className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "black" }}
                to="/contact"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Contact"
              >
                <MessageRoundedIcon />
              </Link>
            </div>

            <div className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "black" }}
                to="/order"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Order Project"
              >
                <AddCircleIcon data-toggle="modal" data-target="#add_post" />
              </Link>
            </div>

            <div className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "black" }}
                to="/about"
                data-toggle="tooltip"
                data-placement="bottom"
                title="About us"
              >
                <InfoIcon />
              </Link>
            </div>
            <div className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "black" }}
                to="/profile"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Order Project"
              >
                <WorkHistoryIcon data-toggle="modal" data-target="#add_post" />
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
      </div> */}
      <nav class="navbar navbar-expand-lg navbar-light" style={{background:"linear-gradient(270deg, #009277 26.63%, rgba(0, 178, 255, 0) 78.22%)"}}>
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={newLogo} alt="..." height="46" /></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto ml-5">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">privacy policy</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">contact us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">about us</a>
              </li>
              <li class="nav-item" style={{ color: "white", marginTop: "2px", fontSize: "25px" }}>
              <a class="nav-link" href="/login"><AccountCircleOutlinedIcon /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
