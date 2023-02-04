/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../src/routes/HomePage/home.css'


export default function FooterScreen() {
  return (
    // <div>
    //   <footer
    //     class="container-fluid mt-4 py-3 text-light"
    //     style={{ backgroundColor: "#161e2c" }}
    //   >
    //     <div class="container">
    //       <div class="col-md-6 offset-md-3">
    //         <div class="d-flex justify-content-center my-2">
    //           <div class="mx-2" style={{ fontSize: 25 }}>
    //             <a
    //               target="_blank"
    //               href="https://www.instagram.com/webitss.in/"
    //               class="nav-link"
    //               style={{ color: "white" }}
    //             >
    //               <i class="fa fa-facebook-official" aria-hidden="true"></i>
    //             </a>
    //           </div>
    //           <div class="mx-2" style={{ fontSize: 25 }}>
    //             <a
    //               target="_blank"
    //               href="https://www.instagram.com/webitss.in/"
    //               class="nav-link"
    //               style={{ color: "white" }}
    //             >
    //               <i class="fa fa-instagram" aria-hidden="true"></i>
    //             </a>
    //           </div>
    //           <div class="mx-2" style={{ fontSize: 25 }}>
    //             <a
    //               href="https://wa.me/<9339242724>"
    //               target="_blank"
    //               class="nav-link"
    //               style={{ color: "white" }}
    //             >
    //               <i class="fa fa-whatsapp" aria-hidden="true"></i>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="col-md-4 offset-md-4">
    //       {" "}
    //       <div className="row my-4">
    //         <div className="col-md-4">
    //           <Link
    //             className="text-center mb-4"
    //             to="#"
    //             style={{
    //               color: "black",
    //               fontFamily: "serif",
    //               fontSize: 18,
    //             }}
    //           >
    //             <span style={{ color: "grey" }}>
    //               <b>MAIN MENU</b>
    //             </span>
    //           </Link>
    //           <p className=" mt-4">
    //             <Link
    //               to="/"
    //               className="my-1 text-center"
    //               style={{
    //                 color: "black",
    //                 fontFamily: "serif",
    //                 fontSize: 15,
    //               }}
    //             >
    //               <span style={{ color: "white", textDecoration: "underline" }}>
    //                 <b>HOME</b>
    //               </span>
    //             </Link>
    //           </p>
    //           <p className="">
    //             <Link
    //               to="/about"
    //               className="my-1 text-center"
    //               style={{
    //                 color: "black",
    //                 fontFamily: "serif",
    //                 fontSize: 15,
    //               }}
    //             >
    //               <span style={{ color: "white", textDecoration: "underline" }}>
    //                 <b>ABOUT US</b>
    //               </span>
    //             </Link>
    //           </p>
    //           <p className="">
    //             <Link
    //               to="/contact"
    //               className="my-1 text-center"
    //               style={{
    //                 color: "black",
    //                 fontFamily: "serif",
    //                 fontSize: 15,
    //               }}
    //             >
    //               <span style={{ color: "white", textDecoration: "underline" }}>
    //                 <b>CONTACT US</b>
    //               </span>
    //             </Link>
    //           </p>
    //         </div>
    //         <div className="col-md-4">
    //           <Link
    //             className="text-center mb-4"
    //             to="#"
    //             style={{
    //               color: "black",
    //               fontFamily: "serif",
    //               fontSize: 18,
    //             }}
    //           >
    //             <span style={{ color: "grey" }}>
    //               <b>ADDRESS</b>
    //             </span>
    //           </Link>
    //           <div className=" mt-4">
    //             <h6>KESTOPUR KOLKATA</h6>
    //             <h6>NEAR D-MARN VILLA , KRISHNAPUR</h6>
    //             <h6>NEW TOWN</h6>
    //             <h6>711087</h6>
    //             <h6>KOLKATA , WEST BENGAL</h6>
    //           </div>
    //         </div>{" "}
    //         <div className="col-md-4">
    //           <Link
    //             className="text-center mb-4"
    //             to="#"
    //             style={{
    //               color: "black",
    //               fontFamily: "serif",
    //               fontSize: 18,
    //             }}
    //           >
    //             <span style={{ color: "grey" }}>
    //               <b>CONTACT US</b>
    //             </span>
    //           </Link>
    //           <div className=" mt-4">
    //             <h6>9339242724</h6>
    //             <h6>info@webitss.com</h6>
    //           </div>
    //         </div>{" "}
    //         {/* <div>
    //           <Link
    //             className="btn btn-default bg-white  mx-2"
    //             to="/about"
    //             style={{
    //               width: "18rem",
    //               color: "black",
    //               fontFamily: "serif",
    //               fontSize: 18,
    //             }}
    //           >
    //             <i class="fa fa-meh-o" aria-hidden="true"></i>
    //             <span style={{ color: "#002f34" }}> About Us</span>
    //           </Link>
    //         </div> */}
    //         {/* <Link
    //           className="btn btn-default bg-white mx-2"
    //           to="/about"
    //           style={{
    //             width: "18rem",
    //             color: "black",
    //             fontFamily: "serif",
    //             fontSize: 18,
    //           }}
    //         >
    //           <i class="fa fa-commenting" aria-hidden="true"></i> Contact Us
    //         </Link>
    //         <Link
    //           className="btn btn-default bg-white mx-2"
    //           to="/about"
    //           style={{
    //             width: "18rem",
    //             color: "black",
    //             fontFamily: "serif",
    //             fontSize: 18,
    //           }}
    //         >
    //           <i class="fa fa-users" aria-hidden="true"></i> Our Teams
    //         </Link>
    //         <Link
    //           className="btn btn-default bg-white mx-2"
    //           to="/about"
    //           style={{
    //             width: "18rem",
    //             color: "black",
    //             fontFamily: "serif",
    //             fontSize: 18,
    //           }}
    //         >
    //           <i class="fa fa-book" aria-hidden="true"></i> Blogs
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="container">
    //       <h3
    //         style={{ color: "white", textAlign: "center", fontFamily: "serif" }}
    //       >
    //         Our Projects
    //       </h3>
    //       <table class="table table-borderless">
    //         <tbody>
    //           <tr>
    //             <td>
    //               <Link
    //                 className="mx-2 nav-link"
    //                 to="/about"
    //                 style={{
    //                   width: "18rem",
    //                   color: "white",
    //                   fontFamily: "serif",
    //                   fontSize: 18,
    //                 }}
    //               >
    //                 <span
    //                   style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
    //                 >
    //                   MAIN MENU
    //                 </span>
    //               </Link>
    //             </td>
    //             <td>
    //               <Link
    //                 className="mx-2 nav-link"
    //                 to="/about"
    //                 style={{
    //                   width: "18rem",
    //                   color: "white",
    //                   fontFamily: "serif",
    //                   fontSize: 18,
    //                 }}
    //               >
    //                 <span
    //                   style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
    //                 >
    //                   SEVICES
    //                 </span>
    //               </Link>
    //             </td>
    //             <td>
    //               <Link
    //                 className="mx-2 nav-link"
    //                 to="/about"
    //                 style={{
    //                   width: "18rem",
    //                   color: "white",
    //                   fontFamily: "serif",
    //                   fontSize: 18,
    //                 }}
    //               >
    //                 <span
    //                   style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
    //                 >
    //                   ADDRESS
    //                 </span>
    //               </Link>
    //             </td>
    //             <td>
    //               <Link
    //                 className="mx-2 nav-link"
    //                 to="/about"
    //                 style={{
    //                   width: "18rem",
    //                   color: "white",
    //                   fontFamily: "serif",
    //                   fontSize: 18,
    //                 }}
    //               >
    //                 <span
    //                   style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
    //                 >
    //                   CONTACT US
    //                 </span>
    //               </Link>
    //             </td>
    //           </tr>
    //           <tr>
    //             <td>
    //               <Link
    //                 className="ml-4 nav-link"
    //                 to="/about"
    //                 style={{
    //                   color: "white",
    //                   fontFamily: "serif",
    //                   fontSize: 13,
    //                 }}
    //               >
    //                 <span
    //                   style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
    //                 >
    //                   HOME
    //                 </span>
    //               </Link>
    //             </td>
    //             <td>
    //               <Link
    //                 to="/"
    //                 style={{
    //                   fontFamily: "serif",
    //                   color: "white",
    //                   fontSize: 15,
    //                 }}
    //               >
    //                 cricscore
    //               </Link>
    //             </td>
    //             <td>
    //               <Link
    //                 to="/"
    //                 style={{
    //                   fontFamily: "serif",
    //                   color: "white",
    //                   fontSize: 15,
    //                 }}
    //               >
    //                 GoLive
    //               </Link>
    //             </td>
    //             <td>
    //               <Link
    //                 to="/"
    //                 style={{
    //                   fontFamily: "serif",
    //                   color: "white",
    //                   fontSize: 15,
    //                 }}
    //               >
    //                 Foodies
    //               </Link>
    //             </td>
    //             <td>
    //               <Link
    //                 to="/"
    //                 style={{
    //                   fontFamily: "serif",
    //                   color: "white",
    //                   fontSize: 15,
    //                 }}
    //               >
    //                 whatsApp 2.0
    //               </Link>
    //             </td>
    //           </tr>
    //           <tr>
    //             <td>
    //               <Link
    //                 to="/"
    //                 style={{
    //                   fontFamily: "serif",
    //                   color: "white",
    //                   fontSize: 15,
    //                 }}
    //               >
    //                 Society Management System
    //               </Link>
    //             </td>
    //             <td>
    //               <Link
    //                 to="/"
    //                 style={{
    //                   fontFamily: "serif",
    //                   color: "white",
    //                   fontSize: 15,
    //                 }}
    //               >
    //                 Billing System
    //               </Link>
    //             </td>
    //             <td>
    //               <Link
    //                 to="/"
    //                 style={{
    //                   fontFamily: "serif",
    //                   color: "white",
    //                   fontSize: 15,
    //                 }}
    //               >
    //                 HikeUp
    //               </Link>
    //             </td>
    //             <td>
    //               <Link
    //                 to="/"
    //                 style={{
    //                   fontFamily: "serif",
    //                   color: "white",
    //                   fontSize: 15,
    //                 }}
    //               >
    //                 eZTracker
    //               </Link>
    //             </td>
    //             <td>
    //               <Link
    //                 to="/"
    //                 style={{
    //                   fontFamily: "serif",
    //                   color: "white",
    //                   fontSize: 15,
    //                 }}
    //               >
    //                 webitss
    //               </Link>
    //             </td>
    //           </tr>
    //         </tbody>
    //       </table> */}
    //       </div>
    //     </div>
    //     <hr />

    //     <hr />
    //     <p class="mb-0 text-center">© 2021-2022 webitss.com</p>
    //     <p class="mb-0 text-center">
    //       <a href="/">Back to top |</a>
    //       <a href="/privacy-policy">Privacy Policy|</a>
    //       <a href="/tc">Terms&Conditions</a>
    //     </p>

    //     <p></p>
    //   </footer>
    // </div>


    <div class="footer-dark" style={{background:"black"}}>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-4 item">
              <h2>KNOWN US</h2>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Our Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-4 item">
              <h2>CONTACT US</h2>
              <div>
                <p><i class="fa fa-phone mr-3"></i>(541) 754-3010</p>
                <p><i class="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
                <p><i class="fa fa-map-marker mr-3"></i> Siliguri, Darjeeling,734002, West Bengal, India </p>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 item text">
              <h2>LET US HELP YOU</h2>
              <p>return Policy</p>
              <p>100% Payment Protection</p>
              <p>Help</p>
            </div>
            <div class="col item social mt-4">
              <a style={{background:"#3B5998"}} href="#"><i class="fa fa-facebook"></i></a>
              <a style={{background:"#55ACEE"}} href="#"><i class="fa fa-twitter"></i></a>
              <a style={{background:"radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)"}} href="#"><i class="fa fa-instagram"></i></a>
              <a style={{background:"#25d366"}} href="#"><i class="fa fa-whatsapp"></i></a>
              <a style={{background:"#0088cc"}} href="#"><i class="fa fa-telegram"></i></a></div>
          </div>
          <p class="copyright"> © 2023-2024 WEBITTS.COM</p>
        </div>
      </footer>
    </div>

  );
}
