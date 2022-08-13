import React, { useEffect, useState } from "react";
import DemoProjects from "../../components/DemoProjects";
import FooterScreen from "../../components/FooterScreen";
import Navbar from "../../components/Navbar";
import StepsPages from "../../components/StepsPages";
import { useNavigate } from "react-router";

import WhatweDo from "../../components/WhatweDo";
import "./home.css";
import TCModal from "../../components/TCModal";
import Auth from "../../Services/Auth";
import Services from "../../Services/Service";
export default function HomePage() {
  const [isVisible, setisVisible] = useState(false);
  const [newVersion, setnewVersion] = useState("");
  const [userId, setuserId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    checkTCVersion();
  }, []);
  const checkTCVersion = async () => {
    const userData = await Auth.getUser();
    console.log(userData?.user_id);
    if (userData) {
      setuserId(userData?.user_id);
      const data = await Services.getPolicyVersion({
        user_id: userData?.user_id,
      });
      if (
        data?.status === "true" &&
        data?.versionAccepted !== data?.currentPolicyVersion
      ) {
        setisVisible(true);
        setnewVersion(data?.currentPolicyVersion);
      }
    }
  };
  const newVersionAccepted = async () => {
    const data = await Services.acceptPolicyVersion({
      user_id: userId,
      policy_version: newVersion,
    });
    if (data?.status === "true") {
      setisVisible(false);
    }
  };
  return (
    <>
      <TCModal IsVisible={isVisible} accept={() => newVersionAccepted()} />
      <Navbar />
      <div id="bgImg">
        <div className="container d-flex justify-content-center">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <p
                  id="title"
                  className="text-center"
                  style={{
                    fontSize: 40,
                    color: "white",
                    fontFamily: "initial",
                  }}
                >
                  {"We Are Here To Provide Websites Mobile Applications To New Startups in Low Rates...".toLocaleUpperCase()}
                </p>
              </div>
              <div class="carousel-item">
                <p
                  id="title"
                  className="text-center"
                  style={{
                    fontSize: 40,
                    color: "white",
                    fontFamily: "initial",
                  }}
                >
                  {"WE complete project in given dedline for clients with 24x7 hours support by our team".toLocaleUpperCase()}
                </p>
              </div>
              <div class="carousel-item">
                <p
                  id="title"
                  className="text-center"
                  style={{
                    fontSize: 40,
                    color: "white",
                    fontFamily: "initial",
                  }}
                >
                  {"25+ ongoing project on diffrent technologies".toLocaleUpperCase()}
                </p>
              </div>
              <div class="carousel-item">
                <p
                  id="title"
                  className="text-center"
                  style={{
                    fontSize: 40,
                    color: "white",
                    fontFamily: "initial",
                  }}
                >
                  {"WE are growing fast for our good services".toLocaleUpperCase()}
                </p>
              </div>
              <div class="carousel-item">
                <p
                  id="title"
                  className="text-center"
                  style={{
                    fontSize: 40,
                    color: "white",
                    fontFamily: "initial",
                  }}
                >
                  {"WE are woring on advanced technologies ".toLocaleUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-flex justify-content-center my-4">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <p
                  id="text2"
                  className="text-center"
                  style={{
                    fontSize: 40,
                    color: "white",
                    fontFamily: "initial",
                  }}
                >
                  {"REACT JS / NEXT JS".toLocaleUpperCase()}
                </p>
              </div>
              <div class="carousel-item">
                <p
                  id="text2"
                  className="text-center"
                  style={{
                    fontSize: 40,
                    color: "white",
                    fontFamily: "initial",
                  }}
                >
                  {"ANGULAR JS".toLocaleUpperCase()}
                </p>
              </div>
              <div class="carousel-item">
                <p
                  id="text2"
                  className="text-center"
                  style={{
                    fontSize: 40,
                    color: "white",
                    fontFamily: "initial",
                  }}
                >
                  {"React Native".toLocaleUpperCase()}
                </p>
              </div>
              <div class="carousel-item">
                <p
                  id="text2"
                  className="text-center"
                  style={{
                    fontSize: 40,
                    color: "white",
                    fontFamily: "initial",
                  }}
                >
                  {"FLUTTER".toLocaleUpperCase()}
                </p>
              </div>
              <div class="carousel-item">
                <p
                  id="text2"
                  className="text-center"
                  style={{
                    fontSize: 40,
                    color: "white",
                    fontFamily: "initial",
                  }}
                >
                  {"SPRING BOOT".toLocaleUpperCase()}
                </p>
              </div>
              <div class="carousel-item">
                <p
                  id="text2"
                  className="text-center"
                  style={{
                    fontSize: 40,
                    color: "white",
                    fontFamily: "initial",
                  }}
                >
                  {"PYTHON".toLocaleUpperCase()}
                </p>
              </div>
              <div class="carousel-item">
                <p
                  id="text2"
                  className="text-center"
                  style={{
                    fontSize: 40,
                    color: "white",
                    fontFamily: "initial",
                  }}
                >
                  {"BLOCKCHAIN".toLocaleUpperCase()}
                </p>
              </div>
            </div>
          </div>
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
          <button
            className="btn btn form-control"
            onClick={() => navigate("/order")}
            id="home_btn"
          >
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
