import React, { useEffect, useState } from "react";
import Nav from "../../components/clients/Nav";
import Wrapper from "../../components/UI/Wrapper";
import { useSelector } from "react-redux";
import CheckoutNav from "../../components/clients/CheckoutNav";
import Div from '../../components/UI/Div'
import { Link } from "react-router-dom";
import {VscPass} from "react-icons/vsc";

const CheckOut = () => {
  const products = useSelector((state) => state.cartItems);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cartItems")).length > 0) {
      const price = products.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      );
      setTotalPrice(price);
    } else {
      window.location.href = "/";
    }
  }, [products]);

  return (
    <Wrapper>
      <div className=" max-w-screen-xl m-auto ">
        <Nav />
        <CheckoutNav active="order" />
      </div>
      <div className="flex w-11/12 md:flex-row flex-col-reverse mx-auto">
        <div className="md:w-6/12 w-full">
          <div className="mx-5 ">
            <h1 className="md:text-xl text:lg font-semibold text-left">
              Shipping Address
            </h1>
            <div className="border rounded py-2 px-6 my-4 ">
              <div className="w-full flex justify-between">
               <button><VscPass style={{color:"blue"}}/></button>
              </div>
            </div>
            <div className="border rounded py-6 px-6 my-4 ">
              <div className="w-full">
                <form>
                  <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
                    <label
                      htmlFor="firstName"
                      className="text-normal md:text-right text-left md:w-32 w-full"
                    >
                      First Name:{" "}
                    </label>
                    <input
                      type="text"
                      className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
                    <label
                      htmlFor="lastName"
                      className="text-normal md:text-right text-left md:w-32 w-full"
                    >
                      Last Name:{" "}
                    </label>
                    <input
                      type="text"
                      className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
                    <label
                      htmlFor="country"
                      className="text-normal md:text-right text-left md:w-32 w-full"
                    >
                      Country/Region:{" "}
                    </label>
                    <input
                      type="text"
                      className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                      placeholder="Morocco"
                    />
                  </div>
                  <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
                    <label
                      htmlFor="city"
                      className="text-normal md:text-right text-left md:w-32 w-full"
                    >
                      City:{" "}
                    </label>
                    <input
                      type="text"
                      className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                      placeholder="Casablanca"
                    />
                  </div>
                  <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
                    <label
                      htmlFor="Address"
                      className="text-normal md:text-right text-left md:w-32 w-full"
                    >
                      Address:
                    </label>
                    <input
                      type="text"
                      className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                      placeholder="Street address, company name, P.O. box, c/o, etc"
                    />
                  </div>
                  <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
                    <label
                      htmlFor="Address"
                      className="text-normal md:text-right text-left md:w-32 w-full"
                    >
                      phone Number:
                    </label>
                    <input
                      type="tel"
                      className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                      placeholder="+21260-000 0000"
                    />
                  </div>

                  <div className="flex my-4 items-center w-full gap-2">
                    <label
                      htmlFor="Address"
                      className="text-normal md:text-right text-left md:w-32 w-full"
                    ></label>
                    <button
                      type="submit"
                      className="px-7 py-2 text-gray-100 text-xl bg-blue-600 rounded-lg "
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex justify-between">
              <Link to='/card' className="px-6 py-1.5 border-2 rounded-lg border-mainBlue text-mainBlue text-xl font-semibold">Back to cart</Link>
              <Link to='/checkout' className="px-6 py-1.5 rounded-lg  bg-blue-600 hover:bg-mainBlue text-gray-100 text-xl font-semibold">Place order</Link>
            </div>
          </div>
        </div>
        <div className="md:w-6/12 w-full ">
          <div className="mx-5 h-full py-auto  ">
            <div className="border rounded py-6 px-6 my-auto">
              <div className="w-full">
                <h1 className="text-gray-800 text-xl font-bold text-left">
                  Your card
                </h1>
                <div className="w-2/3">
                  <div className="flex justify-between my-3">
                    <span className="text-gray-900 text-lg font-medium">
                      {" "}
                      Products total price{" "}
                    </span>
                    <span className="text-gray-900 text-lg font-medium">
                      {" "}
                      ${totalPrice}{" "}
                    </span>
                  </div>
                  <div className="flex justify-between my-3">
                    <span className="text-gray-900 text-lg">
                      {" "}
                      Shopping cost
                    </span>
                    <span className="text-gray-900 text-lg font-medium">
                      {" "}
                      $10.00{" "}
                    </span>
                  </div>
                </div>
                <hr  />
                <div className="w-2/3">
                  <div className="flex justify-between my-3">
                    <span className="text-gray-900 text-lg font-bold">
                      {" "}
                      Grand Total{" "}
                    </span>
                    <span className="text-red-500 text-xl font-bold">
                      {" "}
                      ${totalPrice+10}{" "}
                    </span>
                  </div>
                </div>
                {products && products.map(
                  (product,index)=>{
                    return(
                      <Div key={index}>
                      <hr />
                        <div className=" flex my-4">
                    <div className="w-1/4 pr-4 h-full my-auto">
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
                      <span className="text-bold text-lg">
                        quantity : {product.quantity}
                      </span>
                      <h2 className=" text-red-600 text-lg  font-bold">
                        price : ${product.product.price}
                      </h2>
                    </div>
                  </div></Div>
                    )
                  }
                )}
              
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-3 mt-7 bg-zinc-800 w-full">
        <span className="text-gray-300 font-semibold">
          © 2021 Copyright&nbsp;&nbsp;
        </span>
        <a className="text-gray-300 font-semibold" href="/home">
          MShop
        </a>
      </div>
    </Wrapper>
  );
};

export default CheckOut;
