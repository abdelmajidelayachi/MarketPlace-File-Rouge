import React,{useState} from "react";
import Nav from "../../components/clients/Nav";
import Wrapper from "../../components/UI/Wrapper";
import Footer from "../../layouts/Footer";
import {MdOutlineCancel} from 'react-icons/md'
import { RiDeleteBin6Line } from "react-icons/ri";

function Basket() {
  const [click, setClick] = useState(1);
  const [errorInput, setErrorInput] = useState(false);
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("product")));
  return (
    <Wrapper className="">
      <div className="max-w-screen-xl m-auto ">
        <Nav />
        <div className="mx-auto w-10/12">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800 mx-1 my-4">My card</h1>
            <span className="text-xl flex items-center gap-2 font-semibold text-gray-700 mx-2">
              <MdOutlineCancel/>
              Clear Card</span>
              
          </div>
          <div className="w-full flex bg-gray-100 p-2 border-b border-gray-300">
            <div className="text-lg w-6/12 font-medium">
              Articles
            </div>
            <div className="text-lg w-2/12 font-normal flex justify-center">
              Quantity
            </div>
            <div className="text-lg w-2/12 font-normal flex justify-center">
              Price Item 
            </div>
            <div className="text-lg w-2/12 font-normal flex justify-center">
              Total Price
            </div>
            <div className="text-lg w-2/12 font-normal flex justify-center">
              Delete
            </div>
          </div>
          
          {products.map((product, index) => {
            return (
          <div className="w-full flex py-2 border-b border-gray-300">
            <div className="w-6/12 flex">
              <div className="w-1/3 pr-4"><img  src={require(`../../assets/images/uploads/${product.images[0].path}`)} alt={product.id} /></div>
              <div className="w-2/3  flex flex-col">
                <span className="text-gray-800 text-xl font-normal">{product.product_name}</span>
                 <span className='text-bold text-lg'>{product.category_id}</span>
                 <span className="text-sm font-normal w-10/12">{product.description}</span>
                </div>
            </div>
            <div className="text-lg w-2/12 font-normal flex items-center justify-center">
            <div className="flex  rounded-sm h-7 w-24">
              <button
                onClick={() => {
                  click + 1 < 1 ? setErrorInput(true) : setErrorInput(false);
                  click + 1 > 20 ? setErrorInput(true) : setErrorInput(false);
                  setClick(click + 1 > 20 ? 20 : click + 1);
                }}
                className="w-7 h-7 flex items-center justify-center border-2 border-gray-500 rounded-full font-extrabold"
              >
                +
              </button>
              <input
                type="text"
                step={1}
                min={1}
                max={20}
                value={click}
                onChange={(e) => {
                  e.target.value > 0
                    ? setErrorInput(false)
                    : setErrorInput(true);
                  e.target.value > 20
                    ? setErrorInput(true)
                    : setErrorInput(false);
                  setClick(e.target.value);
                }}
                className="flex justify-center items-center content-center align-end   h-7 w-6 mx-1 focus:outline-none"
              />
              <button
                onClick={() => {
                  click - 1 < 1 ? setErrorInput(true) : setErrorInput(false);
                  click - 1 > 20 ? setErrorInput(true) : setErrorInput(false);
                  setClick(click - 1 < 1 ? 1 : click - 1);
                }}
                className="w-7 h-7 flex items-center justify-center border-2 border-gray-500 rounded-full font-extrabold"
              >
                -
              </button>
            </div>
            {errorInput && (
            <p className="text-red-500 italic text-sm">
              Number of Item must be positive and less then 20
            </p>
          )}
            </div>
            <div className="text-lg w-2/12 font-normal flex items-center justify-center">
              {product.price}
            </div>
            <div className="text-lg w-2/12 font-normal flex items-center justify-center">
             {product.price * click}
            </div>
            <div className="text-lg w-2/12 font-normal flex items-center justify-center">
                <RiDeleteBin6Line/>
            </div>
          </div>)})}
        </div>
      </div>

      <Footer />
    </Wrapper>
  );
}

export default Basket;
