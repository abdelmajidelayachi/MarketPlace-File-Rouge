import React from "react";
import Wrapper from "../UI/Wrapper";
import { ErrorMessage, useField } from "formik";

export const InputField = (props) => {
  const [field, meta] = useField(props);
  return (
    <Wrapper>
      {props.isInput && (
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          {...field}
          {...props}
          className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${
            props.className
          } ${meta.touched && meta.error ? "border-red-500" : ""}`}
          autoComplete="off"
        />
      )}
      {!props.isInput && (
        <textarea
          {...field}
          {...props}
          className={` form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
          props.className
        } ${meta.touched && meta.error ? "border-red-500" : ""}`}
          rows="3"
          name={props.name}
          placeholder={props.placeholder}
        ></textarea>
      )}
      <ErrorMessage
        component="div"
        name={field.name}
        className="text-red-500 text-xs italic"
      />
    </Wrapper>
  );
};
