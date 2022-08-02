import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DemoProjects from "../../components/DemoProjects";
import FooterScreen from "../../components/FooterScreen";
import { home } from "../../components/Images";
import Navbar from "../../components/Navbar";
import StepsPages from "../../components/StepsPages";
import WhatweDo from "../../components/WhatweDo";
import { setLogin } from "../../Redux/user";
import "./home.css";
export default function HomePage() {
  const { isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <div id="bgImg">
        <div className="container d-flex justify-content-center">
          <p
            id="title"
            className="text-center"
            style={{ fontSize: 40, color: "white", fontFamily: "initial" }}
          >
            We Are Here To Provide Websites Mobile Applications To New Startups
            in Low Rates...
          </p>
        </div>
        <div className="container col-md-6 offset-md-3">
          <p
            id="title"
            className="text-center my-2 mx-4"
            style={{ color: "white", fontSize: 15 }}
          >
            With the 5+ years of experience in the field of Web and App
            Development, we will provide a websites and app to new startups in
            very low cost.
          </p>
        </div>
        <div
          className="container d-flex justify-content-center"
          style={{ marginTop: 70, marginBottom: 60 }}
        >
          <button className="btn btn form-control" id="home_btn">
            WHAT YOU NEED ?
          </button>
        </div>
      </div>
      <StepsPages />
      <WhatweDo />
      <DemoProjects />
      <FooterScreen />
    </>
  );
}
