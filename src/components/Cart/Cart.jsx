import React from "react";
import Header from "../Header/Header";
import { useContext } from "react";
import { ProductContext } from "../../Context";
import Footer from "../Home/Footer";
import Swiper from "../ProductCard/Swiper";
import { foodItems } from "../FoodItems";
import ProductCard from "../ProductCard/ProductCard";
import { Rating } from "@mui/material";
import "../../index.css";

function Cart() {
  const {
    orderList,
    setOrderList,
    counter,
    totalAmount,
    total,
    reset,
    searchData,
    setSearchData,
    increamentItem,
    decreamentItem,
    handleCheckout,
  } = useContext(ProductContext);

  totalAmount();
  return (
    <>
      <Header />

      <div className="m-auto" style={{ paddingTop: "80px", width: "90%" }}>
        {orderList.length ? (
          <div className="row">
            <div className="col-md-3 ">
              <div className="overflow-auto vh-100">
                <h4 className="text-center card p-2 bg-dark text-white mt-2">
                  Recommended
                </h4>
                {foodItems.map((data) => (
                  <div className="my-1" key={data.id}>
                    <ProductCard
                      id={data.id}
                      photo={data.image}
                      title={data.title}
                      price={data.price}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6 overflow-auto vh-100">
              {orderList.map((item) => {
                return (
                  <div className="card my-1">
                    <div className="row ">
                      <div className="col">
                        <div className="cart-image">
                          <img
                            src={item.image}
                            className="w-100 h-100"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col">
                        <h5 className="mt-2">{item.title}</h5>
                        <div className="py-2 " style={{ fontSize: "16px" }}>
                          <span className="">Quantity : </span>
                          <button
                            className="btn btn-primary "
                            onClick={() => decreamentItem(item.id)}
                          >
                            -
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button
                            className="btn btn-primary "
                            onClick={() => increamentItem(item.id)}
                          >
                            +
                          </button>
                        </div>
                        <Rating />
                        <h5 className="bg-dark text-white text-center mt-4 p-2 rounded w-75">
                          Price : Rs. {item.price}
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-md-3">
              <div
                className="card p-3 position-fixed w-25"
                style={{ zIndex: "1" }}
              >
                <p className="h5">Total Item : {counter}</p>
                <p className="h5">Total Amount(in Rs.) : {total}</p>
                <p className="h5 text-success">Free delievery on Rs.1000</p>
                <button
                  className="btn btn-danger text-center text-decoration-none"
                  style={{ "font-size": "22px" }}
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "85vh" }}
            >
              <img src={"/assets/images/others/emptyCartImage.png"} alt="" />
            </div>
          </>
        )}
      </div>
      <h4 className="text-center card p-2 bg-dark text-white mt-4">
        Featured Items
      </h4>
      <Swiper />
      <Footer />
    </>
  );
}

export default Cart;
