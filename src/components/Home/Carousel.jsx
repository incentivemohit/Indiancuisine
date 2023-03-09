import React from "react";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={"/assets/images/HomePageImages/food2.jpg"}
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={"/assets/images/HomePageImages/food1.jpg"}
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={"/assets/images/HomePageImages/food3.jpg"}
              alt="Third slide"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
