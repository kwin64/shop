import React from 'react';

const Pagination = ({ pages, setCurrentPage }) => {
  const [activePage, setActivePage] = React.useState(0);

  const onClickHandler = (page, index) => {
    setCurrentPage(page);
    setActivePage(index);
  };
  return (
    <div className="containerPagination">
      {pages.map((page, index) => {
        return (
          <div
            key={index}
            className={activePage === index ? 'active' : 'page'}
            onClick={() => onClickHandler(page, index)}>
            {page + 1}
          </div>
        );
      })}
    </div>
  );
};
export default Pagination;
