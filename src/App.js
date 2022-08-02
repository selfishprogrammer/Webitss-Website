import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ForgotPasswoedPage from "./ForgotPassword/ForgotPasswoedPage";
import { setLogin, setUserData } from "./Redux/user";
import RegisterPage from "./RegisterPage/RegisterPage";
import ResetPasswordPage from "./ResetPassword.js/ResetPasswordPage";
import AboutPage from "./routes/AboutPage/AboutPage";
import Contactus from "./routes/Contactus/Contactus";
import DetailsPage from "./routes/DetailsPage";
import HomePage from "./routes/HomePage/HomePage";
import LoginPage from "./routes/LoginPage/LoginPage";
import OtpPage from "./routes/OtpPage/OtpPage";
import Auth from "./Services/Auth";

export default function App() {
  const [userId, setuserId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const data = await Auth.getUser();
    console.log("data=======>", data);
    if (data) {
      dispatch(setLogin(true));
      dispatch(setUserData(data));
    } else {
      dispatch(setLogin(false));
      dispatch(setUserData(null));
    }
    setuserId(data?.user_id ? data?.user_id : data?.email);
  };
  const { isLogin } = useSelector((state) => state.user);
  const beforeLogin = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswoedPage />} />
        <Route path="/resetPassword" element={<ResetPasswordPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/otp" element={<OtpPage />} />
      </Routes>
    );
  };

  const afterLogin = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    );
  };
  return (
    <BrowserRouter>
      {isLogin || userId ? afterLogin() : beforeLogin()}
    </BrowserRouter>
  );
}
