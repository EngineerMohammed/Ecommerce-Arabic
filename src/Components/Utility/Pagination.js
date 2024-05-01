import ReactPaginate from "react-paginate";
import React from "react";

const PaginationComponent = ({ getPage, pageCount }) => {
  const handlePageClick = () => {};
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        pageCount={100}
        previousLabel="< السابق"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"pge-link"}
        activeClassName={"active"}
      />
    </>
  );
};

export default PaginationComponent;
