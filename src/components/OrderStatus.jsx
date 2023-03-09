import React, { useContext } from "react";
import { ProductContext } from "../Context";
import Header from "./Header/Header";
import SearchRes from "./Header/SearchRes";
import Footer from "./Home/Footer";

function OrderStatus() {
  const { orderList, searchData, deleteItem } = useContext(ProductContext);

  var i = 1;
  return (
    <>
      <Header />

      {searchData.length ? (
        <SearchRes />
      ) : (
        <div className="row" id="orderStatustable">
          {orderList.length ? (
            <>
              <h3 class="text-center bg-dark text-white p-2">Order Status</h3>
              <div class=" card  m-auto text-center p-3">
                <table>
                  <thead>
                    <th>S.no</th>
                    <th>Check Box</th>
                    <th>Order No</th>
                    <th>Status</th>
                    <th>Title</th>
                    <th>From</th>
                    <th>Qty</th>
                    <th>Action</th>
                  </thead>
                  <tbody>
                    {orderList.map((item) => {
                      return (
                        <tr>
                          <td>{i++}</td>
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>{item.id}</td>
                          <td>Processing</td>
                          <td>{item.title}</td>
                          <td>Dwarka</td>
                          <td>{item.quantity}</td>
                          <td>
                            <button
                              className="btn btn-edit bg-danger text-white"
                              onClick={() => deleteItem(item.id)}
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "85vh" }}
              >
                <img src={"/assets/images/others/no_order.png"} alt="" />
              </div>
            </>
          )}
        </div>
      )}
      <Footer />
    </>
  );
}

export default OrderStatus;
