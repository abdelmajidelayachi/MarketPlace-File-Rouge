import React, { useState } from "react";
import Nav from "../../components/clients/Nav";
import Wrapper from "../../components/UI/Wrapper";
import Footer from "../../layouts/Footer";
import { MdOutlineCancel } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import MessageModal from "../../components/UI/MessageModal";
import { Link } from "react-router-dom";
import CheckoutNav from "../../components/clients/CheckoutNav";

function Basket() {
  const [errorInput, setErrorInput] = useState(false);

  const products = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const removeItemHandler = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const clearCartHandler = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <Wrapper className="">
      {errorInput && (
        <MessageModal
          className="bg-red-500"
          onClick={() => setErrorInput(false)}
          message="Number of items must be less than or equal to 20"
          title="ERROR OF NUMBER OF PRODUCT"
        />
      )}
      <div className="max-w-screen-xl m-auto">
        <Nav />
        <CheckoutNav active='card'/>
        <div className="mx-auto w-10/12">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800 mx-1 my-4">
              My card
            </h1>
            <span
              onClick={clearCartHandler}
              className="text-xl flex items-center cursor-pointer gap-2 font-semibold text-gray-700 mx-2"
            >
              <MdOutlineCancel />
              Clear Card
            </span>
          </div>
          <div className="w-full flex bg-gray-100 p-2 border-b border-gray-300">
            <div className="text-lg w-6/12 font-medium">Articles</div>
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

          {products &&
            products.map((product, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex py-2 border-b border-gray-300"
                >
                  <div className="w-6/12 flex">
                    <div className="w-1/3 pr-4">
                      <img
                        src={require(`../../assets/images/uploads/${product.product.images[0].path}`)}
                        alt={product.product.id}
                      />
                    </div>
                    <div className="w-2/3  flex flex-col">
                      <span className="text-gray-800 text-xl font-normal">
                        {product.product.product_name}
                      </span>
                      <span className="text-bold text-lg">
                        {product.product.category_id}
                      </span>
                      <span className="text-sm font-normal w-10/12">
                        {product.product.description}
                      </span>
                    </div>
                  </div>
                  <div className="text-lg w-2/12 font-normal flex flex-col items-center justify-center">
                    <div className="flex  rounded-sm h-7 w-24">
                      <button
                        onClick={() => {
                          if (product.quantity < 20) {
                            dispatch({
                              type: "INCREMENT_FROM_CART",
                              payload: product.product.id,
                            });
                            setErrorInput(false);
                          } else {
                            setErrorInput(true);
                          }
                        }}
                        className="w-7 h-7 flex items-center justify-center border-2 border-gray-500 rounded-full font-extrabold"
                      >
                        +
                      </button>
                      <span className="text-xl font-normal text-gray-800 w-6 flex justify-center">
                        {product.quantity}
                      </span>

                      <button
                        onClick={() => {
                          if (product.quantity > 1) {
                            dispatch({
                              type: "DECREMENT_FROM_CART",
                              payload: product.product.id,
                            });
                            setErrorInput(false);
                          } else {
                            setErrorInput(true);
                          }
                        }}
                        className="w-7 h-7 flex items-center justify-center border-2 border-gray-500 rounded-full font-extrabold"
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <div className="text-lg w-2/12 font-normal flex items-center justify-center">
                    {product.product.price}
                  </div>
                  <div className="text-lg w-2/12 font-normal flex items-center justify-center">
                    {product.product.price * product.quantity}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItemHandler(product.product.id)}
                    className="text-lg w-2/12 font-normal flex  items-center justify-center"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              );
            })}
          {products.length === 0 && (
            <div className="w-full flex justify-center border-b border-gray-300">
              <span className="text-xl font-semibold text-gray-600 mx-2 my-4">
                Your card is empty
              </span>
            </div>
          )}
          {products.length > 0 && (
              <div className="w-full flex justify-end items-center border-b border-gray-300 gap-3">
                <span className="text-lg font-semibold text-gray-600 mx-2 py-4 "> You choose <span className="font-bold text-gray-900">{products.length}</span>  items</span>
                <span className="text-xl font-semibold text-gray-600 mx-2 my-4">
                  Total:&nbsp;
                  <span className="text-red-500 text-2xl">$
                  {products.reduce(
                    (acc, item) => acc + item.product.price * item.quantity,
                    0
                  )}</span>
                </span>
                <span className=""><Link to="/place-order" className="py-2 px-4 text-xl font-semibold text-gray-100 bg-blue-600 rounded">Proceed to checkout</Link></span>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </Wrapper>
  );
}

export default Basket;
