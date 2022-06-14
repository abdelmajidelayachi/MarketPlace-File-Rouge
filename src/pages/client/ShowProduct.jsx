import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../../components/clients/Nav";
import Wrapper from "../../components/UI/Wrapper";
import Footer from "../../layouts/Footer";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const ShowProduct = () => {
  const [click, setClick] = useState(1);
  const [errorInput, setErrorInput] = useState(false);
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProductRequest = async (id) => {
    const { data } = await axios.get(
      `http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/product/get_Product/${id}`
    );
    setProduct(data);
  };

  useEffect(() => {
    const product_id_path = window.location.href.split("-").pop();
    getProductRequest(product_id_path);
  }, []);

  const AddToCartHandler = (items, numberOfItems) => {
    let productExistStatus = false;
    const storedProduct = JSON.parse(localStorage.getItem("cartItems"));
    storedProduct.forEach((item) => {
      if (item.product.id === items.id) {
        productExistStatus = true;
      } else {
        productExistStatus = false;
      }
    });

    console.log(productExistStatus);

    if (!productExistStatus) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { product: items, quantity: numberOfItems },
      });
    } else {
      swal("Warning", "Check Cart For choose quantity", "warning");
    }
  };

  const buyProductHandler = (items, numberOfItems) => {
    AddToCartHandler(items, numberOfItems);
    navigate("/card");
  };
  return (
    <Wrapper className="">
      <div className="max-w-screen-xl m-auto ">
        <Nav />
      </div>
      <div className="flex justify-around flex-wrap  mt-10 gap-4 md:px-10 px-4  md:mx-36 mx-2">
        <div className="bg-white p-2 mb-12">
          {product.length !== 0 && (
            <div className="p-7 bg-gray-100 sm:w-96 w-auto">
              <img
                alt="e-commerce"
                className="object-cover object-center mx-auto h-full"
                src={require(`../../assets/images/uploads/${product.images[0].path}`)}
              />
            </div>
          )}
          <div className="flex gap-3">
            <div className="flex items-center h-10 my-auto cursor-pointer">
              <i className="fas fa-chevron-left text-2xl text-gray-500"></i>
            </div>
            {product.length !== 0 && (
              <div className="p-1 w-24 my-4 bg-white border border-gray-600">
                <img
                  alt="e-commerce"
                  className="mx-auto w-24"
                  src={require(`../../assets/images/uploads/${product.images[0].path}`)}
                />
              </div>
            )}
            {product.length !== 0 && (
              <div className="p-1 w-24 my-4 bg-white border border-gray-600">
                <img
                  alt="e-commerce"
                  className="mx-auto w-24"
                  src={require(`../../assets/images/uploads/${product.images[0].path}`)}
                />
              </div>
            )}
            {product.length !== 0 && (
              <div className="p-1 w-24 my-4 bg-white border border-gray-600">
                <img
                  alt="e-commerce"
                  className="mx-auto w-24"
                  src={require(`../../assets/images/uploads/${product.images[0].path}`)}
                />
              </div>
            )}

            <div className="flex items-center h-10 my-auto cursor-pointer">
              <i className="fas fa-chevron-right text-2xl text-gray-500"></i>
            </div>
          </div>
        </div>
        <div className="md:mt-3 ">
          <h1 className="text-2xl flex justify-start font-semibold">
            {product.product_name}
          </h1>
          <div className="text-gray-500 text-xs font-medium mt-1 text-wrap">
            {product.description}
          </div>
          <div className="flex flex-wrap mt-1">
            <div className="flex items-center my-1">
              <svg
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">
                5.0
              </span>
              <span className="bg-gray-300 w-2 h-2 rounded-full mx-2"></span>
            </div>

            <span className="text-gray-500 "></span>
            <span className="text-gray-300 mx-2 "> 0 order </span>
            <span className="text-green-600 mx-2 ">Verified</span>
          </div>

          <div className="flex gap-5 my-10">
            <div className="text-gray-500 text-2sm font-normal">
              <p>Ship from :</p>
            </div>
            <div>
              <button className="md:px-4 px-2 md:py-1 py-0 md:text-md text-xs font-semibold text-mainBlue border-2 border-mainBlue bg-white">
                China
              </button>
            </div>
          </div>

          {/* <div className="flex gap-10 md:my-10 ">
            <div className="text-gray-500 text-2sm font-normal">
              <p>Option :</p>
            </div>
            <div className="flex md:gap-5 gap-2 ">
              <button className="md:px-4 px-2 md:py-1 py-0 md:text-md text-xs font-semibold text-black border-2 border-mainBlue bg-white">
                Black
              </button>
              <button className="md:px-4 px-2 md:py-1 py-0 md:text-md text-xs font-semibold text-mainBlue border-2 border-mainBlue bg-white">
                Blue
              </button>
              <button className="md:px-4 px-2 md:py-1 py-0 md:text-md text-xs font-semibold text-red-600 border-2 border-mainBlue bg-white">
                Red
              </button>
              <button className="md:px-4 px-2 md:py-1 py-0 md:text-md text-xs font-semibold text-green-600 border-2 border-mainBlue bg-white">
                Green
              </button>
            </div>
          </div> */}

          <div className="flex gap-7 mt-10">
            <div className="text-gray-500 text-2sm font-normal">
              <p>Quantity :</p>
            </div>
            <div className="flex border-2 border-gray-500 rounded-sm h-7">
              <button
                onClick={() => {
                  click + 1 < 1 ? setErrorInput(true) : setErrorInput(false);
                  if (product.quantity <= click + 1) {
                    setErrorInput(product.quantity);
                    setClick(product.quantity);
                  }else 
                  if( click + 1 >= 20 ){
                    setErrorInput(20);
                    setClick(20);
                  }
                  else {
                    setErrorInput(false);
                    setClick( click + 1);
                  }
                }}
                className="px-2.5 h-full font-extrabold"
              >
                +
              </button>
              <p className="appearance-none px-1.5 h-full w-14 px-auto mb-1 border-x-2 border-gray-500 focus:outline-none">
                {click}
              </p>
              <button
                onClick={() => {
                  click - 1 < 1 ? setErrorInput(true) : setErrorInput(false);
                  click - 1 > 20 ? setErrorInput(true) : setErrorInput(false);
                  setClick(click - 1 < 1 ? 1 : click - 1);
                }}
                className="px-2.5 h-full font-extrabold "
              >
                -
              </button>
            </div>
          </div>
          {errorInput && (
            <p className="text-red-500 italic text-sm">
              Number of available items is {errorInput}
            </p>
          )}
          <div className="flex gap-10 my-10">
            <div className="text-gray-500 text-2sm font-normal">
              <p>
                Seller :{" "}
                {product.length !== 0 && (
                  <Link
                    to={`/store/${product.owner.first_name}-${product.owner.id}-${product.owner.last_name}`}
                    className="underline text-mainBlue"
                  >
                    {product.length !== 0 &&
                      product.owner.first_name + "" + product.owner.last_name}
                  </Link>
                )}
              </p>
            </div>
            <div></div>
          </div>

          <div className="flex gap-5">
            <button
              onClick={() => buyProductHandler(product, click)}
              className="px-10 py-2.5 text-firstColor font-bold bg-buttonColor border-2 border-firstColor rounded-2"
            >
              Buy Now
            </button>
            <button
              type="button"
              onClick={() => AddToCartHandler(product, click)}
              className="px-10 py-2.5 text-white font-bold bg-firstColor rounded-2"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16">{/* <Recommended product = {product}/> */}</div>
      <Footer />
    </Wrapper>
  );
};

export default ShowProduct;
