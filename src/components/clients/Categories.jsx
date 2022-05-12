import React from "react";
import Category from "./Category";
import cat1 from "../../assets/images/products/phone/phone1.jpg";
const categoriesDataImg = [
  {
    url: cat1,
  },
  {
    url: cat1,
  },
  {
    url: cat1,
  },
  {
    url: cat1,
  },
 
];

function Categories() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          {categoriesDataImg.map((image, index) => {

            return <div key={index} className="p-4 lg:w-1/4 md:w-1/2"><Category image={image.url} keyId={index}/></div>;
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories;
