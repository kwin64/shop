import React from 'react';

const Pagination = ({ data, limit }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  let pagesCount = Math.ceil(data?.length / limit);
  let pages = [];

  function nextPage() {
    setCurrentPage((page) => page + 1);
  }

  function previousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(e) {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / limit) * limit;
    return new Array(limit).fill().map((_, idx) => start + idx + 1);
  };

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className="">
      <div className="pagination">
        <button onClick={previousPage} className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>
          prev
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${currentPage === item ? 'active' : null}`}>
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button onClick={nextPage} className={`next ${currentPage === pages ? 'disabled' : ''}`}>
          next
        </button>
      </div>
    </div>
  );
};
export default Pagination;
