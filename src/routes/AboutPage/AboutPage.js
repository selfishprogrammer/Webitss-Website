/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import FooterScreen from "../../components/FooterScreen";
import Navbar from "../../components/Navbar";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <h1
        id="text"
        style={{
          textAlign: "center",
          fontFamily: "serif",
          color: "blue",
          marginTop: 15,
          marginBottom: 15,
        }}
      >
        ABOUT US
      </h1>
      <div className="container">
        <p
          id="text"
          style={{
            textAlign: "center",
            fontFamily: "monospace",
            marginTop: 15,
            marginBottom: 15,
            fontSize: 50,
            fontWeight: "bold",
          }}
        >
          We Are Here To Provide Websites Mobile Applications To New Startups in
          Low Rates...
        </p>
        <p
          style={{
            textAlign: "center",
            fontFamily: "monospace",
            margin: 15,
            fontSize: 15,
          }}
        >
          With the 5+ years of experience in the field of Web and App
          Development, we will provide a websites and app to new startups in
          very low cost.
        </p>
      </div>

      <div className="container" style={{ marginTop: 100 }}>
        <div className="row">
          <div className="col-md-4">
            <div className="shadow-lg bg-white" id="steps2">
              <img
                src="https://cdn.mos.cms.futurecdn.net/xY8C5oXg6dCknTCKDfCfTi-1200-80.jpg"
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
                Our Work-Approach
              </h4>
              <p
                class="text-center px-4 pt-2 pb-5"
                style={{
                  fontFamily: "monospace",
                  textAlign: "center",
                  // fontWeight: "bold",
                }}
              >
                We Are Here To Provide Websites Mobile Applications To New
                Startups in Low Rates And In Limited Time With Free External
                Support.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow-lg bg-white" id="steps2">
              <img
                src="https://www.clipartkey.com/mpngs/m/25-258664_conference-clipart-company-meeting-online-on-demand-home.png"
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
                Our Developers/Teams
              </h4>
              <p
                class="text-center px-4 pt-2 pb-4"
                style={{
                  fontFamily: "monospace",
                  textAlign: "center",
                  // fontWeight: "bold",
                }}
              >
                Our Developers Are the 5+ years of experience in the field of
                Web , App Development and Desktop Applications , We Will Provide
                A Websites And Apps To New Startups In Very Low Cost.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow-lg bg-warning" id="steps2">
              <h4
                class="py-3"
                style={{
                  fontFamily: "monospace",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                How We Connects With Clients
              </h4>
              <p
                class="text-center px-4 pt-2 pb-4"
                style={{
                  fontFamily: "monospace",
                  textAlign: "center",
                  // fontWeight: "bold",
                }}
              >
                When We Will Submit Your Information You Will Get A Chat Options
                By Which You Can Chat With Us And Can Provide More Informations
                About Your Requirements. We Will Always There For You To Help.
              </p>
              <p
                class="text-center px-4 pt-2 pb-4"
                style={{
                  fontFamily: "monospace",
                  textAlign: "center",
                  // fontWeight: "bold",
                }}
              >
                Once You Will Provide Your Information Our Developers Will Start
                Working On Your Project And Also Will Be Connected With You In
                Webitss Chat And WhatsApp.{" "}
              </p>
              <p
                className="pb-3"
                style={{
                  fontFamily: "monospace",
                  textAlign: "center",
                }}
              >
                Thanks From Webitss
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterScreen />
    </div>
  );
}
