import React from "react";

const BrandCard = ({ background, img }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="" style={{ backgroundColor: `${background}` }}>
        <div className="flex items-center justify-center bg-contain border m-3 shadow-[inset_-12px_-8px_40px_#46464620]">
          <img src={img} alt="zct" className="w-60 h-40" />
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
