import React from 'react';

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <div className="containerPagination">
      {pages.map((page, index) => {
        return (
          <div
            key={index}
            className={currentPage ? 'page' : ''}
            onClick={() => setCurrentPage(page)}>
            {page}
          </div>
        );
      })}
    </div>
  );
};
export default Pagination;
