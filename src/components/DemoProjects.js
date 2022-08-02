/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Covido, Covido3, covido5, ecom, ecom3 } from "./Images";

export default function DemoProjects() {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <h3
        className="text-center my-3"
        style={{
          color: "black",
          fontWeight: "bold",
          fontFamily: "initial",
          marginBottom: 30,
        }}
      >
        Some Demo Projects
      </h3>
      <div className="container my-4 p-5">
        <Slider {...settings}>
          <div
            className="px-4"
            id="steps"
            style={{ cursor: "pointer", borderRadius: 20 }}
          >
            <img
              src={Covido}
              style={{ borderRadius: 20, width: "100%", height: 200 }}
            />
          </div>

          <Link
            to="/details"
            className="px-4"
            id="steps"
            style={{ cursor: "pointer" }}
          >
            <img
              src={ecom}
              style={{ borderRadius: 20, width: "100%", height: 200 }}
            />
          </Link>
          <Link
            to="/details"
            className="px-4"
            id="steps"
            style={{ cursor: "pointer" }}
          >
            <img
              src={Covido3}
              style={{ borderRadius: 20, width: "100%", height: 200 }}
            />
          </Link>
          <Link
            to="/details"
            className="px-4"
            id="steps"
            style={{ cursor: "pointer" }}
          >
            <img
              src={ecom3}
              style={{ borderRadius: 20, width: "100%", height: 200 }}
            />
          </Link>
          <Link
            to="/details"
            className="px-4"
            id="steps"
            style={{ cursor: "pointer" }}
          >
            <img
              src={ecom3}
              style={{ borderRadius: 20, width: "100%", height: 200 }}
            />
          </Link>
          <Link
            to="/details"
            className="px-4"
            id="steps"
            style={{ cursor: "pointer" }}
          >
            <img
              src={covido5}
              style={{ borderRadius: 20, width: "100%", height: 200 }}
            />
          </Link>
        </Slider>
      </div>
    </div>
  );
}
