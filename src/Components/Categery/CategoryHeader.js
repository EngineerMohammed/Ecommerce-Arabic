import React from "react";

const CategoryHeader = () => {
  return (
    <div className="container">
        <div className=" flex justify-start space-x-2 my-2 text-gray-600 cursor-pointer">
          <div className="hover:bg-gray-500">الكل</div>
          <div className="hover:bg-gray-500 rounded-lg px-2">الكترونيات</div>
          <div className="hover:bg-gray-500 rounded-lg px-2">ملابس</div>
          <div className="hover:bg-gray-500 rounded-lg px-2">كهربية</div>
          <div className="hover:bg-gray-500 rounded-lg px-2">تخفيضات</div>
          <div className="hover:bg-gray-500 rounded-lg px-2">تخفيضات</div>
          <div className="hover:bg-gray-500 rounded-lg px-2">تخفيضات</div>
          <div className="hover:bg-gray-500 rounded-lg px-2">تخفيضات</div>
          <div className="hover:bg-gray-500 rounded-lg px-2">المزيد</div>
        </div>
    </div>
  );
};

export default CategoryHeader;
