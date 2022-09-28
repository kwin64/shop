import React from 'react';

const Categories = () => {
  const categories = ['все', 'вегетарианская', 'острая'];
  const [active, setActive] = React.useState(null);

  const setIndexHandler = (index) => {
    setActive(index);
  };

  return (
    <div className="nav">
      <ul className="typesPizza">
        {categories.map((category, index) => (
          <li
            className={active === index ? 'active' : ''}
            key={index}
            onClick={() => setIndexHandler(index)}>
            {category}
          </li>
        ))}
      </ul>
      <label className="filter">
        <p>Сортировка по:</p>
        <select name="" className="selector">
          <option value="">популярности</option>
          <option value="">цене</option>
          <option value="">по алфавиту</option>
        </select>
      </label>
    </div>
  );
};

export default Categories;
