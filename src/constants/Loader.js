import React from "react";
import { Audio } from "react-loader-spinner";

export default function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        top: "50%",
        width: "100%",
        height: "100%",
        zIndex: 9999,
      }}
    >
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
