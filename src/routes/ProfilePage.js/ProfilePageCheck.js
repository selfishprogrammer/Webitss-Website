import React, { useEffect, useState } from "react";
import Auth from "../../Services/Auth";
import ProfilePage from "./ProfilePage";
import ProfilePageNotLogin from "./ProfilePageNotLogin";

export default function ProfilePageCheck() {
  const [loggedIn, setloggedIn] = useState("");
  useEffect(() => {
    checkLoggedInOrNot();
  }, []);
  const checkLoggedInOrNot = async () => {
    const email = await Auth.getUserEmail();
    setloggedIn(email);
  };
  return (
    <div>{loggedIn === null ? <ProfilePageNotLogin /> : <ProfilePage />}</div>
  );
}
