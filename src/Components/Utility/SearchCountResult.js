import React from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../Images/sort.png";

const SearchCountResult = ({ title }) => {
  const handler = () => {};
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">{title} </div>
      <div className="">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="flex items-center justify-center w-[250px]">
              <img src={sort} alt="" className="w-[20px] h-[20px] mx-2" />
              ترتيب حسب
            </p>
          }
          delay={0}
          align="center"
          hover
        >
          <div className="grid grid-rows-5 rounded-xl bg-slate-200  shadow-2xl justify-center items-center p-2 gap-1 ">
            <div className="hover:bg-gray-600 rounded-xl">الاكثر مبيعاً</div>
            <div className="hover:bg-gray-600">الاكثر تقييما</div>
            <div className="hover:bg-gray-600">السعر من الأقل للأعلي</div>
            <div className="hover:bg-gray-600">السعر من الاعلي للاقل</div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
