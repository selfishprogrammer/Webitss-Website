import React from "react";

export default function ErrorText({ errorMsg }) {
  return (
    <>
      {errorMsg === "" ? null : (
        <div className="mx-2" style={{ color: "red" }}>
          <i class="fa fa-times" aria-hidden="true"></i>&nbsp;
          {errorMsg}
        </div>
      )}
    </>
  );
}
