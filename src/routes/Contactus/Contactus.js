/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import ErrorText from "../../components/ErrorText";
import ErrorToast from "../../components/ErrorToast";
import Navbar from "../../components/Navbar";
import SuccessModal from "../../components/SuccessModal";
import Auth from "../../Services/Auth";
import Services from "../../Services/Service";
import DetailsFirst from "../../components/DetailsFirst.js"

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
      {/* <div className="container">
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
      </div> */}
      <div class="container-fluid pt-3">
        <div class="jumbotron" style={{ background: "#0B63B5" }}>
          <div class="text-center">
            <h1 style={{ color: "white", fontFamily: 'Lemonada', fontWeight: "800", fontSize: "48px", textTransform: "uppercase" }}>software development</h1>
          </div>
        </div>
      </div>
      <div class="container-fluid p-3">
        <div class="row ">
          <div class="col-md-6">
            {/* <p> */}
            <h2>First Part</h2>
            <p>
            Both versions convey a topic; it’s pretty easy to predict that 
            the paragraph will be about epidemiological evidence, but only the second version establishes 
            an argumentative point and puts it in context. The paragraph doesn’t just describe the epidemiological evidence; 
            it shows how epidemiology is telling the same story as etiology. Similarly, 
            while Version A doesn’t relate to anything in particular, Version B immediately suggests that 
            the prior paragraph addresses the biological pathway (i.e. etiology) of a disease and that the 
            new paragraph will bolster the emerging hypothesis with a different kind of evidence. As a reader, 
            it’s easy to keep track of how the paragraph about cells and chemicals and such relates to the paragraph about 
            populations in different places.<br></br></p>
            {/* </p> */}
            <h2>Second Part</h2>
            <p>
            Knowing this convention of academic writing can help you both read and write more effectively. When you’re reading a complicated academic piece for the first time, you might want to go through reading only the first sentence or two of each paragraph to get the overall outline of the argument. Then you can go back and read all of it with a clearer picture of how each of the details fit in. And when you’re writing, you may also find it useful to write the first sentence of each paragraph (instead of a topic-based outline) to map out a thorough argument before getting immersed in sentence-level wordsmithing.</p>
          </div>
              <div class="col-md-6">
                <div class="text-center">
              <img src={""} width='50%' height='50%' class="img-fluid" alt="" />
              </div>
            </div> 
        </div>
      </div>
      <div class="container-fluid pt-3">
        <div class="jumbotron" style={{ background: "#0B63B5" }}>
        </div>
      </div>
    </div>
  );
}
