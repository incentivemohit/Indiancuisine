import React, { useContext } from "react";
import { ProductContext } from "../../Context";
import ProductCard from "../ProductCard/ProductCard";

export default function SearchRes() {
  const { searchData, setSearchData } = useContext(ProductContext);

  return (
    <>
      <div className="row" id="searchResults">
        <h4 className="text-center p-2 bg-dark text-white ">
          Search Results : ( {searchData.length} )
        </h4>
        {searchData.map((data) => (
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
