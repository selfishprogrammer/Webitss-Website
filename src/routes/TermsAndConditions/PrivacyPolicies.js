import React from "react";
import FooterScreen from "../../components/FooterScreen";
import Navbar from "../../components/Navbar";

export default function PrivacyPolicies() {
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
          PRIVACY & POLICY
        </div>
        <p
          className="my-5"
          style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}
        >
          “WebITss” created privacy statements to show our visitors a commitment
          to privacy. Customer privacy is very important to us. The page
          describes the type of personal information that is collected and how
          we use it.
        </p>

        <div
          className="my-5"
          id="text"
          style={{ fontSize: 25, fontFamily: "serif" }}
        >
          LOG FILES
        </div>
        <p
          className="my-5"
          style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}
        >
          Like many other sites, we use log files. These files are used to log
          visitors to the site. These log files contain internet protocol (IP)
          address, Internet Service Provider (ISP), browser type,
          referring/existing pages, date/time stamp and the record of number of
          clicks.
        </p>
        <div
          className="my-5"
          id="text"
          style={{ fontSize: 25, fontFamily: "serif" }}
        >
          {"Purposes of Data Gathering".toLocaleUpperCase()}
        </div>
        <p
          className="my-5"
          style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}
        >
          “WebITss” uses your IP address to diagnose problems with our server
          and to administer our site. “WebITss” site registration form requires
          users' contact information (such as name and email ID) and address
          information (such as a pin code). The email address used to send mail
          alerts regarding our offers and services. Profile data and
          demographics are used to enhance the visitors' experience on our site,
          displaying content that may interest them.
        </p>
        <div
          className="my-5"
          id="text"
          style={{ fontSize: 25, fontFamily: "serif" }}
        >
          {"Security".toLocaleUpperCase()}
        </div>
        <p
          className="my-5"
          style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}
        >
          "WebITss" ensures that all your information shared with us is secure.
          We do not share with any third party under any circumstances. We will
          not sell, lease or distribute your personal data to third parties
          unless your permission or the law allows us to do so.
        </p>

        <div
          className="my-5"
          id="text"
          style={{ fontSize: 25, fontFamily: "serif" }}
        >
          {"Cookies".toLocaleUpperCase()}
        </div>
        <p
          className="my-5"
          style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}
        >
          We use cookies. A cookie is a small file which needs your permission
          to be placed on your PC’s hard drive. As you agree, the cookie helps
          analyse web traffic and let you know when you visit a particular site.
          Cookies help you tailor web applications’ operation as per your needs
          by collecting and remembering information about your preferences.
          Cookies help us to offer you the best insight of the site by enabling
          us to monitor which pages you find useful. A cookie doesn’t give
          access to your computer data. You can either decline or accept
          cookies. In case, you feel any information we are sharing is incorrect
          or incomplete, feel free to mail us. If you have any doubt related to
          our privacy policy, mail us.
        </p>
        <div
          className="my-5"
          id="text"
          style={{ fontSize: 25, fontFamily: "serif" }}
        >
          {"Consent".toLocaleUpperCase()}
        </div>
        <p
          className="my-3"
          style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}
        >
          By using our site, you hereby consent to our privacy policy.
        </p>
        <div
          className="my-5"
          id="text"
          style={{ fontSize: 25, fontFamily: "serif" }}
        >
          {"Update".toLocaleUpperCase()}
        </div>
        <p
          className="my-3"
          style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}
        >
          This Privacy Policy can be updated. In case, we update, the changes
          will be posted here.
        </p>
      </div>
      <FooterScreen />
    </div>
  );
}
