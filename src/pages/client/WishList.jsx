import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Nav from "../../components/clients/Nav";
import ProductCardNew from "../../components/product/ProductCardNew";
import Div from "../../components/UI/Div";
import Loader from "../../components/UI/Loader";
import Wrapper from "../../components/UI/Wrapper";
import Footer from "../../layouts/Footer";

function WishList(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchTerm = useSelector(state=>state.search) 
  const [wishlistCartUpdating, setWishlistCartUpdating] = useState(false);
  

  useEffect(() => {
    const user= JSON.parse(localStorage.getItem("user"))
    setLoading(true);
    axios
      .get(
        `http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/WishList/get_wishlist/${user.id}`
      )
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);

      });
  }, [searchTerm, wishlistCartUpdating]);

  return (
    <Wrapper className="">
      {loading&&<Loader/>}
      <div className="max-w-screen-xl m-auto ">
        <Nav active ="wishlist"/>
        {products.length >= 0 && (
        <section className="text-gray-600 body-font">
          <div className=" lg:px-5 md:px-3 px-2  py-24 mx-auto">
            <div className="flex flex-wrap justify-start lg:-m-4 md:mx-8 mx-6 gap-5">
              {products.map((product, index) => (
                <Div key={index}>
                  <ProductCardNew className=" lg:w-width_22 md:w-width-30 sm:w-width-45  p-3 w-full " setWishlist={()=>{setWishlistCartUpdating(!wishlistCartUpdating)}} wishlist={true}  product = {product}/>
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
                  <p className="text-gray-500 md:text-lg text-sm md:justify-start justify-center ">
                    Sorry, we couldn't find any products matching your search.
                  </p>
                </div>
              )}
      </div>
      <Footer/>
    </Wrapper>
  );
}

export default WishList;
