import React from "react";
import Card from "../UI/Card";
import Wrapper from "../UI/Wrapper";

function DetailsProductModal(props) {
  //fixed top-0 left-0 w-full h-screen z-10
  return (
    <Wrapper>
      <div
        onClick={props.onClick}
        className="fixed top-0 left-0 w-full h-screen z-20 bg-dropdown opacity-50"
      />
      <Card className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 md:w-2/3 xl:w-1/2  ms: w-11/12 overflow-hidden flex flex-col ">
        <header className={`p-4 ${props.className}`}>
          <h2 className={`font-semibold  md:text-2xl text-xl  ${props.className}`}>
            {props.title}
          </h2>
        </header>
        <div className="p-4">
          <div className="flex md:flex-row flex-col md:pl-8">
            <div className="block relative h-48 z-50 rounded overflow-hidden float-left">
              <img
                className="object-cover object-center mx-auto h-full block"
                src={`${require("../../assets/images/uploads/" +
                  props.product.image)}`}
                alt="product"
              />
            </div>
          
            <div className="flex flex-col md:pl-9 gap-3">
              <div className="flex text-base capitalize text-gray-700 ">
                <h3>{props.product.categoryName} </h3>
              </div>
              <div className="flex text-2xl capitalize text-gray-900 font-semibold">
                <h3>{props.product.productName} </h3>
              </div>
              <div className="flex text-xs capitalize text-gray-900 font-semibold gap-5">
                <h3 className={`px-3 py-1 rounded-full ${props.product.quantity>0?"bg-green-600 text-gray-50":"bg-red-600 text-gray-50"}`}>{props.product.quantity>0?"In Stock":"Out of Stock"} </h3>
                <h3 className={`px-3 py-1 border border-gray-400 rounded-sm `}>{props.product.quantity} </h3>
                
              </div>
              <div className="flex  text-sm capitalize text-wrap text-gray-700 md:w-80">
                <h3 className="text-left">{props.product.description} </h3>
              </div>
              <div className="flex text-xl capitalize text-gray-900 font-semibold">
                <h3>${props.product.price} </h3>
              </div>
             
            </div>
          </div>
        </div>
        <footer className="p-7 flex justify-end">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={props.onClick}
          >
            Okay
          </button>
        </footer>
      </Card>
    </Wrapper>
  );
}

export default DetailsProductModal;
