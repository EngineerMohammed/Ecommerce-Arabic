import React from "react";
import CategoryContainer from "../../Categery/CategoryContainer";
import PaginationComponent from "../../Utility/Pagination";

const AllCategoryPage = () => {
  return (
    <div className="container min-h-[670px]">
      <CategoryContainer />
      <PaginationComponent />
    </div>
  );
};

export default AllCategoryPage;
