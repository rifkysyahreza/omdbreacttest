import React from "react";

function Card(props) {
  return (
    <div className="flex flex-col items-center border-2 border-gray-300 rounded-lg max-w-xs py-10 px-10">
      <img src={props.src} className="rounded-lg" alt="" />
      <h1 className="font-bold text-lg text-center">{props.title}</h1>
      <p>{props.year}</p>
      <button className="bg-blue-300 hover:bg-blue-500 text-white font-bold px-3 py-1 rounded-lg">
        Show Details
      </button>
    </div>
  );
}

export default Card;
