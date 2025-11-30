import React from "react";

const Card = ({title, role, content, button}) => {
  return (
    <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold mb-2 underline">{title}</h2>
      <h3 className="text-xl mb-2">{role}</h3>
      <p className="mb-4 text-base">{content}</p>
      {/* <button className="bg-[#EB0028] hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        {button}
      </button> */}
    </div>
  );
};

export default Card;
