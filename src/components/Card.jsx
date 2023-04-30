import React from "react";

function Card({ className, title, body }) {
  return (
    <div className={`w-[300px] border-r-gray-200 xl:pl-6 h-[50%] ${className}`}>
      <h5 className="font-semiBold text-sm">{title}</h5>
      <span className="font-extraBold xl:text-2xl">{body || '--'}</span>
    </div>
  );
}

export default Card;
