/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Slider from "react-slick";
export default function WhatweDo() {
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
        Technology on which we work
      </h3>
      <div className="container my-4 p-5">
        <Slider {...settings}>
          <div
            className="px-4"
            id="steps"
            style={{ cursor: "pointer", borderRadius: 20 }}
          >
            <img
              src="https://www.mindinventory.com/blog/wp-content/uploads/2017/08/reactjs.jpg"
              style={{ borderRadius: 20, width: "100%", height: 200 }}
            />
          </div>

          <div className="px-4" id="steps" style={{ cursor: "pointer" }}>
            <img
              src="https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G"
              style={{ borderRadius: 20, width: "100%", height: 200 }}
            />
          </div>
          <div className="px-4" id="steps" style={{ cursor: "pointer" }}>
            <img
              src="https://futureskillsprime.in//sites/default/files/2022-02/Link-Sharing_1200x630_Blockchain.jpg"
              style={{ borderRadius: 20, width: "100%", height: 200 }}
            />
          </div>
          <div className="px-4" id="steps" style={{ cursor: "pointer" }}>
            <img
              src="https://dz2cdn1.dzone.com/storage/temp/12434269-spring-framework-01.jpg"
              style={{ borderRadius: 20, width: "100%", height: 200 }}
            />
          </div>
          <div className="px-4" id="steps" style={{ cursor: "pointer" }}>
            <img
              src="https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G"
              style={{ borderRadius: 20, width: "100%", height: 200 }}
            />
          </div>
          <div className="px-4" id="steps" style={{ cursor: "pointer" }}>
            <img
              src="https://media-exp1.licdn.com/dms/image/C5612AQGthZs00xPX2g/article-cover_image-shrink_720_1280/0/1634809398232?e=1658966400&v=beta&t=T05LwqHNyprbsNHuYlFA4gRqEn7aXkdAo1iI09yfKP8"
              style={{ borderRadius: 20, width: "100%", height: 200 }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
