import axios from "axios";
import { base_url } from "../constants/Urls";

export const postReq2 = (des_url, data) => {
  let url = base_url + des_url;
  console.log(url);
  return new Promise((resolve, reject) => {
    let headers = "Content-Type: application/json";

    axios
      .post(url, data, headers)
      .then(function (response) {
        resolve(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        reject(error);
      })
      .finally(function () {
        // always executed
      });
  });
};
export default class Api {
  // This a get request
  static get = async (url) => {
    console.log(url);
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(function (response) {
          // console.log('get country', response.data);
          resolve(response.data);
        })
        .catch(function (error) {
          console.log("get country", error);
          reject(error);
        })
        .finally(function () {
          // always executed
        });
    });
  };

  // This a post request
  static post = async (data) => {
    return new Promise((resolve, reject) => {
      let headers = "Content-Type: application/json";
      axios
        .post(base_url, headers, data)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error.response);
        });
    });
  };

  // This a put request
  static put = async (url, data) => {
    return new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  };
}
