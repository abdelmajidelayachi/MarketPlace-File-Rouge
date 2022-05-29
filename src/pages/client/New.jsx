import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../../components/clients/Nav";
import ProductCardNew from "../../components/product/ProductCardNew";
import Div from "../../components/UI/Div";
import Wrapper from "../../components/UI/Wrapper";
import Footer from "../../layouts/Footer";

function New() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/product/get_new_products"
      )
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper className="">
      <div className="max-w-screen-xl m-auto ">
        <Nav />
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 gap-5">
              {products.map((product, index) => (
                <Div key={index}>
                  <ProductCardNew  product = {product}/>
                </Div>
                ))}
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </Wrapper>
  );
}

export default New;
