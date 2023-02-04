/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Styles from '../App.css'

export default function WhatweDo() {
  const navigate = useNavigate();
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 4,
  //   initialSlide: 0,

  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    // <div>
    //   <div
    //     className="text-center my-3"
    //     id="text"
    //     style={{
    //       color: "blue",
    //       // fontWeight: "bold",
    //       fontFamily: "serif",
    //       marginBottom: 30,
    //       fontSize: 30,
    //     }}
    //   >
    //     WHAT WE DO ?? WHAT WE CREATES ??
    //   </div>
    //   <div className="bg-whit mx-3 p-3 my-4">
    //     <Slider {...settings}>
    //       <div className="px-4 pt-4">
    //         <div className="shadow bg-white" id="steps2">
    //           <img
    //             src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX40828007.jpg"
    //             width="100%"
    //             height="300px"
    //           />
    //           <h4
    //             class="py-3"
    //             style={{
    //               fontFamily: "monospace",
    //               textAlign: "center",
    //               fontWeight: "bold",
    //             }}
    //           >
    //             Web Development
    //           </h4>
    //           {/* <p
    //             class="text-center px-4 pt-2 pb-5"
    //             style={{
    //               fontFamily: "monospace",
    //               textAlign: "center",
    //               // fontWeight: "bold",
    //             }}
    //           >
    //             We Creates Static and Dynamics All Kinds Of Web Apps (Single
    //             Pages Applications or Dynamics Page Applications) With SEO
    //             Implementations in Very Low Costs Compare to Market Price.
    //           </p> */}
    //         </div>
    //       </div>

    //       <div className="px-4 pt-4">
    //         <div className="shadow bg-white" id="steps2">
    //           <img
    //             src="https://appinventiv.com/wp-content/uploads/sites/1/2019/10/7-Types-of-Applications-That-Can-be-Developed-Using-Python-1.webp"
    //             width="100%"
    //             height="300px"
    //           />
    //           <h4
    //             class="py-3"
    //             style={{
    //               fontFamily: "monospace",
    //               textAlign: "center",
    //               fontWeight: "bold",
    //             }}
    //           >
    //             App Development
    //           </h4>
    //           {/* <p
    //             class="text-center px-4 pt-2 pb-5"
    //             style={{
    //               fontFamily: "monospace",
    //               textAlign: "center",
    //               // fontWeight: "bold",
    //             }}
    //           >
    //             We Creates Android and IOS Applications (Using React Native,
    //             Flutter , Swift , Java Android) in Low Costs Compare to Market
    //             Price.We Provide Lifetime Supports For Your App.
    //           </p> */}
    //         </div>
    //       </div>

    //       <div className="px-4 pt-4">
    //         <div className="shadow bg-white" id="steps2">
    //           <img
    //             src="https://magictym.com/Content/img/Services/sub-services/desktop-banner.jpg"
    //             width="100%"
    //             height="300px"
    //           />
    //           <h4
    //             class="py-3"
    //             style={{
    //               fontFamily: "monospace",
    //               textAlign: "center",
    //               fontWeight: "bold",
    //             }}
    //           >
    //             Desktop App
    //           </h4>
    //           {/* <p
    //             class="text-center px-4 pt-1 pb-5"
    //             style={{
    //               fontFamily: "monospace",
    //               textAlign: "center",
    //               // fontWeight: "bold",
    //             }}
    //           >
    //             We Creates Desktop Applications (Using Java Swings and Python
    //             Tkinter) in Low Costs Compare to Market Price.We Provide
    //             Lifetime Supports For Your App.
    //           </p> */}
    //         </div>
    //       </div>
    //     </Slider>
    //   </div>
    // </div>
    <div class="container-fluid">
      <div class="jumbotron" style={{ background: "linear-gradient(89.94deg, rgba(255, 0, 0, 0.39) 4.34%, rgba(0, 26, 159, 0.69) 51.08%, #00FED0 95%)" }}>
        <div class="text-center">
          <h1 style={{ color: "white", fontFamily: 'Lemonada', fontWeight: "800", fontSize: "48px", textTransform: "uppercase" }}>let’s get started with us</h1>
          <div className="body-text" style={{ color: "white", fontFamily: 'Lemonada', fontWeight: "200", fontSize: "40px", fontFamily: "initial" }}>
            Ready to Discuss Your Project? <br></br>
            Give Us a Call or Write to Us!
          </div>
        </div>
        <div className="pt-5 text-center">
          <button className="btn btn-dark btn-lg" style={{ borderRadius: 40, fontSize:"28px" }} >
            get started now
          </button>
        </div>
      </div>
    </div>
  );
}
