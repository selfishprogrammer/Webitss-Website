import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ErrorText from "../../components/ErrorText";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router";
import Auth from "../../Services/Auth";
import ErrorToast from "../../components/ErrorToast";
import Services from "../../Services/Service";
import SuccessModal from "../../components/SuccessModal";

export default function OrderProjects() {
  const [order, setorder] = useState("");
  const [orderHasError, setorderHasError] = useState("");
  const [name, setname] = useState("");
  const [nameHasError, setnameHasError] = useState("");
  const [email, setemail] = useState("");
  const [emailHasError, setemailHasError] = useState("");
  const [phone, setphone] = useState("");
  const [phoneHasError, setphoneHasError] = useState("");
  const [orderTypes, setorderTypes] = useState("");
  const [orderTypesHasError, setorderTypesHasError] = useState("");
  const [backendResponce, setbackendResponce] = useState("");
  const [order_details, setorder_details] = useState("");
  const [order_detailsHasError, setorder_detailsHasError] = useState("");
  const [orderType, setorderType] = useState([]);
  const [isVisible, setisVisible] = useState(false);
  const { isLogin } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUserDetails();
  }, []);
  const fetchUserDetails = async () => {
    const data = await Auth.getUser();
    console.log("data++++>>", data);
    setname(data?.name);
    setemail(data?.email);
    setphone(data?.phone);
    if (!data) {
      console.log("isLogin", isLogin);
      navigate("/login");
    }
  };
  const websitesType = [
    "Static Website",
    "Dynamic Websites",
    "Single Page Application",
  ];
  const AppType = ["Android App", "IOS App", "Both Android & IOS"];
  const DesktopAppType = ["Dynamic", "Simple(Static)"];
  const chooseYourProject = (val) => {
    setorder(val);
    switch (val) {
      case "Websites":
        setorderType(websitesType);
        break;
      case "Mobile Applicartion":
        setorderType(AppType);
        break;
      case "Desktop Application":
        setorderType(DesktopAppType);
        break;
      default:
        setorderType([]);
        break;
    }
  };
  const resetErrorField = () => {
    setnameHasError("");
    setemailHasError("");
    setphoneHasError("");
    setorderHasError("");
    setorderTypesHasError("");
    setorder_detailsHasError("");
  };
  const resetInputField = () => {
    setorder("");
    setorderTypes("");
    setorder_details("");
  };
  const addOrder = async () => {
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
    if (order.length <= 0) {
      setorderHasError("Field Cannot Be Empty!");
    }
    if (orderTypes.length <= 0) {
      setorderTypesHasError("Field Cannot Be Empty!");
    }
    if (order_details.length <= 0) {
      setorder_detailsHasError("Field Cannot Be Empty!");
    } else {
      if (name.length <= 6 || name.length >= 15) {
        setnameHasError("Length Of Name Should Between 6 to 15 Character!");
      } else if (!emailReg.test(email)) {
        setemailHasError("Please Enter Valid Email Address");
      } else if (phone.length < 10 || phone.length > 10) {
        setphoneHasError("Phone Number Must be Between 10 Digit");
      } else if (order_details.length <= 50) {
        setorder_detailsHasError("Order Details Must be Between 50 Characters");
      } else {
        const orderData = {
          name,
          email,
          phone,
          order,
          orderType: orderTypes,
          details_of_order: order_details,
          status: "received",
          developer: "",
          price: "",
          advance_payment: "",
          due_payment: "",
          rated: "",
        };

        const orderedProjects = await Services.orderProjects(orderData);
        if (orderedProjects?.status === "true") {
          setisVisible(true);
          resetInputField();
          setTimeout(() => {
            setisVisible(false);
          }, 3000);
        } else {
          setbackendResponce(orderedProjects?.data);
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
          CONNECT WITH US FOR YOUR PROJECT
        </h1>
        <div className="p-5 my-5  shadow-lg " style={{ borderRadius: 10 }}>
          <ErrorToast backendResponce={backendResponce} />
          <div className="form-group">
            <input
              style={{ borderRadius: 10, borderWidth: 0, height: 60 }}
              className="form-control shadow"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <ErrorText errorMsg={nameHasError} />
          </div>
          <SuccessModal
            title="Your Order Has Successfully Received! Please Wait, Our Team Will
          Connect With You"
            IsVisible={isVisible}
          />
          <div className="form-group">
            <input
              disabled={true}
              style={{ borderRadius: 10, borderWidth: 0, height: 60 }}
              className="form-control shadow"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <ErrorText errorMsg={emailHasError} />
          </div>
          <div className="form-group">
            <input
              disabled={true}
              style={{ borderRadius: 10, borderWidth: 0, height: 60 }}
              className="form-control shadow"
              placeholder="Your Phone"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
            <ErrorText errorMsg={phoneHasError} />
          </div>
          <div className="form-group">
            <select
              onChange={(e) => chooseYourProject(e.currentTarget.value)}
              style={{ borderRadius: 10, borderWidth: 0, height: 60 }}
              className="form-control shadow"
            >
              <option value="">--Choose what you need--</option>
              <option value="Websites">Websites/Web Application</option>
              <option value="Mobile Applicartion">Mobile Applicartion</option>
              <option value="Desktop Application">Desktop Application</option>
            </select>
            <ErrorText errorMsg={orderHasError} />
          </div>
          {order !== "" ? (
            <div className="form-group">
              <select
                style={{ borderRadius: 10, borderWidth: 0, height: 60 }}
                className="form-control shadow"
                value={orderTypes}
                onChange={(e) => setorderTypes(e.target.value)}
              >
                {orderType.map((item, key) => {
                  return (
                    <option key={key} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <ErrorText errorMsg={orderTypesHasError} />
            </div>
          ) : null}

          <div className="form-group">
            <textarea
              value={order_details}
              onChange={(e) => setorder_details(e.target.value)}
              className="form-control shadow"
              placeholder="Express Your Project Here"
              style={{
                width: "100%",
                height: 100,
                borderRadius: 10,
                borderWidth: 0,
                paddingTop: 36,
              }}
            ></textarea>
            <ErrorText errorMsg={order_detailsHasError} />
          </div>

          <div className="form-group">
            <button
              onClick={addOrder}
              className="btn btn-warning form-control shadow"
              style={{
                borderRadius: 10,
                fontFamily: "monospace",
                borderWidth: 0,
                height: 60,
              }}
            >
              <b>SUBMIT YOUR DETAILS</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
