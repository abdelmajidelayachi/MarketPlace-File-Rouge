import React, { useEffect, useState } from 'react'
import Nav from '../../components/clients/Nav'
import StripeContainers from '../../components/clients/Payments/StripeContainers'
import Wrapper from '../../components/UI/Wrapper'
import { useSelector } from 'react-redux'
import CheckoutNav from '../../components/clients/CheckoutNav'
import Div from '../../components/UI/Div'
import paymentMethod from '../../assets/useepaylog.jpg'
import { useNavigate } from 'react-router-dom'


const CheckOut = () => {
  const products=useSelector(state=>state.cartItems)
  const [totalPrice,setTotalPrice]=useState(0);
  const [user,setUser]=useState(JSON.parse(localStorage.getItem("user"))||null)
  
  const navigate = useNavigate();

  if(user===null || user===undefined)
  {
    navigate('/sign-in?from=place-order');
  }

  useEffect(()=>{
    

    if(JSON.parse(localStorage.getItem('cartItems')).length>0){
      const price = products.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      )
      setTotalPrice(price);
    }else{

      window.location.href='/'
    }
  }
  ,[products])
  
  
  return (
    <Wrapper>
      <div className=" max-w-screen-xl m-auto ">
        <Nav />
        <CheckoutNav active='payment'/>
        
      </div>
      <div className='flex md:flex-row flex-col-reverse'>
          <div className="md:w-6/12 w-full ">
          <div className="mx-5 h-full py-auto  ">
            <div className="border rounded py-6 px-6 my-auto">
              <div className="w-full">
                <h1 className="text-gray-800 text-xl font-bold text-left">
                  Payment Method
                </h1>

                <div className='flex  items-center my-5'>
                  <span className='text-xl px-2 mr-2'><input type="radio" className='w-4 h-4' defaultChecked/></span>
                  <span className='border-2 border-mainBlue py-1 px-2'><img src={paymentMethod} alt="" /></span>

                </div>
               
                <StripeContainers price={totalPrice}/>
                
                
              </div>
            </div>
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
  )
}

export default CheckOut