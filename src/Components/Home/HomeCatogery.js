import React from "react";
import SubTitle from "../Utility/SubTitle";
import CategoryCard from "../Categery/CategoryCard";
import clothe from "../Images/clothe.png";
import cate2 from "../Images/cat2.png";
import laptop from "../Images/labtop.png";
import sal from "../Images/sale.png";
import pic from "../Images/pic.png";

const HomeCatogery = ({ title, btntitle }) => {
  return (
    <div className="container mx-auto items-center justify-between">
      <SubTitle title={title} btntitle={btntitle} pathText="/allcategory" />
      {/* Repeat the CategoryCard */}
      <div className="grid sm:grid-cols-3 sm:gap-0 gap-20 lg:gap-8 lg:grid-cols-6 grid-cols-2 mt-6">
        <CategoryCard title="أجهزة منزلية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="أجهزة منزلية" img={cate2} background="#F4DBA4" />
        <CategoryCard title="أجهزة منزلية" img={laptop} background="#0034ff" />
        <CategoryCard title="أجهزة منزلية" img={sal} background="#ff6262" />
        <CategoryCard title="أجهزة منزلية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="أجهزة منزلية" img={pic} background="#F4DBA4" />
      </div>
    </div>
  );
};

export default HomeCatogery;
