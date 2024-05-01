import React from "react";
import favoff from "../Images/fav-off.png";
import rate from "../Images/rate.png";

const ProductCard = ({ img }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="m-3 p-2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg w-full"
      >
        <div className="flex items-center justify-center bg-contain shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
          <img src={img} alt="zct" className="w-[220px] h-[160px]" />
        </div>
        <div className="flex justify-end  rounded-lg p-3   transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer">
          <img src={favoff} alt="" />
        </div>
        <p>ساعة زكية بسوار كربون</p>
        <div className="flex justify-between items-center mt-2 bg-slate-100 p-0 m-0">
          <p className="flex items-center justify-center gap-1 ">
            <img src={rate} alt="" className="w-5 h-5" />
            <span className="text-yellow-500"> 4.5</span>
          </p>

          <p className="flex items-center justify-center">
            <span className="font-bold text-xl">800</span>
            جنية
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
