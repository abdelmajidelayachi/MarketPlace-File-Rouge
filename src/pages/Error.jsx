import React from "react";
import Nav from "../components/clients/Nav";
import Wrapper from "../components/UI/Wrapper";
import gifError from "../assets/images/404.gif";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Wrapper className="min-h-screen">
      <div className="max-w-screen-xl m-auto ">
        <Nav />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="md:w-1/2">
          <h1
            className="text-5xl text-gray-800 font-extrabold mb-4"
            style={{ textSize: "80px" }}
          >
            Something went wrong. 
          </h1>
          <h1
            className="text-5xl text-gray-800 font-extrabold"
            style={{ textSize: "80px" }}
          >
             This page doesn’t exist
          </h1>
          <Link to="/"  className="mt-6 flex items-center cursor-pointer">
            {" "}
            <span className="text-4xl uppercase font-bold text-mainBlue mt-4">
              Go back home
            </span>{" "}
            <span className="h-6 text-4xl font-bold mt-1 pt-1 text-mainBlue">
            <i className=" absolute ml-3 fas fa-angle-down fa-lg -rotate-90"></i>
            </span>
          </Link>
        </div>
        <img className="absolute z-10 bottom-0 right-0 md:flex hidden " src={gifError} alt="404" />
      </div>
    </Wrapper>
  );
}

export default Error;
