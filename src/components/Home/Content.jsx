import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

function Content() {
  return (
    <>
      <Carousel />
      <div id="main" className="my-2">
        <div className="row  content-row">
          <div className="col">
            <div className="m-auto content-image">
              <img
                src={"/assets/images/HomePageImages/hf2.jpg"}
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
                src={"/assets/images/HomePageImages/hf4.jpg"}
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
                src={"/assets/images/HomePageImages/hf1.jpg"}
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
