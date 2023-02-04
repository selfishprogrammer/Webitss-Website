/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { base_url } from "../constants/Urls";
import Services from "../Services/Service";
import { fillup } from "./Images";

export default function DemoProjects() {
  const [projects, setprojects] = useState([]);
  useEffect(() => {
    getDemoProjects();
  }, []);
  const getDemoProjects = async () => {
    const data = await Services.demoProjects();
    if (data?.status === "true") {
      setprojects(data?.records);
      console.log("data==>>>", data?.records);
    }
  };
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
    <div style={{ backgroundColor: "#fff" }}>
      {/* <div
        className="text-center"
        id="text"
        style={{
          color: "blue",
          // fontWeight: "bold",
          fontFamily: "serif",
          marginBottom: 50,
          marginTop: 50,
          fontSize: 30,
        }}
      >
        SOME PROJECTS THAT WE HAVE CREATED
      </div>
      <div className="bg-white mx-3 p-3 my-4">
        <Slider {...settings}>
          {projects.map((item, key) => (
            <div className="px-4 pt-4">
              <div
                className="shadow bg-white"
                id="steps2"
                onClick={() =>
                  navigate("/details", {
                    state: {
                      projects: item,
                    },
                  })
                }
              >
                <img
                  src={`${base_url}Components/Uploads/${item?.image_1}`}
                  width="100%"
                  height="300px"
                />
                <h4
                  class="py-3"
                  style={{
                    fontFamily: "monospace",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {item?.name}
                </h4>
                <p
                  class="text-center px-4 pt-2 pb-5"
                  style={{
                    fontFamily: "monospace",
                    textAlign: "center",
                    // fontWeight: "bold",
                  }}
                >
                  {item?.details}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
      <div class="container p-5">
        <div class="row ">
          <div class="col-md-6">
            <div class="text-center">
              <img src={fillup} width='100%' height='100%' class="img-fluid" alt="" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="container" style={{backgroundColor:"#d5d8dc6e", borderRadius:"5%"}}>
              <div class="row justify-content-center pt-5">
                <div class="col-6 text-center" style={{borderRadius:"10px", background:"linear-gradient(81.14deg, #410174 32.56%, #0FC5FF 100.02%)",color:"white",fontSize:"29px",fontWeight:"600",fontFamily:"serif"}}>
                  LET'S DO IT
                </div>
              </div>
              <form>
                <div class="form-group pt-3">
                  <label for="Name">Name</label>
                  <input type="name" class="form-control" id="Name" placeholder="Name"/>
                </div>
                <div class="form-group">
                  <label for="Email1">Email</label>
                  <input type="email" class="form-control" id="Email1" placeholder="Email"/>
                </div>
                <div class="form-group">
                  <label for="Phone">Phone Number</label>
                  <input type="phone" class="form-control" id="Phone" placeholder="Phone Number"/>
                </div>
                <div class="form-group">
                  <label for="Queries">Queries</label>
                  <textarea type="queries" class="form-control" id="queries" placeholder="Write your Queries"/>
                </div>
                <div class='row justify-content-center align-items-center'>
                <button type="submit" class="btn btn-primary mb-4" style={{width:"136px"}}>Submit</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
