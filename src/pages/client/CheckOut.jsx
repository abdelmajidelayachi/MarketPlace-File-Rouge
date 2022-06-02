import React, { useEffect, useState } from 'react'
import Nav from '../../components/clients/Nav'
import StripeContainers from '../../components/clients/Payments/StripeContainers'
import Wrapper from '../../components/UI/Wrapper'
import { useSelector } from 'react-redux'


const CheckOut = () => {
  const products=useSelector(state=>state.cartItems)
  const [totalPrice,setTotalPrice]=useState(0);
  
    
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
  ,[])
  
  
  return (
    <Wrapper>
      <div className=" max-w-screen-xl m-auto ">
        <Nav />
        
      </div>
      <div className='md:mx-auto w-full mx-4'>

        <StripeContainers price={totalPrice}/>
      </div>
    </Wrapper>
  )
}

export default CheckOut