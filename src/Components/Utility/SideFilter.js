import React from "react";

const SideFilter = () => {
  return (
    <div>
      <div>
        <div>الفئة</div>
        <div className="flex gap-2 justify-start items-center">
          <input type="checkbox" value="" />
          <div>الكل</div>
        </div>
        <div className="flex gap-2 justify-start items-center">
          <input type="checkbox" value="" />
          <div>أجهزة منزلية</div>
        </div>
        <div className="flex gap-2 justify-start items-center">
          <input type="checkbox" value="" />
          <div>أجهزة منزلية</div>
        </div>
        <div className="flex gap-2 justify-start items-center">
          <input type="checkbox" value="" />
          <div>أجهزة منزلية</div>
        </div>
        <div className="my-3">الماركة</div>
        <div className="flex gap-2 justify-start items-center">
          <input type="checkbox" value="" />
          <div>الكل</div>
        </div>
        <div className="flex gap-2 justify-start items-center">
          <input type="checkbox" value="" />
          <div>أبل</div>
        </div>
        <div className="flex gap-2 justify-start items-center">
          <input type="checkbox" value="" />
          <div>سامسونج</div>
        </div>
        <div className="my-4">السعر</div>
        <div className="flex w-12 h-7 ml-3">
          <p>من</p>
          <input type="number" className="w-12 h-7" />
        </div>
        <div className="flex  ml-3 text-center">
          <p>إلي</p>
          <input type="number" className="w-14 h-7" />
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
