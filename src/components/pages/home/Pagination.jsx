import React from 'react';

const Pagination = ({ pages, setCurrentPage }) => {
  return (
    <div className="containerPagination">
      {pages.map((page, index) => {
        return (
          <div key={index} className={'page'} onClick={() => setCurrentPage(page)}>
            {page + 1}
          </div>
        );
      })}
    </div>
  );
};
export default Pagination;
