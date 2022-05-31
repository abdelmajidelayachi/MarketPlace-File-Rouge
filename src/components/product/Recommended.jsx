import React from "react";
import Wrapper from "../UI/Wrapper";

const Recommended = (props) => {
  return (
    <Wrapper className=''>
     <section className="w-full px-7 bg-gray-200 rounded py-5">
        <h1 className="text-xl font-semibold mb-3 ">recommended Products</h1>
        <div className="container px-5 py-7 mx-auto">
          <div className="flex flex-wrap  gap-5">
           {/* <ProductCardNew product={props.product} />
            <ProductCardNew product={props.product} />
            <ProductCardNew product={props.product} />
            <ProductCardNew product={props.product} />  */}
          </div>
        </div>
      {/*  {/*  </section>
      {/* <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 gap-5">
            <ProductCardNew product={props.product} />
          </div>
        </div>*/}
      </section>  
    </Wrapper>
  );
};

export default Recommended;
