import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="border-2 border-blue-300 bg-white hover:bg-blue-500 text-blue-300 hover:text-white font-bold rounded-lg px-5 py-1"
    >
      {props.children}
    </button>
  );
};

export default Button;
