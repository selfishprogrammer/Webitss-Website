import React from "react";
import FooterScreen from "../../components/FooterScreen";
import Navbar from "../../components/Navbar";

export default function TermsAndConditions() {
  return (
    <div>
      <Navbar />
      <img
        src="https://intelog.net/wp-content/uploads/2019/05/Web-Development0.jpg"
        style={{ width: "100%", height: 500 }}
      />
      <div className="container">
        <div
          className="my-5"
          id="text"
          style={{ fontSize: 30, fontFamily: "serif" }}
        >
          TERMS & CONDITIONS
        </div>
        <p
          className="my-5"
          style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}
        >
          WebItss is a leading provider of services including website
          development, website design, website maintenance, e-commerce solution,
          android app development etc. The below-mentioned conditions set out
          the terms under which WebItss Pvt. Ltd. will proffer services to the
          clients.
        </p>

        <div
          className="my-5"
          id="text"
          style={{ fontSize: 25, fontFamily: "serif" }}
        >
          TERMS & CONDITIONS POLICY
        </div>
        <ul>
          <li
            style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}
            className="my-3"
          >
            All information available on the Website is the personal property of
            “WebItss”. Copying material from the website to any public or
            private electronic recovery system is strictly prohibited. Do not
            use any information on our website without our written permission.
            Otherwise you may face huge fines.
          </li>
          <li
            style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}
            className="my-3"
          >
            We take dedicated effort to deliver your work within the time frame
            mentioned in each package offered by us or the conversation we have
            before starting the project. Scenarios or for any particular reason
            it can take some more reasonable time and you are agreed to give
            that time for the quality job.
          </li>
          <li
            style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}
            className="my-3"
          >
            We reserve the right to modify our website’s information in a timely
            manner. To stay updated, please go through our website from time to
            time.
          </li>
          <li
            style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}
            className="my-3"
          >
            Your order will be accepted after suitable advance payment.
            Otherwise your order will be cancelled within 3 days.
          </li>
          <li
            style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}
            className="my-3"
          >
            Development of your project will begin within 3 days of your advance
            payment.
          </li>
        </ul>
        <div
          className="my-5"
          id="text"
          style={{ fontSize: 25, fontFamily: "serif" }}
        >
          {"Cancellation & Refund Policy".toLocaleUpperCase()}
        </div>
        <p
          className="my-5"
          style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}
        >
          You can cancel a development order within 3 days of order placement.
          Otherwise advance payment will not be refunded. 50% refund may be
          possible if your order is canceled within 7 days.
        </p>
        <div
          className="my-5"
          id="text"
          style={{ fontSize: 25, fontFamily: "serif" }}
        >
          {"Disclaimer Policy".toLocaleUpperCase()}
        </div>
        <p
          className="my-5"
          style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}
        >
          We strive to ensure that all information on our website is accurate
          and up to date. Mentioning errors and incompleteness in any
          description is completely unintentional. You need to verify the
          information individually without relying on the content of the
          website.
        </p>

        <div
          className="my-5"
          id="text"
          style={{ fontSize: 25, fontFamily: "serif" }}
        >
          {"Update".toLocaleUpperCase()}
        </div>
        <p
          className="my-5"
          style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}
        >
          The terms and conditions can be updated. In case, we update, the
          changes will be posted here
        </p>
      </div>
      <FooterScreen />
    </div>
  );
}
