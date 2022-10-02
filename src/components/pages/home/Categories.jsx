import React from 'react';

const Categories = ({ categories, options, activeCategories, setIndexCategoriesHandler }) => {
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
        <select name="" className="selector">
          {options.map((option, index) => (
            <option key={index} value="">
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Categories;
