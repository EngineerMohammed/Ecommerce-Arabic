import React from "react";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle";

const CardProductContainer = ({ title, btntitle, img, pathText }) => {
  return (
    <div className="container mx-auto items-center justify-between ">
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <div className="grid sm:grid-cols-3 sm:gap-0  lg:gap-8 lg:grid-cols-4 gap-3 grid-cols-2 mt-6">
        <ProductCard title="أجهزة منزلية" img={img} background="#k25fff" />
        <ProductCard title="أجهزة منزلية" img={img} background="#k25fff" />
        <ProductCard title="أجهزة منزلية" img={img} background="#k25fff" />
        <ProductCard title="أجهزة منزلية" img={img} background="#k25fff" />
      </div>
    </div>
  );
};

export default CardProductContainer;
