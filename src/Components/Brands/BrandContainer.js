import React from "react";
import BrandCard from "./BrandCard";
import Brand1 from "../Images/brand1.png";
import Brand2 from "../Images/brand2.png";
import Brand3 from "../Images/brand3.png";
import Brand4 from "../Images/brand2.png";
const BrandContainer = () => {
  return (
    <div className="container">
      <div className="pt-4 font-bold text-xl">كل الماركات</div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3  grid-cols-2 mb-4">
        <BrandCard img={Brand1} />
        <BrandCard img={Brand2} />
        <BrandCard img={Brand3} />
        <BrandCard img={Brand4} />
        <BrandCard img={Brand2} />
        <BrandCard img={Brand3} />
        <BrandCard img={Brand1} />
        <BrandCard img={Brand2} />
        <BrandCard img={Brand3} />
        <BrandCard img={Brand4} />
        <BrandCard img={Brand2} />
        <BrandCard img={Brand3} />
        <BrandCard img={Brand1} />
        <BrandCard img={Brand2} />
        <BrandCard img={Brand3} />
        <BrandCard img={Brand4} />
        <BrandCard img={Brand2} />
        <BrandCard img={Brand3} />
      </div>
    </div>
  );
};

export default BrandContainer;
