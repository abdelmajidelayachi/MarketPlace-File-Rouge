import React from "react";

function Button(props) {
  return (
    <button
      type={props.type || "button"}
      className={`cursor-pointer px-4 py-1 border-0 border-solid ${props.className} focus:outline-none`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
