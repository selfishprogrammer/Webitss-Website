/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import ErrorText from "../../components/ErrorText";
import ErrorToast from "../../components/ErrorToast";
import Navbar from "../../components/Navbar";
import SuccessModal from "../../components/SuccessModal";
import Auth from "../../Services/Auth";
import Services from "../../Services/Service";

export default function () {
  const [name, setname] = useState("");
  const [nameHasError, setnameHasError] = useState("");
  const [email, setemail] = useState("");
  const [emailHasError, setemailHasError] = useState("");
  const [phone, setphone] = useState("");
  const [phoneHasError, setphoneHasError] = useState("");
  const [queries, setqueries] = useState("");
  const [queriesHasError, setqueriesHasError] = useState("");
  const [backendResponce, setbackendResponce] = useState("");
  const [Loggedin, setLoggedin] = useState(false);
  const [isVisible, setisVisible] = useState(false);
  useEffect(() => {
    fetchUserDetails();
  }, []);
  const fetchUserDetails = async () => {
    const data = await Auth.getUser();
    console.log("data++++>>", data);
    if (data) {
      setLoggedin(true);
    }
    setname(data?.name);
    setemail(data?.email);
    setphone(data?.phone);
  };
  const resetErrorField = () => {
    setnameHasError("");
    setemailHasError("");
    setphoneHasError("");
    setqueriesHasError("");
  };
  const resetInputField = () => {
    if (Loggedin) {
      setqueries("");
    } else {
      setname("");
      setemail("");
      setphone("");
      setqueries("");
    }
  };
  const contactUs = async () => {
    resetErrorField();
    var emailReg =
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (name.length <= 0) {
      setnameHasError("Field Cannot Be Empty!");
    }
    if (email.length <= 0) {
      setemailHasError("Field Cannot Be Empty!");
    }
    if (phone.length <= 0) {
      setphoneHasError("Field Cannot Be Empty!");
    }
    if (queries.length <= 0) {
      setqueriesHasError("Field Cannot Be Empty!");
    } else {
      if (name.length <= 6 || name.length >= 15) {
        setnameHasError("Length Of Name Should Between 6 to 15 Character!");
      } else if (!emailReg.test(email)) {
        setemailHasError("Please Enter Valid Email Address");
      } else if (phone.length < 10 || phone.length > 10) {
        setphoneHasError("Phone Number Must be Between 10 Digit");
      } else {
        const contactData = {
          name,
          email,
          phone,
          queries,
        };
        const data = await Services.contactUs(contactData);
        if (data?.status === "true") {
          setisVisible(true);
          resetInputField();
          setTimeout(() => {
            setisVisible(false);
          }, 3000);
        } else {
          setbackendResponce(data?.data);
        }
      }
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1
          id="text"
          style={{
            textAlign: "center",
            fontFamily: "serif",
            marginTop: 50,
            marginBottom: 50,
            color: "blue",
          }}
        >
          CONTACT US
        </h1>
        <div className="p-5 my-5  shadow-lg " style={{ borderRadius: 10 }}>
          <ErrorToast backendResponce={backendResponce} />
          <SuccessModal
            title="Thanks for contact us we will back to you soon! "
            IsVisible={isVisible}
          />
          <div className="form-group">
            <input
              style={{ borderRadius: 10, borderWidth: 0, height: 60 }}
              className="form-control shadow"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              disabled={Loggedin}
            />
            <ErrorText errorMsg={nameHasError} />
          </div>
          <div className="form-group">
            <input
              style={{ borderRadius: 10, borderWidth: 0, height: 60 }}
              className="form-control shadow"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              disabled={Loggedin}
            />
            <ErrorText errorMsg={emailHasError} />
          </div>
          <div className="form-group">
            <input
              style={{ borderRadius: 10, borderWidth: 0, height: 60 }}
              className="form-control shadow"
              placeholder="Your Phone"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              disabled={Loggedin}
            />
            <ErrorText errorMsg={phoneHasError} />
          </div>
          <div className="form-group">
            <textarea
              value={queries}
              onChange={(e) => setqueries(e.target.value)}
              className="form-control shadow"
              placeholder="Your Queries"
              style={{
                width: "100%",
                height: 150,
                borderRadius: 10,
                borderWidth: 0,
                paddingTop: 36,
              }}
            ></textarea>
            <ErrorText errorMsg={queriesHasError} />
          </div>
          <div className="form-group">
            <button
              onClick={contactUs}
              className="btn btn-warning form-control shadow"
              style={{
                borderRadius: 10,
                fontFamily: "monospace",
                borderWidth: 0,
                height: 60,
              }}
            >
              <b>Contact us</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
