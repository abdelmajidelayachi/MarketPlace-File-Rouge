import React from 'react'
import Wrapper from "../UI/Wrapper";
import { ErrorMessage, useField } from "formik";

const InputImage = (props) => {
  const [field, meta] = useField(props);
  return (
    <Wrapper>

      <input type="file"
      onChange={(e)=>props.onChange(e.target.files[0])}
      name={props.name} {...field} {...props} className={` ${props.className} ${meta.touched && meta.error ? "border-red-500" : ""}`} autoComplete="off" accept='image/*'/>
      <ErrorMessage
        component="div"
        name={field.name}
        className="text-red-500 text-xs italic"
      />
    </Wrapper>
  )
}

export default InputImage
