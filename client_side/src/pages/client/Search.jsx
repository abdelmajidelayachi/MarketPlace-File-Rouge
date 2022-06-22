import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../../components/clients/Nav";
import ProductCardNew from "../../components/product/ProductCardNew";
import Div from "../../components/UI/Div";
import Loader from "../../components/UI/Loader";
import Wrapper from "../../components/UI/Wrapper";
import Footer from "../../layouts/Footer";

function Search() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState(
    window.location.href.split("/").at(-1) || ""
  );

  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/product/get_product_search/${window.location.href
          .split("/")
          .at(-1)}`
      )
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  return (
    <Wrapper className="">
      {loading && <Loader />}
      <div className="max-w-screen-xl m-auto ">
        <Nav active="new"  />
        {products.length > 0 && (
          <section className="text-gray-600 body-font mx-5">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4 gap-5">
                {products &&
                  products.map((product, index) => (
                    <Div key={index}>
                      <ProductCardNew
                        className=" lg:w-width_22 md:w-width-30 sm:w-width-45  p-3 w-full "
                        product={product}
                      />
                    </Div>
                  ))}
              </div>
            </div>
          </section>
        )}
        {products.length === 0 && (
          <div className="flex flex-col items-center py-24 justify-center h-full">
            <h1 className="text-gray-500 text-xl title-font font-medium mb-5">
              No Products Found
            </h1>
            <p className="text-gray-500 text-lg">
              Sorry, we couldn't find any products matching your search.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </Wrapper>
  );
}

export default Search;
