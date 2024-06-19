import React from "react";

function Createmainpagination({ currentPage, totalPage, handlePageChange }) {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPage <= 5) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, 2);

      if (currentPage > 4) {
        pages.push("...");
      }

      if (currentPage > 3 && currentPage < totalPage - 2) {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      } else if (currentPage <= 3) {
        pages.push(3, 4);
      } else {
        pages.push(totalPage - 3, totalPage - 2);
      }

      if (currentPage < totalPage - 3) {
        pages.push("....");
      }

      pages.push(totalPage - 1, totalPage);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="pagination m-2">
      <div
        className={`btn pagination-number font-bold ${
          currentPage === 1 ? "disabled" : ""
        }`}
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
      >
        Prev
      </div>
      {pages.map((page, index) =>
        typeof page === "number" ? (
          <div
            key={index}
            onClick={() => handlePageChange(page)}
            className={`btn pagination-number font-bold ${
              currentPage === page ? "btn-primary" : ""
            }`}
          >
            {page}
          </div>
        ) : (
          <div
            key={index}
            className="pagination-ellipsis btn pagination-number font-bold"
          >
            ...
          </div>
        )
      )}
      <div
        className={`btn pagination-number font-bold ${
          currentPage === totalPage ? "disabled" : ""
        }`}
        onClick={() =>
          currentPage < totalPage && handlePageChange(currentPage + 1)
        }
      >
        Next
      </div>
    </div>
  );
}

export default Createmainpagination;
