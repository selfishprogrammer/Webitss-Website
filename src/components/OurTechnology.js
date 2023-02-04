import React from "react";
import { Link } from "react-router-dom";
import { reactjs, nextjs, nodejs, java, python, php, html, wordpress } from './Images'
const OurTechnology = () => {
    return (
        <>
            <div class='container'>
                <div class='row'>
                    <div class='col-lg-12'>
                        <div class='section-header text-center' style={{ fontWeight: "900", color: "blue" }}>
                            <h2>OUR Technology</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid p-5">
                <div class="row">
                    <div class="col-md">
                        <img src={reactjs} width='92%' height='100%'></img>
                    </div>
                    <div class="col-md">
                        <img src={nextjs} width='92%' height='100%'></img>
                    </div>
                    <div class="col-md">
                        <img src={nodejs} width='92%' height='100%'></img>
                    </div>
                    <div class="col-md">
                        <img src={java} width='92%' height='100%'></img>
                    </div>
                    <div class="col-md">
                        <img src={python} width='92%' height='100%'></img>
                    </div>
                    <div class="col-md">
                        <img src={php} width='92%' height='100%'></img>
                    </div>
                    <div class="col-md">
                        <img src={html} width='92%' height='100%'></img>
                    </div>
                    <div class="col-md">
                        <img src={wordpress} width='92%' height='100%'></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurTechnology