import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ForgotPasswoedPage from "./ForgotPassword/ForgotPasswoedPage";
import { setLogin, setUserData } from "./Redux/user";
import RegisterPage from "./RegisterPage/RegisterPage";
import ResetPasswordPage from "./ResetPassword.js/ResetPasswordPage";
import AboutPage from "./routes/AboutPage/AboutPage";
import AdminPage from "./routes/AdminPage/AdminPage";
import TotalDemoProjects from "./routes/AdminPage/TotalDemoProjects";
import TotalDevelopers from "./routes/AdminPage/TotalDevelopers";
import TotalOrders from "./routes/AdminPage/TotalOrders";
import TotalQueries from "./routes/AdminPage/TotalQueries";
import TotalUsers from "./routes/AdminPage/TotalUsers";
import Contactus from "./routes/Contactus/Contactus";
import DetailsPage from "./routes/DetailsPage";
import HomePage from "./routes/HomePage/HomePage";
import LoginPage from "./routes/LoginPage/LoginPage";
import OrderProjects from "./routes/OrderProjects/OrderProjects";
import OtpPage from "./routes/OtpPage/OtpPage";
import ProfilePageCheck from "./routes/ProfilePage.js/ProfilePageCheck";
import PrivacyPolicies from "./routes/TermsAndConditions/PrivacyPolicies";
import TermsAndConditions from "./routes/TermsAndConditions/TermsAndConditions";
import Auth from "./Services/Auth";
import NewdetailsPage from "./routes/NewdetailsPage"

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
        <Route path="/contact" element={<Contactus />} />
        <Route path="/order" element={<OrderProjects />} />
        <Route path="/profile" element={<ProfilePageCheck />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/tc" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicies />} />
        <Route path="/new-details" element={<NewdetailsPage/>}/>
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
        <Route path="/order" element={<OrderProjects />} />
        <Route path="/tc" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicies />} />
        <Route path="/profile" element={<ProfilePageCheck />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/totalUsers" element={<TotalUsers />} />
        <Route path="/totalOrders" element={<TotalOrders />} />
        <Route path="/totalQueries" element={<TotalQueries />} />
        <Route path="/totalDemoProject" element={<TotalDemoProjects />} />
        <Route path="/totalDevelopers" element={<TotalDevelopers />} />
      </Routes>
    );
  };
  return (
    <BrowserRouter>
      {isLogin || userId ? afterLogin() : beforeLogin()}
    </BrowserRouter>
  );
}
