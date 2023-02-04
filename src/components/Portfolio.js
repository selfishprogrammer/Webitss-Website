/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { webDesign, Websitedesign, softwareDevelopment, BusinessAnalysis } from "./Images";
import '../../src/routes/HomePage/home.css'

export default function Portfolio() {
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
    //     PORTFOLIO{" "}
    //   </div>
    //   <div className="bg-white mx-3 p-3 my-4">
    //     <Slider {...settings}>
    //       <div className="px-4 pt-4 bg-white">
    //         <a
    //           className="nav-link"
    //           target="_blank"
    //           href="https://shoppers.webitss.com/"
    //         >
    //           <img
    //             src={shoppers}
    //             width="100%"
    //             height="300px"
    //             id="steps2"
    //             className="shadow-sm"
    //             style={{
    //               borderRadius: 10,
    //               borderWidth: 1,
    //               borderColor: "black",
    //             }}
    //           />
    //         </a>
    //       </div>
    //       <div className="px-4 pt-4">
    //         <a
    //           className="nav-link"
    //           target="_blank"
    //           href="https://erp.webitss.com/"
    //         >
    //           <img
    //             src={erpio}
    //             width="100%"
    //             height="300px"
    //             id="steps2"
    //             className="shadow-sm"
    //             style={{
    //               borderRadius: 10,
    //               borderWidth: 1,
    //               borderColor: "black",
    //             }}
    //           />
    //         </a>
    //       </div>
    //       <div className="px-4 pt-4">
    //         <a
    //           className="nav-link"
    //           target="_blank"
    //           href="https://www.customjersey.com/"
    //         >
    //           <img
    //             src={jersy}
    //             width="100%"
    //             height="300px"
    //             id="steps2"
    //             className="shadow-sm"
    //             style={{
    //               borderRadius: 10,
    //               borderWidth: 1,
    //               borderColor: "black",
    //             }}
    //           />
    //         </a>
    //       </div>
    //     </Slider>
    //   </div>
    // </div>

    // <div class="card-deck p-2" style={{width:"100%"}}>
    //   <div class="card">
    //     <img class="card-img-top" src="https://e7.pngegg.com/pngimages/119/921/png-clipart-flower-dahlia-flower-flower-garden-annual-plant.png" width="40%" height="40%" alt="Card image cap" />
    //     <div class="card-body">
    //       <h5 class="card-title">Card title</h5>
    //       <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //     </div>
    //   </div>
    //   <div class="card">
    //     <img class="card-img-top" src="https://e7.pngegg.com/pngimages/119/921/png-clipart-flower-dahlia-flower-flower-garden-annual-plant.png" width="40%" height="40%" alt="Card image cap" />
    //     <div class="card-body">
    //       <h5 class="card-title">Card title</h5>
    //       <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    //     </div>
    //   </div>
    //   <div class="card">
    //     <img class="card-img-top" src="https://e7.pngegg.com/pngimages/119/921/png-clipart-flower-dahlia-flower-flower-garden-annual-plant.png" width="40%" height="40%" alt="Card image cap" />
    //     <div class="card-body">
    //       <h5 class="card-title">Card title</h5>
    //       <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    //     </div>
    //   </div>
    //   <div class="card">
    //     <img class="card-img-top" src="https://e7.pngegg.com/pngimages/119/921/png-clipart-flower-dahlia-flower-flower-garden-annual-plant.png" width="40%" height="40%" alt="Card image cap" />
    //     <div class="card-body">
    //       <h5 class="card-title">Card title</h5>
    //       <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    //     </div>
    //   </div>
    // </div>
    // <div class='container'>
    //   <div class='row'>
    //     <div class='col-md-12'>
    //     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    //         <ol class="carousel-indicators">
    //           <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    //           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    //           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    //         </ol>
    //         <div class="carousel-inner">
    //           <div class="carousel-item active">
    //             <div class='row'>
    //               <div class='cal-md-4'>
    //                 <div class='single-box'>
    //                   <div class='img-area'></div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //     </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div class='container p-3'>
        <div class='row'>
          <div class='col-lg-12'>
            <div class='section-header text-center' style={{ fontWeight: "900", color: "red" }}>
              <h2>OUR SERVICES</h2>
            </div>
          </div>
        </div>
      </div>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="3000" style={{ height: "70vh" }}>
            <div class="cards-wrapper">
              <div class="card" style={{ width: "18rem" }}>
                <img src={webDesign} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "#002CC9", fontWeight: "10px" }}>website design</h5>
                  <p class="card-text">We ensure that our client’s website is responsive on every device, so that no single customer is lost. Our responsive website responds to the user’s behavior and environment based on screen size, platform, & orientation.</p>
                  <a href="#" class="btn btn-primary">CLICK HERE</a>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src={Websitedesign} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "#002CC9", fontWeight: "10px" }}>website development</h5>
                  <p class="card-text">We ensure that our client’s website is responsive on every device, so that no single customer is lost. Our responsive website responds to the user’s behavior and environment based on screen size, platform, & orientation.</p>
                  <a href="#" class="btn btn-primary text-left">CLICK HERE</a>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src={softwareDevelopment} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "#002CC9", fontWeight: "10px" }}>software development</h5>
                  <p class="card-text">We ensure that our client’s website is responsive on every device, so that no single customer is lost. Our responsive website responds to the user’s behavior and environment based on screen size, platform, & orientation.</p>
                  <a href="#" class="btn btn-primary">CLICK HERE</a>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src={BusinessAnalysis} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "#002CC9", fontWeight: "10px" }}>Business analysis</h5>
                  <p class="card-text">We ensure that our client’s website is responsive on every device, so that no single customer is lost. Our responsive website responds to the user’s behavior and environment based on screen size, platform, & orientation.</p>
                  <a href="#" class="btn btn-primary">CLICK HERE</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-interval="3000" style={{ height: "70vh" }}>
            <div class="cards-wrapper">
              <div class="card" style={{ width: "18rem" }}>
                <img src={webDesign} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "#002CC9", fontWeight: "10px" }}>website design</h5>
                  <p class="card-text">We ensure that our client’s website is responsive on every device, so that no single customer is lost. Our responsive website responds to the user’s behavior and environment based on screen size, platform, & orientation.</p>
                  <a href="#" class="btn btn-primary">CLICK HERE</a>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src={Websitedesign} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "#002CC9", fontWeight: "10px" }}>website development</h5>
                  <p class="card-text">We ensure that our client’s website is responsive on every device, so that no single customer is lost. Our responsive website responds to the user’s behavior and environment based on screen size, platform, & orientation.</p>
                  <a href="#" class="btn btn-primary">CLICK HERE</a>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src={softwareDevelopment} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "#002CC9", fontWeight: "10px" }}>software development</h5>
                  <p class="card-text">We ensure that our client’s website is responsive on every device, so that no single customer is lost. Our responsive website responds to the user’s behavior and environment based on screen size, platform, & orientation.</p>
                  <a href="#" class="btn btn-primary">CLICK HERE</a>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src={BusinessAnalysis} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "#002CC9", fontWeight: "10px" }}>Business analysis</h5>
                  <p class="card-text">We ensure that our client’s website is responsive on every device, so that no single customer is lost. Our responsive website responds to the user’s behavior and environment based on screen size, platform, & orientation.</p>
                  <a href="#" class="btn btn-primary">CLICK HERE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
