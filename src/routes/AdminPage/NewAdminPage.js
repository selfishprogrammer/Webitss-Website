import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Services from "../../Services/Service";
import AdminNav from "./AdminNav";
import { useNavigate } from "react-router";

const NewAdminPage = () => {
    return (
        <>
            <div class='container-fluid mt-5' >
                <div className="row">
                <div class='col-md-8'>
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">PHONE</th>
                                <th scope="col">VERIFIED</th>
                                <th scope="col">TYPE</th>
                                <th scope="col">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sukanta Dandapat</td>
                                <td>abc@gmail.com</td>
                                <td>1234567890</td>
                                <td>Verified</td>
                                <td>Consumer</td>
                                <td>Activated</td>
                            </tr>
                            <tr>
                                <td>Rahul Jha</td>
                                <td>abc@gmail.com</td>
                                <td>1234567890</td>
                                <td>Verified</td>
                                <td>Consumer</td>
                                <td>Activated</td>
                            </tr>
                            <tr>
                                <td>Loknath Das</td>
                                <td>abc@gmail.com</td>
                                <td>1234567890</td>
                                <td>Verified</td>
                                <td>Consumer</td>
                                <td>Activated</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <div class='col-md-4'>
                <div class="border">
                <img width='25%' height='25%' src="https://images.pexels.com/photos/55838/flower-rose-blossom-bloom-55838.jpeg?cs=srgb&dl=pexels-pixabay-55838.jpg&fm=jpg" class="rounded mx-auto d-block" alt="..."/>
                <div className="text-center">
                    <span>Name: Rahul Jha</span><br></br>
                    <span>Email:abc@gmail.com</span><br></br>
                    <span>Account Type:</span><br></br>
                    <span>Status:</span><br></br>
                    <span>Project:</span><br></br>
                </div>
                </div>
                </div>
                </div>
            </div>
            
        </>
    )

}
export default NewAdminPage