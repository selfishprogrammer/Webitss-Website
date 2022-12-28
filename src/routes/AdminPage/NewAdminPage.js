import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Services from "../../Services/Service";
import AdminNav from "./AdminNav";
import { useNavigate } from "react-router";
import DetailsCard from "../../components/DetailsCard";

const NewAdminPage = () => {
  return (
    <>
      <div class="container-fluid" style={{ marginTop: 80 }}>
        <div className="row">
          <div class="col-md-8">
            <div
              className="shadow-lg bg-white p-5"
              style={{ borderRadius: 20 }}
            >
              <div className="text-center" style={{ fontSize: 30 }}>
                TOTAL USERS
              </div>
              <div
                className="mt-5"
                style={{ overflowY: "auto", height: "70vh" }}
              >
                <div class="table-responsive">
                  <table class="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          PHONE
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          VERIFIED
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          TYPE
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          STATUS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          Sukanta Dandapat
                        </td>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          abc@gmail.com
                        </td>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          1234567890
                        </td>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          Verified
                        </td>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          Consumer
                        </td>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          Activated
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          Rahul Jha
                        </td>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          abc@gmail.com
                        </td>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          1234567890
                        </td>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          Verified
                        </td>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          Consumer
                        </td>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          Activated
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          Loknath Das
                        </td>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          abc@gmail.com
                        </td>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          1234567890
                        </td>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          Verified
                        </td>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          Consumer
                        </td>
                        <td
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          Activated
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <DetailsCard />
          </div>
        </div>
      </div>
    </>
  );
};
export default NewAdminPage;
