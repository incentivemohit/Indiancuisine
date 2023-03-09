import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function Navbar({ results }) {
  return (
    <>
      <div className="row" id="searchResults">
        {results.map((data) => (
          <div
            className="col-md-2 d-flex justify-content-center align-items-center"
            key={data.id}
          >
            <ProductCard
              id={data.id}
              photo={data.image}
              title={data.title}
              price={data.price}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Navbar;
