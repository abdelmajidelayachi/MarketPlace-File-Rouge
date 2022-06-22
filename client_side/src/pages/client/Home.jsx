import React from "react";
import Ad from "../../components/clients/Ad";
import Categories from "../../components/clients/Categories";
import Nav from "../../components/clients/Nav";
import Footer from "../../layouts/Footer";
import WhyUs from "../../layouts/WhyUs";

function Home() {
  return (
    <div>
      <div className=" max-w-screen-xl m-auto ">
        <Nav active= 'home' />
      </div>
      <div className="w-full bg-gray-100">
        <div className="bg-gray-100 max-w-screen-xl m-auto mb-2">
          <Ad />
          <Categories />
          <WhyUs/>
        </div>
        <Footer/>
      </div>  
    </div>
  );
}

export default Home;
