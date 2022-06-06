import React from "react";
import { ErrorMessage, useField } from "formik";

export const InputField = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="w-full flex flex-col">
      {props.isInput && (
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          {...field}
          {...props}
          className={` ${
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
    </div>
  );
};
