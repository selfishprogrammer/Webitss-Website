import { postReq2 } from "./Api";

export default class Services {
  static userRegister = async (data) => {
    return postReq2("Authentication/register.php", JSON.stringify(data));
  };
  static userLogin = (data) => {
    return postReq2("Authentication/login.php", JSON.stringify(data));
  };
  static resetPassword = (data) => {
    return postReq2("Authentication/resetPassword.php", JSON.stringify(data));
  };
  static forgotPassword = (data) => {
    return postReq2("Authentication/forgotPassword.php", JSON.stringify(data));
  };
  static contactUs = (data) => {
    return postReq2("Components/contact_us.php", JSON.stringify(data));
  };
  static verifyOtp = (data) => {
    return postReq2("Authentication/verifyOtp.php", JSON.stringify(data));
  };
  static generateOtp = (data) => {
    return postReq2("Authentication/generateOtp.php", JSON.stringify(data));
  };
  static orderProjects = (data) => {
    return postReq2("Components/orderRecieved.php", JSON.stringify(data));
  };
  static getPolicyVersion = (data) => {
    return postReq2(
      "Authentication/getPolicyVersion.php",
      JSON.stringify(data)
    );
  };
  static acceptPolicyVersion = (data) => {
    return postReq2("Authentication/policyVersion.php", JSON.stringify(data));
  };
  static orderHistory = (data) => {
    return postReq2("Authentication/userHistory.php", JSON.stringify(data));
  };
  static totalUsers = () => {
    return postReq2("Authentication/TotalUsers.php");
  };
  static totalOrders = (status) => {
    return postReq2(
      "Authentication/TotalOrdersReceived.php",
      JSON.stringify(status)
    );
  };
  static totaQueries = () => {
    return postReq2("Authentication/TotalQueries.php");
  };
  static reviewDetails = (data) => {
    return postReq2("Components/DemoProjects.php", JSON.stringify(data));
  };
  static demoProjects = (data) => {
    return postReq2(
      "Authentication/TotalDemoProject.php",
      JSON.stringify(data)
    );
  };
  static getUserDetailsAndOrder = (data) => {
    return postReq2(
      "Authentication/getUserDetailsandOrderInfo.php",
      JSON.stringify(data)
    );
  };
  static totalDevelopers = () => {
    return postReq2("Authentication/TotalDevelopers.php");
  };
  static getDevelopersDetailsAndOrder = (data) => {
    return postReq2(
      "Authentication/getDevelopersDetailsAndOrder.php",
      JSON.stringify(data)
    );
  };
  static updateUserOrDeveloperAccountStatus = (data) => {
    return postReq2(
      "Authentication/updateUserStatus.php",
      JSON.stringify(data)
    );
  };
}
