import React, { useState } from "react";
import "../../index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState({
    trueAlert: false,
    falseAlert: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (name && email && password === cpassword) {
        await axios
          .post("/api/v1/register", { name, email, password })
          .then((res) => {
            if (res.status === 201) {
              setShowAlert({
                trueAlert: true,
                falseAlert: false,
              });
              setTimeout(() => {
                navigate("/signin");
              }, 1500);
            } else {
              setShowAlert({
                trueAlert: false,
                falseAlert: true,
              });
              setTimeout(() => {
                setShowAlert({
                  falseAlert: false,
                });
              }, 3000);
            }
          });
      } else {
        alert("Oops! Something is missing !!!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {showAlert.trueAlert ? (
        <div className="alert alert-success text-center" role="alert">
          Congratulations!! You have Registered Successfully!
        </div>
      ) : (
        ""
      )}
      {showAlert.falseAlert ? (
        <div className="alert alert-warning text-center" role="alert">
          !! Oops, You are already registered!
        </div>
      ) : (
        ""
      )}

      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <form
          className="form-signin card  text-center form-body"
          onSubmit={handleSubmit}
        >
          <img
            className="mb-4 m-auto"
            src={require("./logo.jpg")}
            alt=""
            width="100"
            height="100"
          />
          <h1 className="h3 mb-3 font-weight-normal">Indian Food</h1>
          <label for="inputUsername" className="sr-only">
            Username
          </label>
          <input
            type="text"
            id="inputUsername"
            className="form-control"
            placeholder="Username"
            required=""
            autofocus=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required=""
            autofocus=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="inputPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Confirm-Password"
            required=""
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
          <button
            className="btn btn-lg btn-primary btn-block mt-2"
            type="submit"
          >
            Sign in
          </button>

          <Link to="/signin" style={{ fontSize: "12px", marginTop: "10px" }}>
            Already Have an Account?
          </Link>

          <p className="mt-5 mb-3 text-muted">© 2018-2023</p>
        </form>
      </div>
    </>
  );
}
