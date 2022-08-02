import Api, { postReq, postReq2 } from "./Api";

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
}
