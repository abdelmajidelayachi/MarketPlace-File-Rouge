import React from "react";
import Wrapper from "../UI/Wrapper";
import logo from "../../assets/images/logo/logoMshop.png";
import { Link } from "react-router-dom";

const CheckoutNav = (props) => {
  return (
    <Wrapper className="">
        <div className="w-60 mx-auto border-t-2"></div>
        <ul className="flex justify-center items-center gap-3 w-10/12 mx-auto mt-10">
          <li className={`py-1 w-1/3 rounded-full font-semibold text-xl text-mainBlue`}>View Cart</li>
          <li className={`py-1 w-1/3 rounded-full font-semibold text-xl ${props.active==='payment'|| props.active==='order' ?"text-mainBlue":"text-gray-300"} `}>Place Order</li>
          <li className={`py-1 w-1/3 rounded-full font-semibold text-xl ${props.active==='payment' ?"text-mainBlue":"text-gray-300"} `}> Payments</li>
        </ul> 
        <ul className="flex justify-center items-center gap-3 w-10/12 mx-auto mb-5">
          <li className="py-1 w-1/3 rounded-full  bg-mainBlue"></li>
          <li className={`py-1 w-1/3 rounded-full  ${props.active==='payment'|| props.active==='order' ? ' bg-mainBlue ' : " bg-gray-300"} `}></li>
          <li className={`py-1 w-1/3 rounded-full  ${props.active==='payment' ? ' bg-mainBlue ' : " bg-gray-300"} `}></li>
        </ul> 
    </Wrapper>
  );
};

export default CheckoutNav;
