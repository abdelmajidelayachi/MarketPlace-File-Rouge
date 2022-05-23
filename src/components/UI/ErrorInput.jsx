import React from "react";

function ErrorInput(props) {
  return (
    <p className="text-red-500 text-xs italic">
      {props.message}
    </p>
  );
}

export default ErrorInput;
