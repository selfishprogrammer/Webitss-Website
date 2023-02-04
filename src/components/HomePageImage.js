import React from "react";
import '../../src/routes/HomePage/home.css'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Banner1, Banner2, Banner3, Banner4, Banner5, newLogo } from "./Images";

const ImageModal = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light  fixed-top pt-4">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={newLogo} alt="..." height="46"/></a>
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
                                <a class="nav-link" href="/contact">contact us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/new-details">about us</a>
                            </li>
                            <li class="nav-item" style={{ color: "white", marginTop:"2px",fontSize:"25px" }}>
                            <a class="nav-link" href="/login"><AccountCircleOutlinedIcon /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <Navbar/> */}
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{height:"90vh"}}>
                <div class="carousel-inner">
                    <div id="item" class="carousel-item active" data-interval="3000">
                        <img src={Banner1} class="d-block w-100" alt="..." style={{ height: "90vh" }} />
                    </div>
                    <div id="item" class="carousel-item" data-interval="3000">
                        <img src={Banner2} class="d-block w-100" alt="..." style={{ height: "90vh" }} />
                    </div>
                    <div id="item" class="carousel-item" data-interval="3000">
                        <img src={Banner3} class="d-block w-100" alt="..." style={{ height: "90vh" }} />
                    </div>
                    <div id="item" class="carousel-item" data-interval="3000">
                        <img src={Banner4} class="d-block w-100" alt="..." style={{ height: "90vh" }} />
                    </div>
                </div>
            </div>
        </>

    )
}
export default ImageModal