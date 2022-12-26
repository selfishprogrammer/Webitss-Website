/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { logo, erpio, shoppers, jersy } from "./Images";

export default function Portfolio() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div
        className="text-center my-3"
        id="text"
        style={{
          color: "blue",
          // fontWeight: "bold",
          fontFamily: "serif",
          marginBottom: 30,
          fontSize: 30,
        }}
      >
        PORTFOLIO{" "}
      </div>
      <div className="bg-white mx-3 p-3 my-4">
        <Slider {...settings}>
          <div className="px-4 pt-4 bg-white">
            <a
              className="nav-link"
              target="_blank"
              href="https://shoppers.webitss.com/"
            >
              <img
                src={shoppers}
                width="100%"
                height="300px"
                id="steps2"
                className="shadow-sm"
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "black",
                }}
              />
            </a>
          </div>
          <div className="px-4 pt-4">
            <a
              className="nav-link"
              target="_blank"
              href="https://erp.webitss.com/"
            >
              <img
                src={erpio}
                width="100%"
                height="300px"
                id="steps2"
                className="shadow-sm"
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "black",
                }}
              />
            </a>
          </div>
          <div className="px-4 pt-4">
            <a
              className="nav-link"
              target="_blank"
              href="https://www.customjersey.com/"
            >
              <img
                src={jersy}
                width="100%"
                height="300px"
                id="steps2"
                className="shadow-sm"
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "black",
                }}
              />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
}
