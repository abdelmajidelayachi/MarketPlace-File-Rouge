import React from "react";

const WhyUs = () => {
  return (
    <div className="mx-6">
       <section className="text-gray-400 bg-gray-50 body-font ">
      <h1 className="text-center text-3xl font-bold text-mainBlue pt-6">
        Why Us
      </h1>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="md:w-1/3 w-full lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <div className="w-20 h-20 mb-6 mx-auto flex items-center justify-center rounded-full  border-2 border-gray-500 bg-mainBlue bg-opacity-10">
                {/* security icon */}
                <i className="fas fa-shield-alt  text-mainBlue text-4xl"></i>
              </div>
              <p className="leading-relaxed"></p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Security
              </h2>
              <p className="text-gray-500">Security of your privacy Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum odit ullam.</p>
            </div>
          </div> 
          <div className="md:w-1/3 w-full lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <div className="w-20 h-20 mb-6 mx-auto flex items-center justify-center rounded-full  border-2 border-gray-500 bg-mainBlue bg-opacity-10">
                {/* speed icon */}
                <i className="fas fa-tachometer-alt text-mainBlue text-4xl"></i>
              </div>

              <p className="leading-relaxed"></p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Respect Time
              </h2>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut labore, doloremque aspernatur similique.</p>
            </div>
          </div>
          <div className="md:w-1/3  w-full lg:mb-0 p-4">
            <div className="h-full text-center">
              <div className="w-20 h-20 mb-6 mx-auto flex items-center justify-center rounded-full  border-2 border-gray-500 bg-mainBlue bg-opacity-10">
                {/* payment icon */}
                <i className="fas fa-money-check-alt text-mainBlue text-4xl"></i>
              </div>
              <p className="leading-relaxed"></p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Online Payment
              </h2>
              <p className="text-gray-500">we secure your payment Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum odit ullam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
   
  );
};

export default WhyUs;
