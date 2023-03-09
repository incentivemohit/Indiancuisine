import React from "react";
import Header from "./Header";
import img from "./mkk.jpg";

function About() {
  return (
    <>
      <Header />
      <div
        className=" d-flex justify-content-center align-items-center bg-dark"
        style={{ height: "100vh" }}
      >
        <div className="card m-auto p-4 " style={{ height: "25rem" }}>
          <div className="m-auto" style={{ width: "200px", height: "200px" }}>
            <img src={img} alt="" className="w-100 h-100  rounded-circle" />
          </div>

          <h1 className="display-4 m-auto">!! Hii Visitor !!</h1>
          <p className="lead  m-auto">
            My Name is Mohit Kumar. I have completed B.tech from AIACTR (New
            Delhi). This Site has been developed by me. Send me Feedback if you
            find any bug.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
