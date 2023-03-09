import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [falseAlert, setFalseAlert] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (email && password) {
        login(email, password).then((res) => {
          if (res === 201) {
            setTimeout(() => {
              navigate("/");
            }, 1000);
          } else {
            setFalseAlert(true);
            setTimeout(() => {
              setFalseAlert(false);
            }, 2000);
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
      {falseAlert ? (
        <div class="alert alert-warning text-center" role="alert">
          Email or password doesn't match ! Go to Register page
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

          <button
            className="btn btn-lg btn-primary btn-block mt-2"
            type="submit"
          >
            Sign in
          </button>
          <Link to="/signup" style={{ fontSize: "12px", marginTop: "10px" }}>
            Don't have an Account?
          </Link>
          <p className="mt-5 mb-3 text-muted">© 2018-2023</p>
        </form>
      </div>
    </>
  );
}

export default SignIn;
