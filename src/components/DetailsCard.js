import React from "react";

export default function DetailsCard() {
  return (
    <div
      class="shadow-sm bg-white p-3 border"
      style={{ borderRadius: 10, marginTop: 100 }}
    >
      <div
        className="text-center my-4"
        style={{ fontFamily: "monospace", fontWeight: "bold", fontSize: 25 }}
      >
        Rahul Jha
      </div>
      <div
        className="container mx-4"
        style={{ width: "99%", alignSelf: "center" }}
      >
        <tbody className="">
          <tr>
            <td
              style={{
                fontFamily: "monospace",
                width: "40%",
              }}
            >
              Mobile
            </td>
            <td
              style={{
                fontFamily: "monospace",
                alignItems:"center",
                width: "15%",
              }}
            >
              :
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "50%",
              }}
            >
              1234567890
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontFamily: "monospace",
                width: "40%",
              }}
            >
              gmail
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "15%",
              }}
            >
              :
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "50%",
              }}
            >
              rahul@gmail.com
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontFamily: "monospace",
                width: "40%",
              }}
            >
              account type
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "15%",
              }}
            >
              :
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "50%",
              }}
            >
              consumer{" "}
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontFamily: "monospace",
                width: "40%",
              }}
            >
              activated in
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "15%",
              }}
            >
              :
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "50%",
              }}
            >
              26-12-2022
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontFamily: "monospace",
                width: "40%",
              }}
            >
              status
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "15%",
              }}
            >
              :
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "50%",
              }}
            >
              activated
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontFamily: "monospace",
                width: "40%",
              }}
            >
              project
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "15%",
              }}
            >
              :
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "50%",
              }}
            >
              e-commerce website
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontFamily: "monospace",
                width: "40%",
              }}
            >
              advance
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "15%",
              }}
            >
              :
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "50%",
              }}
            >
              10,000
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontFamily: "monospace",
                width: "40%",
              }}
            >
              due payment
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "15%",
              }}
            >
              :
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "50%",
              }}
            >
              10,000
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontFamily: "monospace",
                width: "40%",
              }}
            >
              developer
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "15%",
              }}
            >
              :
            </td>
            <td
              style={{
                fontFamily: "monospace",
                width: "50%",
              }}
            >
              Rahul Jha
            </td>
          </tr>
        </tbody>
      </div>

      {/* <div className="col-md-4">
          <img
            width="60"
            height="60"
            src="https://images.pexels.com/photos/55838/flower-rose-blossom-bloom-55838.jpeg?cs=srgb&dl=pexels-pixabay-55838.jpg&fm=jpg"
            class="rounded mx-auto d-block"
            alt="..."
          />
        </div> */}
    </div>
  );
}
