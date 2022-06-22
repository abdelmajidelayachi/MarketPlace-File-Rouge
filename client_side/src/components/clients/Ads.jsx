import React from "react";
import { SliderData } from "./SliderData";




function Ads() {
  const [current,setCurrent]=React.useState(0);
  return (
    <div className="flex justify-center w-full">
      <div className="w-2/3 p-2 bg-white ">
        <img src={SliderData[current].url} className="block h-full" alt="..." />
        <button
             className="absolute bg-blue-900/75 text-white w-10 top-1/2 translate-y-1/2 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          
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
        <button
          className="absolute bg-blue-400  text-white w-10 top-1/2 translate-x-full translate-y-1/2 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
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
          <span className="sr-only">Next</span>
        </button>
      </div>
      <div className="w-1/3 flex flex-col   bg-white">
        {SliderData.map((img, index) => {
          if (index < 2) {
            return (
              <div
                className="  p-2 duration-700 ease-in-out 
              "
              >
                <img src={img.url} className="block h-48" alt="..." />
              </div>
            );
          }
        })}
        {/* <img src={ad3} className="block" alt="..." /> */}
      </div>
    </div>
  );
}

export default Ads;
