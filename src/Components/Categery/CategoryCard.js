import React from "react";

const CategoryCard = ({ background, img, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="categery-card rounded-full p-6"
        // style={{ backgroundColor: `${background}` }}
      >
        <img src={img} alt="zct" className="w-[80px] h-[80px]" />
      </div>
      <p className="mt-2">{title}</p>
    </div>
  );
};


export default CategoryCard;
