import React, { useContext } from "react";
import Content from "./Content";
import Footer from "./Footer";
import { ProductContext } from "../../Context";
import SearchRes from "../Header/SearchRes";
import Header from "../Header/Header";

export default function Home() {
  const { searchData, setSearchData } = useContext(ProductContext);

  return (
    <>
      <Header />

      {searchData.length ? (
        <SearchRes />
      ) : (
        <>
          <Content />
          <Footer />
        </>
      )}
    </>
  );
}
