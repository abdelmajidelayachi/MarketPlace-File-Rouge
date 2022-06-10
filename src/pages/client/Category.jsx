import axios from "axios";
import React, {  useEffect, useState } from "react";
import Nav from "../../components/clients/Nav";
import ProductCardNew from "../../components/product/ProductCardNew";
import Div from "../../components/UI/Div";
import Loader from "../../components/UI/Loader";
import Wrapper from "../../components/UI/Wrapper";
import Footer from "../../layouts/Footer";

function Category() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reload,setReload]=useState(false)
  
 const categoryHandler =(e)=>{
    setReload(e)
 }

  useEffect(() => {
    setLoading(true);
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
        {products.length>0
        &&
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
        }
          {products.length === 0 && (
                <div className="flex flex-col items-center py-24 justify-center h-full">
                  <h1 className="text-gray-500 text-xl title-font font-medium mb-5">
                    No Products Found

                  </h1>
                  <p className="text-gray-500 md:text-lg text-sm md:justify-start justify-center ">
                    Sorry, we couldn't find any products matching your search.
                  </p>
                </div>
              )}
      </div>
      <Footer />
    </Wrapper>
  );
}

export default Category;
