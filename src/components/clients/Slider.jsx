import React from "react";
import ad1 from "../../assets/images/ads/ad1.jpg";
import ad2 from "../../assets/images/ads/ad9.jpg";
// import ad3 from "../../assets/images/ads/hero_3.png";

const advertedProducts = [ad1, ad2];
let count = 0;
function Slider() {
  const [currentSlide,setCurrentSlide] = React.useState(0);

  React.useEffect(()=>{
    autoSliding();
  },[]);

  const autoSliding = ()=>{
    setInterval(()=>{
      handleOnClickNext();
    },3000)
  }

  const handleOnClickNext = ()=>{
    count = (count+1)%advertedProducts.length;
    setCurrentSlide(count);
  }
  const handleOnClickPrev = ()=>{
    count = (currentSlide + advertedProducts.length - 1) % advertedProducts.length;
    setCurrentSlide(count);
  }

  return (
    <div className="w-full select-none relative border-8 border-white mt-2">
      <div className="aspect-w-16 aspect-h-9">
      <img src={advertedProducts[currentSlide]} className='w-full h-full' alt="adv1" />

      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 py-2  w-full px-3 flex justify-between items-center">
          {/* <button type="submit">prev</button> */}
          <button onClick={handleOnClickPrev}
             className=" bg-blue-900/75 text-white w-12 rounded-full text-center transition-all ease-in-out duration-300"
          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-20 -ml-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Prev</span>
        </button>
          <button onClick={handleOnClickNext}
             className=" bg-blue-900/75 text-white w-12 rounded-full mr-3  transition-all ease-in-out duration-300"
          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-20 -ml-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="sr-only">Prev</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
