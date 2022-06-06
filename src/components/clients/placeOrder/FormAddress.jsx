import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Div from '../../UI/Div'
import { InputField } from "../../admin/InputField";
import { useDispatch } from "react-redux";

const FormAddress = (props) => {
  const phoneRegExp =/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  const dispatch = useDispatch()


  const validate =Yup.object({
    // firstName : Yup.string().max(30,"First Name must be less than 30 Character").required("first Name is required"),
    // lastName : Yup.string().max(30,"First Name must be less than 30 Character").required("Last Name is required"),
    country : Yup.string().max(30,'Country Must be less or equal to 30 Character').required("country is required"),
    city : Yup.string().max(30,'City Must be less or equal to 30 Character').required("City is required"),
    address : Yup.string().max(100,'Address Must be less or equal to 100').required("Address is required "),
    tel: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required')
    
  });

  const submitFormAddress= (values)=>{
    // console.log(values)
    dispatch({ type: "ADD_ADDRESS_ORDER", payload: values });  
    props.onClose()
    
  }
  return (
    <Div>
      <Formik
      initialValues={{
        // firstName: props.user.first_name !== undefined ? props.user.first_name : "",
        // lastName : props.user.last_name !== undefined ? props.user.last_name : "",
        country : props.user.country!== undefined ? props.user.country : "",
        city : props.user.city !== undefined ? props.user.city : "",
        address : props.user.address !== undefined ? props.user.address : "",
        tel : props.user.tel !== undefined ? props.user.tel : ""
      }}
      validationSchema={validate}
      onSubmit={submitFormAddress}
      
      >
        {/* {(formik)=>
        { */}
           <Form>
          {/* <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
            <label
              htmlFor="firstName"
              className="text-normal md:text-right text-left md:w-36 w-full"
            >
              First Name:{" "}
            </label>
              <InputField
                    type="text"
                    isInput={true}
                    name="firstName"
                    className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                    placeholder="First Name"
                  />
            
          </div>
          <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
            <label
              htmlFor="lastName"
              className="text-normal md:text-right text-left md:w-36 w-full"
            >
              Last Name:{" "}
            </label>
            <InputField
                    type="text"
                    isInput={true}
                    name="lastName"
                    className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                    placeholder="Last Name"
                  />
          
          </div> */}
          <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
            <label
              htmlFor="country"
              className="text-normal md:text-right text-left md:w-36 w-full"
            >
              Country/Region:{" "}
            </label>
            <InputField
                    type="text"
                    isInput={true}
                    name="country"
                    className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                    placeholder="Country"
                  />
           
          </div>
          <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
            <label
              htmlFor="city"
              className="text-normal md:text-right text-left md:w-36 w-full"
            >
              City:{" "}
            </label>
            <InputField
                    type="text"
                    isInput={true}
                    name="city"
                    className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                    placeholder="City"
                  />
           
          </div>
          <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
            <label
              htmlFor="Address"
              className="text-normal md:text-right text-left md:w-36 w-full"
            >
              Address:
            </label>
            <InputField
                    type="text"
                    isInput={true}
                    name="address"
                    className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                    placeholder="Street address, company name, P.O. box, c/o, etc"
                  />
           
          </div>
          <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
            <label
              htmlFor="tel"
              className="text-normal md:text-right text-left md:w-36 w-full"
            >
              phone Number:
            </label>
            <InputField
                    type="tel"
                    isInput={true}
                    name="tel"
                    className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                    placeholder="+21260-000 0000"
                  />
            
          </div>

          <div className="flex my-4 items-center w-full gap-2">
            <label
              htmlFor="Address"
              className="text-normal md:text-right text-left md:w-36 w-full"
            ></label>
            <button
              type="submit"
              className="px-7 py-2 text-gray-100 text-xl bg-blue-600 rounded-lg "
            >
              Save
            </button>
          </div>
        </Form>
        {/* }}  */}
       
      </Formik>
    </Div>
  );
};

export default FormAddress;
