import { Button } from "@mui/material";
import styles from '../../src/routes/HomePage/home.css'
import React from "react";
const MenuItem = () => {
    return (
        <div class="container-fluid" style={{backgroundColor:"#003688"}}>
            <div class="container-fluid p-4">
                <ul class="navbar justify-content-center list-unstyled">
                    <li class="nav-item dropdown">
                        <a class="nav-link " href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize:"30px", color:"white", fontWeight:"600",fontFamily:"FontAwesome"}}> SERVICES </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#"><i class="fa fa-hand-o-right"></i>Websites Development</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fa fa-hand-o-right"></i>Android Application</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fa fa-hand-o-right"></i>Desktop Application</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link " href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize:"30px", color:"white", fontWeight:"600",fontFamily:"FontAwesome"}}> DESIGN </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#"><i class="fa fa-hand-o-right"></i>FIGMA DESIGN</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fa fa-hand-o-right"></i>LOGO DESIGN</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fa fa-hand-o-right"></i>SOFTWARE DESIGN</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fa fa-hand-o-right"></i>WEBSITE DESIGN</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link " href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize:"30px", color:"white", fontWeight:"600",fontFamily:"FontAwesome"}}> DEVELOPMENT </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#"><i class="fa fa-hand-o-right"></i>Websites Development</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fa fa-hand-o-right"></i>Android Application</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fa fa-hand-o-right"></i>Desktop Application</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            {/* <nav class="navbar navbar-expand-md navbar-light ">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <div class="container">
                        <li class="nav-item ">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="http://google.com">Google</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Submenu</a></li>
                                        <li><a class="dropdown-item" href="#">Submenu0</a></li>
                                        <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Submenu 1</a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Subsubmenu1</a></li>
                                                <li><a class="dropdown-item" href="#">Subsubmenu1</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Submenu 2</a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Subsubmenu2</a></li>
                                                <li><a class="dropdown-item" href="#">Subsubmenu2</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        </div>
                    </ul>
                </div>
            </nav> */}
        </div>
    )
}
export default MenuItem