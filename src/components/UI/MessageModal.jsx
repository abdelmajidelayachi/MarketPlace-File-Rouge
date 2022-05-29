import React from "react";
import Card from "./Card";
import Wrapper from "./Wrapper";

function MessageModal(props) {
  //fixed top-0 left-0 w-full h-screen z-10
  return (
    <Wrapper>
      <div onClick={props.onClick} className="fixed top-0 left-0 w-full h-screen z-10 bg-dropdown" />
      <Card className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 md:w-1/4 w-full overflow-hidden">
        <header className={`p-4 ${props.className}`}>
          <h2 className={`font-bold text-2xl ${props.className}`}>
            {props.title}
          </h2>
        </header>
        <div className="p-4">
          <p className="text-gray-700 text-lg">{props.message}</p>
        </div>
        <footer className="p-4 flex justify-end">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={props.onClick}
          >
            Okay
          </button>
        </footer>
      </Card>
    </Wrapper>
  );
}

export default MessageModal;
