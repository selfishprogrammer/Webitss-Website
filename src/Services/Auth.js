import React from "react";
export default class Auth {
  static setUser = (data) => {
    localStorage.setItem("users", JSON.stringify(data));
  };
  static setUserSecret = (data) => {
    localStorage.setItem("usersSecret", JSON.stringify(data));
  };
  static setUserEmail = (data) => {
    localStorage.setItem("usersEmail", JSON.stringify(data));
  };
  static getUser = () => {
    const data = localStorage.getItem("users");
    if (!data) {
      return null;
    } else {
      return JSON.parse(data);
    }
  };
  static getUserSecret = () => {
    const data = localStorage.getItem("usersSecret");
    if (!data) {
      return null;
    } else {
      return JSON.parse(data);
    }
  };
  static getUserEmail = () => {
    const data = localStorage.getItem("usersEmail");
    if (!data) {
      return null;
    } else {
      return JSON.parse(data);
    }
  };
}
