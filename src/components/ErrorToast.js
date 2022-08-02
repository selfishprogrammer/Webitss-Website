import React from "react";

export default function ErrorToast({ backendResponce }) {
  return (
    <>
      {backendResponce === "" ? null : (
        <div className="m-2 shadow-sm bg-danger" style={{ borderRadius: 8 }}>
          <p
            className="p-3"
            style={{ color: "white", fontFamily: "serif", fontSize: 16 }}
          >
            <i class="fa fa-circle" aria-hidden="true"></i>&nbsp;
            {backendResponce}
          </p>
        </div>
      )}
    </>
  );
}
