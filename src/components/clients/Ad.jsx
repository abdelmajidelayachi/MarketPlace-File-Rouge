import React from 'react'
import Slider from './Slider'
import ad1 from "../../assets/images/ads/hero_1.png";
import ad2 from "../../assets/images/ads/hero_2.png";
import ad3 from "../../assets/images/ads/hero_3.png";

function Ad() {
  return (
    <div  className='flex flex-col md:flex-row mt-2'>
      <div className="md:w-2/3 h-full w-full ">
        <Slider/>
      </div>
      
      <div className="md:w-1/3 w-full flex md:flex-col flex-row border-8 border-white mt-2">
        <img src={ad1} className='w-1/2 md:w-full' alt="adv1" />
        <img src={ad2} className='w-1/2 md:w-full mt-2' alt="adv1" />
      </div>
      


    </div>
  )
}

export default Ad