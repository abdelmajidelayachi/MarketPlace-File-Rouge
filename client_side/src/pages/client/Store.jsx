import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../../components/clients/Nav";
import ProductCardNew from "../../components/product/ProductCardNew";
import Div from "../../components/UI/Div";
import Footer from "../../layouts/Footer";

const Store = () => {
  const [products,setProducts] = useState([]);

  const getUserProducts = async () => {
    const seller_id = window.location.href.split("-").at(-2);
    const response = await axios.get(`http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/product/get_products/${seller_id}`);
    // console.log(response.data.products);
    setProducts(response.data);
  }
  useEffect(() => {
    getUserProducts();
  }, []);



  return (
    <div>
      <div className=" max-w-screen-xl m-auto ">
        <Nav active="home" />
      </div>
      <div className="flex justify-between md:flex-row flex-col md:w-11/12 md:ml-10 w-full mt-7 mx-auto ">
    <div className="flex flex-col items-center justify-center w-96 mx-auto md:mt-6 md:border h-fit">
      <div className="py-8 "> 
        <img  src={require(`../../assets/images/profiles/${products.length!==0?products.user.profile_photo_path:"default_profile.png"}`)} alt="profile" className="rounded-full w-48 h-48"/>
      </div>
      <div className="flex flex-col justify-center w-10/12 ">
        <h1 className="text-gray-900 text-xl title-font font-medium mb-5">
          {products.length!==0&&products.user.role}
        </h1>
        <h1 className="text-gray-900 text-xl title-font font-medium mb-3">
          {products.length!==0 && products.user.first_name+" "+products.user.last_name}
        </h1>
        <p className="text-gray-900 md:text-lg text-sm text-center mb-5">
          {products.length!==0 && products.user.email}
        </p>

      </div>
      
    </div>
    <div className="flex flex-col w-full">
    {products.products && (
        <section className="text-gray-600 body-font">
          <div className=" lg:px-5 md:px-3 py-4 ">
            <div className="flex flex-wrap md:justify-start justify-center md:mx-4 mx-6 gap-5">
              {products.products.map((product, index) => (
                <Div key={index}>

                  <ProductCardNew className=" md:w-auto  p-3 w-full" product = {product}/>
                </Div>
                ))}
            </div>
          </div>
        </section>
        )}
    </div>
  </div>
        <Footer />
    </div>
  );
};

export default Store;
