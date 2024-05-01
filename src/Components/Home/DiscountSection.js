import React from "react";
import laptops from "../Images/laptops.png";
const DiscountSection = () => {
  return (
    <div className="container my-4">
      <div className="grid rounded-2xl grid-cols-1 sm:grid-cols-2 items-center justify-between bg-slate-500 p-1">
        <p className="font-mono text-2xl font-bold mb-5 text-white tracking-tighter	">
          خصم يصل حتي 30% علي أجهزة الاب توب
        </p>
        <img src={laptops} alt="" className="" />
      </div>
    </div>
  );
};

export default DiscountSection;
