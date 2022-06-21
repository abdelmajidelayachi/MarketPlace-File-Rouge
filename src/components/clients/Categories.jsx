import React, { useEffect, useState } from "react";
import Category from "./Category";
import cat1 from "../../assets/images/products/phone/phone1.jpg";
import axios from "axios";
import { Link } from "react-router-dom";


function Categories() {
  const [categories,setCategories]=useState([]);


  useEffect(()=>{
    axios.get("http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/product/get_categories").then(res=>{
      setCategories(res.data);
    }).catch(err=>console.log(err))
 },[])



  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4 min-h-56">
          {categories.map((category, index) => {
            if(index!==0)
            return <Link to={`/category/${category.name}-${category.id}`} key={index} className="p-4 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full"><Category category={category} keyId={index}/></Link>;
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories;
