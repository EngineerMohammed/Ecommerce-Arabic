import React from "react";
import PaginationComponent from "../../Utility/Pagination";
import BrandContainer from "../../Brands/BrandContainer";

const AllBrandPage = () => {
  return (
    <div className="container min-h-[670px]">
      <BrandContainer />
      <PaginationComponent />
    </div>
  );
};

export default AllBrandPage;
