import React from 'react';

const Categories = ({
  categories,
  options,
  activeCategories,
  setIndexCategoriesHandler,
  onClickSortedHandler,
}) => {
  return (
    <div className="nav">
      <ul className="typesPizza">
        {categories.map((category, index) => (
          <li
            className={activeCategories === index ? 'active' : ''}
            key={index}
            onClick={() => setIndexCategoriesHandler(index)}>
            {category}
          </li>
        ))}
      </ul>
      <label className="filter">
        <p>Сортировка по:</p>
        <select
          name=""
          className="selector"
          onChange={(e) => onClickSortedHandler(e.currentTarget.value)}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Categories;
