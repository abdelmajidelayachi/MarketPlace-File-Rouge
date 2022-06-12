import React, { useEffect, useState } from "react";
import Nav from "../../components/clients/Nav";
import Wrapper from "../../components/UI/Wrapper";
import { useSelector } from "react-redux";
import CheckoutNav from "../../components/clients/CheckoutNav";
import Div from "../../components/UI/Div";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormAddress from "../../components/clients/placeOrder/FormAddress";
import MessageModal from "../../components/UI/MessageModal";

const CheckOut = () => {
  const products = useSelector((state) => state.cartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addressForm, setAddressForm]= useState(false);
  const [user, setUser]= useState(JSON.parse(localStorage.getItem("user")));
  const [hasAddress, setHasAddress]=useState(false)
  const [addressInfo,setAddressInfo] = useState(false)
  const [updateInfo, setUpdateInfo] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(user===null)
    {
      navigate('/sign-in?from=place-order');
     

    }else{
      if (JSON.parse(localStorage.getItem("cartItems")).length > 0) {
        const price = products.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        );
        setUser(JSON.parse(localStorage.getItem("user")))
        setTotalPrice(price);
        if(user.tel !==undefined && user.address !==undefined)
        {
          setHasAddress(true);
        }
      } else {
        window.location.href = "/";
      }
    }
    
  }, [products, addressForm]);

  return (
    <Wrapper>
      
      <div className=" max-w-screen-xl m-auto ">
        <Nav />
        <CheckoutNav active="order" />
      </div>
      <div className="flex w-11/12 md:flex-row flex-col-reverse mx-auto">
        <div className="md:w-6/12 w-full">
          <div className="mx-5 ">
            <h1 className="md:text-xl text:lg font-semibold text-left">
              Shipping Address
            </h1>
            {updateInfo?<div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 my-3 rounded relative' role='alert'>
      <strong className='font-bold'>Success!</strong>
      <span className='block sm:inline'>Your address has been updated.</span>
      <span onClick={()=>setUpdateInfo(false)} className='absolute top-0 bottom-0 right-0 px-4 py-3'>
        <svg className='fill-current h-6 w-6 text-green-500' role='button' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <title>Close</title>
          <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z'/>
        </svg>
      </span>

      </div>:""
      } 
            <div className="border rounded py-2 px-6 my-4 ">
              <div className="w-full flex justify-between">
                <button className="text-btn">
                  <FontAwesomeIcon size={"lg"} icon={faCheckCircle} />
                </button>
                <button onClick={()=>{setAddressForm(!addressForm)}} className="text-blue-600 text-lg font-semibold hover:underline">
                  {hasAddress ?'Edit Address':'Add Address'}
                </button>
              </div>
              <div className="flex flex-col">
                <p className="text-base font-semibold px-5 pt-2 w-full ">
                  <span className="text-gray-600">First Name :</span> {" "} {user && user.first_name +' '+user.last_name}
                </p>
                <p className="text-base font-semibold px-5 pt-2 w-full">
                <span className="text-gray-600"> TEL :</span>{" "} {user && user.tel}
                </p>
                <p className="text-base font-semibold px-5 pt-2 w-full">
                <span className="text-gray-600"> Address :</span>{" "} {user && user.address}
                </p>

              </div>
            </div>
            {addressForm&&
          
            <div className="border rounded py-6 px-2 my-4 ">
              <div className="w-full">
              
                <FormAddress user={user} onClose={()=>{
                  setHasAddress(true)
                  setUpdateInfo(true)
                  setAddressForm(false)}}/>
              </div>
            </div>  
            }
            <div className="flex justify-between">
              <Link
                to="/card"
                className="md:px-6 px-4 md:py-1.5 pt-1 pb-0.5 rounded border-2  border-mainBlue text-mainBlue md:text-xl text-lg md:font-semibold font-medium"
              >
                Back to cart
              </Link>
              {
                hasAddress ?  <Link
                to="/checkout"
                className="md:px-6 px-4 md:py-1.5 pt-1 pb-0.5  rounded  bg-blue-600 hover:bg-mainBlue text-gray-100 md:text-xl text-lg md:font-semibold font-medium "
              >
                Place order
              </Link>: <button onClick={()=>{setAddressInfo(true)}}
                
                className="md:px-6 px-4 md:py-1.5 pt-1 pb-0.5  rounded  bg-blue-600 hover:bg-mainBlue text-gray-100 md:text-xl text-lg md:font-semibold font-medium "
              >
                Place order
              </button>
              }
             
            </div>
            {addressInfo&&<MessageModal title="Please add your address" message="You need to add your address to place order" onClick={()=>{setAddressInfo(false)}}/>}
          </div>
        </div>
        <div className="md:w-6/12 w-full ">
          <div className="mx-5 h-full py-auto  ">
            <div className="border rounded py-6 px-6 my-auto">
              <div className="w-full">
                <h1 className="text-gray-800 text-xl font-bold text-left">
                  Your card
                </h1>
                <div className="w-2/3">
                  <div className="flex justify-between my-3">
                    <span className="text-gray-900 text-lg font-medium">
                      {" "}
                      Products total price{" "}
                    </span>
                    <span className="text-gray-900 text-lg font-medium">
                      {" "}
                      ${totalPrice}{" "}
                    </span>
                  </div>
                  <div className="flex justify-between my-3">
                    <span className="text-gray-900 text-lg">
                      {" "}
                      Shopping cost
                    </span>
                    <span className="text-gray-900 text-lg font-medium">
                      {" "}
                      $10.00{" "}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="w-2/3">
                  <div className="flex justify-between my-3">
                    <span className="text-gray-900 text-lg font-bold">
                      {" "}
                      Grand Total{" "}
                    </span>
                    <span className="text-red-500 text-xl font-bold">
                      {" "}
                      ${totalPrice + 10}{" "}
                    </span>
                  </div>
                </div>
                {products &&
                  products.map((product, index) => {
                    return (
                      <Div key={index}>
                        <hr />
                        <div className=" flex my-4">
                          <div className="w-1/4 pr-4 h-full my-auto">
                            <img
                              src={require(`../../assets/images/uploads/${product.product.images[0].path}`)}
                              alt={product.product.id}
                            />
                          </div>
                          <div className="w-2/3  flex flex-col">
                            <span className="text-gray-800 text-xl font-normal">
                              {product.product.product_name}
                            </span>
                            <span className="text-bold text-lg">
                              {product.product.category_id}
                            </span>
                            <span className="text-sm font-normal w-10/12">
                              {product.product.description}
                            </span>
                            <span className="text-bold text-lg">
                              quantity : {product.quantity}
                            </span>
                            <h2 className=" text-red-600 text-lg  font-bold">
                              price : ${product.product.price}
                            </h2>
                          </div>
                        </div>
                      </Div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-3 mt-7 bg-zinc-800 w-full">
        <span className="text-gray-300 font-semibold">
          © 2021 Copyright&nbsp;&nbsp;
        </span>
        <a className="text-gray-300 font-semibold" href="/home">
          MShop
        </a>
      </div>
    </Wrapper>
  );
};

export default CheckOut;
