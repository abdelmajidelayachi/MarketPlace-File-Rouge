import React from "react";
// import Card from "../UI/Card";
import Wrapper from "../UI/Wrapper";
import { Formik, Form } from "formik";
import { InputField } from "./InputField";
import * as Yup from "yup";
import PreviewImage from "./PreviewImage";
import axios from "axios";

function AddProductModal(props) {
  
  const validate = Yup.object({
    productName: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("product Name Required"),
    productPrice: Yup.number()
      .positive("price should be positive")
      .required("price Required"),
    productQuantity: Yup.number()
      .positive("Quantity should be positive")
      .required("Quantity Required"),
    productDescription: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Description Required"),
    productImage: Yup.string().required("Image Required"),
    productCategory: Yup.string().required("Category Required"),
  });

  const submitEditProductHandler = (values) => {
       const data =new FormData();
       data.append("product_name", values.productName);
       data.append("price", values.productPrice);
       data.append("quantity", values.productQuantity);
       data.append("description", values.productDescription);
       data.append('owner_id', JSON.parse(localStorage.getItem('user')).id);
       data.append("category", values.productCategory);
       data.append("category_id", '1');
       data.append("status", '1');

        axios.post(`http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/product/update_product/${props.product.id}`, data).then(res => {
        console.log(res);
        props.onClose();
      });

  }

  const submitAddProductHandler = async(values) => {
       const data = new FormData();
        data.append("product_name", values.productName);
        data.append("price", values.productPrice);
        data.append("quantity", values.productQuantity);
        data.append("description", values.productDescription);
        data.append('owner_id', JSON.parse(localStorage.getItem('user')).id);
        data.append("category", values.productCategory);
        data.append("image", values.productImage);
        data.append("category_id", '1');
        data.append("status", '1');

        const response =await axios.post("http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/product/create_product", data
        ,{ headers: {
          'Content-Type': 'multipart/form-data'
        },}
        );
        console.log(response);
        if(response.status === 200){
          console.log(response.data);
          props.onClose();
        }
  };



  return (
    <Wrapper>
      {/* {console.log(props.product.id||'no id')} */}
      <div

        onClick={props.onClick}
        className="fixed top-0 left-0 w-full h-screen z-50 bg-dropdown"
      />
      <div
        data-aos="zoom-out-left"
        className=" bg-white  shadow-modal fixed top-0 right-0 min-h-screen transform rounded-none  z-50 md:w-1/4 w-full overflow-y-scroll"
      >
        <header className={`p-3 ${props.className}`}>
          <h2 className={`font-bold text-2xl`}>{props.title}</h2>
        </header>
        <body className="p-4">
          <Formik
            initialValues={{
              productName: props.product.product_name!==undefined ? props.product.product_name : "",
              productPrice: props.product.price!==undefined ? props.product.price : "",
              productDescription: props.product.description !==undefined ? props.product.description : "",
              productCategory: props.product.category_id !==undefined ? props.product.category_id : "",
              productImage: "",
              productQuantity: props.product.quantity !==undefined ? props.product.quantity : "",
            }}
            validationSchema={validate}
            onSubmit={props.edit?submitEditProductHandler:submitAddProductHandler}
          >
            {(formik) => (
              <Form>
                <label className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Product Name
                  </span>
                  <div className="flex bg-grey-lighter mt-2">
                    <label className="w-64 flex items-center px-2 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-700">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>

                      <input
                          id="file"
                          name="productImage"
                          type="file"
                          className="hidden"
                          onChange={(event) => {
                            formik.setFieldValue("productImage", event.currentTarget.files[0]);
                    }}/>
                      <span className="pl-3">upload image</span>
                    </label>
                  </div>
                </label>
                <div className="p-2">
                  {formik.values.productImage!==''&&<PreviewImage file={formik.values.productImage} className="h-16" /> }
                  {/* <img className="h-16 " src={props/>} alt="test" /> */}
                </div>
                <label className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Product Name
                  </span>
                  <InputField
                    type="text"
                    isInput={true}
                    name="productName"
                    className=""
                    placeholder="Product Name"
                  />
                </label>
                <label className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Brand
                  </span>
                  <InputField
                    type="text"
                    isInput={true}
                    name="productCategory"
                    className=""
                    placeholder="Category"
                  />
                </label>
                <label className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Price
                  </span>
                  <InputField
                    type="number"
                    isInput={true}
                    step="0.01"
                    name="productPrice"
                    className=""
                    placeholder="Price"
                  />
                </label>
                <label className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Quantity
                  </span>
                  <InputField
                    type="number"
                    isInput={true}
                    step="1"
                    min="1"
                    name="productQuantity"
                    className=""
                    placeholder="Quantity"
                  />
                </label>
                <label className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Description
                  </span>
                  <InputField
                    isInput={false}
                    className=""
                    rows="3"
                    name="productDescription"
                    placeholder="Your message"
                  />
                </label>
                <footer className="p-4 flex justify-end">
                  <button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                    onClick={props.onClick}
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2"
                  >
                    {props.buttonText}
                  </button>
                </footer>
              </Form>
            )}
          </Formik>
        </body>
      </div>
    </Wrapper>
  );
}

export default AddProductModal;
