import React, { useEffect, useState } from 'react'
import Nav from '../../components/clients/Nav'
import Wrapper from '../../components/UI/Wrapper'
import { useSelector } from 'react-redux'
import CheckoutNav from '../../components/clients/CheckoutNav'


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
        <CheckoutNav active='order'/>
        
      </div>
      <div className='md:mx-auto w-9/12 mx-4'>

        place order
      </div>
    </Wrapper>
  )
}

export default CheckOut