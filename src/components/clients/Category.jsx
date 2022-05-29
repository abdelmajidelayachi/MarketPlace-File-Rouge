import React from "react";

// import phone1 from "../../assets/images/products/phone/phone1.jpg";

function Category(props) {
  return (
    
      <div className="max-w-sm w-70 flex flex-col items-center text-center bg-slate-50 p-2">
        <img
          alt="team"
          className="flex-shrink-0 rounded-lg mb-4"
          src={props.image}
        />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">
            Alper Kamu
          </h2>
          <h3 className="text-gray-500 mb-3">UI Developer</h3>
          <p className="mb-4">
            DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
            vaporware.
          </p>
        </div>
    
    </div>
  );
}

export default Category;
