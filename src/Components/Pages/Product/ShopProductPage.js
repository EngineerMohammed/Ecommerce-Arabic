import React from "react";
import CategoryHeader from "../../Categery/CategoryHeader";
import SearchCountResult from "../../Utility/SearchCountResult";
import SideFilter from "../../Utility/SideFilter";
import CardProductContainer from "../../Products/CardProductContainer";
import img1 from "../../Images/item.png";
import PaginationComponent from "../../Utility/Pagination";

const ShopProductPage = () => {
  return (
    <div className="min-h-[670px]">
      <CategoryHeader />
      <div className="container text-lg">
        <SearchCountResult title="نتيجة بحث 400" />
      </div>
      <div className="container flex">
        <div className="">
          <SideFilter />
        </div>
        <div className="flex-1">
          <CardProductContainer
            // title="الاكثر مبيعاً"
            // btntitle="المزيد"
            img={img1}
            pathText="/products"
          />
        </div>
      </div>
      <div className="mt-20">
        <PaginationComponent />
      </div>
    </div>
  );
};
export default ShopProductPage;
