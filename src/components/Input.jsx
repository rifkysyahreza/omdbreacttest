import React from "react";

const Input = (props) => {
  return (
    <input
      type="text"
      onChange={props.onChange}
      placeholder={props.placeholder}
      className="border-2 border-gray-300 rounded-lg py-1 px-3 outline-none"
    />
  );
};

export default Input;
