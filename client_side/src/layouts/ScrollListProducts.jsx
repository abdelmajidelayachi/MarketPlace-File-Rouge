import React from "react";
import ProductCard from "../components/product/ProductCard";
import Wrapper from "../components/UI/Wrapper";

function ScrollListProducts() {
  return (
    <Wrapper className = 'mx-5'>

      <div className="flex scrollbar scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll hover:scrollbar-thumb-green-700">
      <ProductCard name="this a long text will test if the place can hold it it is seems works ..." image="phone1.jpg" />
      <ProductCard name="this a long text will test if the place can hold it it is seems works" image="phone1.jpg" />
      <ProductCard name="this a long text will test if the place can hold it it is seems works" image="phone1.jpg" />
      <ProductCard name="this a long text will test if the place can hold it it is seems works" image="phone1.jpg" />
      <ProductCard name="this a long text will test if the place can hold it it is seems works" image="phone1.jpg" />
      <ProductCard name="this a long text will test if the place can hold it it is seems works" image="phone1.jpg" />
      </div>
    </Wrapper>
  );
}

export default ScrollListProducts;
