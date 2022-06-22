import React from "react";

// import phone1 from "../../assets/images/products/phone/phone1.jpg";

function Category(props) {
  return (
    
      <div className="max-w-sm w-70 flex flex-col items-center text-center bg-slate-50 p-2">
        <div className="">
           <img
          alt="team"
          className="object-cover flex-shrink-0 rounded-lg mb-4"
          src={require(`../../assets/categories/${props.category.image}`)}
        />
        </div>
       
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {props.category.name}
          </h2>
          <p className="mb-4">
            {props.category.description}
          </p>
        </div>
    
    </div>
  );
}

export default Category;
