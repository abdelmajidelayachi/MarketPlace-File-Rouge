import React, { useEffect, useState } from "react";
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
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
  );

  const prod = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("cartItems")));
  }, [prod]);
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
        <CheckoutNav active="card" />
        <div className="mx-auto w-10/12">
          <div className="flex justify-between items-center">
            <h1 className="md:text-2xl text-lg font-semibold text-gray-800 mx-1 my-4">
              My card
            </h1>
            <span
              onClick={clearCartHandler}
              className="md:text-xl text-lg flex items-center cursor-pointer gap-2 font-semibold text-gray-700 mx-2"
            >
              <MdOutlineCancel />
              Clear Card
            </span>
          </div>
          <div className="w-full flex bg-gray-100 p-2">
            <div className="text-lg w-6/12 font-medium">Articles</div>
            <div className="text-lg w-2/12 font-normal md:flex hidden justify-center ">
              Quantity
            </div>
            <div className="text-lg w-2/12 font-normal md:flex hidden justify-center">
              Price Item
            </div>
            <div className="text-lg w-2/12 font-normal md:flex hidden justify-center">
              Total Price
            </div>
            <div className="text-lg w-2/12 font-normal md:flex hidden justify-center">
              Delete
            </div>
          </div>

          {products &&
            products.map((product) => 
                
                  <div key={product.product.id}
                  className="w-full flex md:flex-row flex-col my-5 py-2 border-b border-gray-300 mobile_card">
                    <div className="md:w-6/12 w-full  flex md:flex-row flex-row-reverse">
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
                        <span className="text-bold text-base font-semibold">
                          {product.product.category.name}
                        </span>
                        <span className="text-sm font-normal w-10/12">
                          {product.product.description}
                        </span>
                      </div>
                    </div>
                    <div className="text-lg w-2/12 font-normal md:flex hidden flex-col items-center justify-center">
                      <div className="flex  rounded-sm h-7 w-24">
                        <button
                          onClick={() => {
                            if (product.quantity < 20 && product.quantity > product.product.quantity) {
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
                    <div className="text-lg md:w-2/12 w-full font-normal md:flex hidden  items-center justify-center ">
                          {product.product.price}
                        </div>

                    {/* mobile  */}
                    {/* border-2 rounded p-4 border-gray-200 */}

                    <div className="w-full md:hidden flex flex-row">
                      <div className="text-lg  font-normal flex  flex-col items-center justify-center">
                        <div className="flex  rounded-sm h-7  w-24">
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
                      <div className="flex justify-around w-full my-4">
                        <div className="text-lg md:w-2/12 w-full font-normal flex  items-center justify-center ">
                          {product.product.price}
                        </div>
                       
                        <div className="text-lg md:w-2/12 w-full font-normal flex  items-center justify-center ">
                          {product.product.price * product.quantity}
                        </div>
                      </div>
                      <div className="text-lg ml-5 font-normal md:flex hidden flex-col items-center justify-center">
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

                      <div className="text-lg md:w-2/12 w-full font-normal md:flex hidden items-center justify-center ">
                        {product.product.price}
                      </div>
                    </div>

                    <div className="text-lg md:w-2/12 w-full font-normal md:flex hidden items-center justify-center ">
                      {product.product.price * product.quantity}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItemHandler(product.product.id)}
                      className="text-lg md:w-2/12 w-full font-normal flex text-gray-800  items-center justify-center"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
            
              )
            }
          {products.length === 0 && (
            <div className="w-full flex justify-center border-b border-gray-300">
              <span className="text-xl font-semibold text-gray-600 mx-2 my-4">
                Your card is empty
              </span>
            </div>
          )}
          {products.length > 0 && (
            <div className="w-full flex md:flex-row flex-col md:justify-end  justify-start items-center gap-3">
              <div className="flex items-center justify-start md:w-auto w-full">
                <span className="text-lg font-semibold text-gray-600 mx-2 md:py-4 ">
                  {" "}
                  You choose{" "}
                  <span className="font-bold text-gray-900">
                    {products.length}
                  </span>{" "}
                  items
                </span>
              </div>
              <div className="flex items-center md:w-auto w-full justify-between">
                <span className="text-xl font-semibold text-gray-600 mx-2 md:my-4">
                  Total:&nbsp;
                  <span className="text-red-500 text-2xl">
                    $
                    {products.reduce(
                      (acc, item) => acc + item.product.price * item.quantity,
                      0
                    )}
                  </span>
                </span>
                <span className="">
                  <Link
                    to="/place-order"
                    className="md:py-2 md:px-4 py-2 px-2 md:text-xl text-base font-semibold text-gray-100 bg-blue-600 rounded"
                  >
                    Proceed to checkout
                  </Link>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </Wrapper>
  );
}

export default Basket;
