import React from "react";
import { Link } from "react-router-dom";

function Content() {
  return (
    <>
      <div className="homepage-top-content">
        <img
          className="w-100 h-100 "
          src={"/assets/images/HomePage/food2.jpg"}
          alt=""
        />
        <div className="homepage-top-image-details w-50 p-2">
          <p style={{ "font-family": "Pacifico ,cursive" }}>
            <span style={{ fontSize: "66px" }}>O</span>ur aim is to spreading
            the taste and love over the world. Join us today for Sharing your
            delicious foods.
          </p>
          <Link to="/signup">
            <button className="btn btn-warning w-50 p-1">
              <h2>Signup</h2>
            </button>
          </Link>
        </div>
      </div>

      <div id="main" className="my-2 mx-2">
        <div className="row  content-row">
          <div className="col">
            <div className="m-auto content-image">
              <img
                src={"/assets/images/HomePage/hf2.jpg"}
                className="w-100 h-100 "
                alt=""
              />
            </div>
          </div>
          <div className="col text-center m-auto">
            <h1
              style={{ "font-family": "Pacifico, cursive" }}
              className="content-title"
            >
              Feel the taste of Indian Food
            </h1>
            <p>
              India is a hub of spices,deserts,coisines and what not,we provide
              you the all these with the best of the recepies available.Our
              chefs have pure indian background.Plus we prepare our spicies
              without any chemical treatments.
            </p>
            <Link to="/products" className="btn btn-primary">
              Explore Menu →
            </Link>
          </div>
        </div>

        <div className="row content-row">
          <div className="col text-center m-auto">
            <h1
              style={{ "font-family": "Pacifico, cursive" }}
              className="content-title"
            >
              Our motive is to bring true Indian flavours to you
            </h1>
            <p>
              India is a hub of spices,deserts,coisines and what not,we provide
              you the all these with the best of the recepies available.Our
              chefs have pure indian background.Plus we prepare our spicies
              without any chemical treatments.
            </p>
            <Link to="/products" className="btn btn-primary">
              Explore Menu →
            </Link>
          </div>
          <div className="col">
            <div className="m-auto content-image">
              <img
                src={"/assets/images/HomePage/hf4.jpg"}
                className="w-100 h-100"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row mb-4 content-row">
          <div className="col">
            <div className="m-auto content-image">
              <img
                src={"/assets/images/HomePage/hf1.jpg"}
                className="w-100 h-100"
                alt=""
              />
            </div>
          </div>
          <div className="col text-center m-auto">
            <h1
              style={{ "font-family": "Pacifico, cursive" }}
              className="content-title"
            >
              We Provide Eco-Friendly Packaging
            </h1>
            <p>
              India is a hub of spices,deserts,coisines and what not,we provide
              you the all these with the best of the recepies available.Our
              chefs have pure indian background.Plus we prepare our spicies
              without any chemical treatments.
            </p>
            <Link to="/products" className="btn btn-primary">
              Explore Menu →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
