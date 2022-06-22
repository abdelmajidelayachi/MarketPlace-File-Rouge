import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { Link,  } from "react-router-dom";
import swal from "sweetalert";

const ProductCardNew = (props) => {
  const linkProduct = props.product.product_name + "-" + props.product.id;

  const addToWishlist = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user===null) {
      swal("Please Login First");
    }else{
      
          const formData = new FormData();
          formData.append("user_id", user.id);
          formData.append("product_id", props.product.id);
          const { data } = await axios.post(
            `http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/wishList/add_to_wishlist`,
            formData
          );
      
          if (data.success === true) {
            swal("Good job!", "Product added successfully!", "success");
          } else {
            swal("Warning", "The product are already in wishlist!", "info");
          }

    }
      
  };

  const removeFromWishlist = async(id) => {
      const {data}= await axios.delete(`http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/wishList/remove_from_wishlist/${id}`)
      console.log(data);
      if(data.success===true){
        props.setWishlist(id);
          swal("Good job!", "Product removed successfully!", "success");
      }else{
        swal("error", "Something went wrong!", "error");
      }

  };

  return (
    // lg:w-width_22 md:w-width-30 sm:w-width-45  p-3 w-full
    <div
      className={`${props.className} p-4 rounded bg-gray-100 shadow-md `}
      key={props.product.id}
    >
      <div className="flex justify-center h-52">
        <Link
          to={`/show-product/${linkProduct}`}
          className="block relative h-48 z-50 rounded overflow-hidden"
        >
          {props.product.images[0].path !== undefined && (
            <img
              alt="e-commerce"
              className="object-cover object-center mx-auto h-full block"
              src={require(`../../assets/images/uploads/${props.product.images[0].path}`)}
            />
          )}
        </Link>
      </div>

      <div className="mt-4">

        <Link to={`/show-product/${linkProduct}`}>
          <h2 className="text-gray-900 title-font text-lg font-semibold hover:text-mainBlue">
            {props.product.product_name}
          </h2>
        </Link>
        <p className="text-sm font-semibold mt-2.5 h-8">{props.product.name}</p>
        <div className="">
          <p className="text-xl text-black font-bold">${props.product.price}</p>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex">
            <Link to={`/show-product/${linkProduct}`}>
              <button className="px-4 py-1 rounded-full bg-blue-600 text-white">
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </Link>
          </div>
          <div className="flex">
            {props.wishlist ? (
              <button
                type="button"
                onClick={()=>removeFromWishlist(props.product.wish_product_id)}
                className="px-4 py-1 rounded-full hover:bg-white border-2 hover:text-blue-600 text-white bg-red-600"
              >
                <i className="far fa-heart"></i>
              </button>
            ) : (
              <button
                type="button"
                onClick={addToWishlist}
                className="px-4 py-1 rounded-full bg-white border-2 text-blue-600 hover:text-white hover:bg-red-600"
              >
                <i className="far fa-heart"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardNew;
