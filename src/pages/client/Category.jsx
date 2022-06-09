import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Nav from "../../components/clients/Nav";
import ProductCardNew from "../../components/product/ProductCardNew";
import Div from "../../components/UI/Div";
import Loader from "../../components/UI/Loader";
import Wrapper from "../../components/UI/Wrapper";
import Footer from "../../layouts/Footer";

function Category() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const statusCat = window.location.href;
  const [reload,setReload]=useState(false)
  
 const categoryHandler =(e)=>{
    setReload(e)
 }

  useEffect(() => {
    setLoading(true);
    console.log('hello');
    let location_id = window.location.href.split("-").at(-1);
    axios
      .get(
        `http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/product/get_products_by_category/${location_id}`
      )
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      });
  }, [window.location.href.split("-").at(-1)]);

  

  return (
    <Wrapper className="">
      {loading && <Loader />}
      <div className="max-w-screen-xl m-auto ">
        <Nav reload={categoryHandler} active="category" />
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 gap-5">
              {products.map((product, index) => (
                <Div key={index}>
                  <ProductCardNew product={product} />
                </Div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Wrapper>
  );
}

export default Category;
