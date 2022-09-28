import React from 'react';

const Product = ({ id, imageUrl, title, types, sizes, price }) => {
  const [activeSize, setActiveSize] = React.useState(null);
  const [activeDough, setActiveDough] = React.useState(null);
  const dough = ['традиционное', 'тонкое'];

  const setIndexDoughHandler = (index) => {
    setActiveDough(index);
  };
  const setIndexSizeHandler = (index) => {
    setActiveSize(index);
  };

  return (
    <div className="product" key={id}>
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
      <div className="specification">
        <ul className="wrapperDough">
          {types.length > 0 ? (
            <>
              {dough.map((type, index) => (
                <li
                  key={index}
                  className={activeDough === index ? 'active' : 'dough'}
                  onClick={() => setIndexDoughHandler(index)}>
                  {type}
                </li>
              ))}
            </>
          ) : (
            <li className="dough">традиционное</li>
          )}
        </ul>
        <ul className="sizes">
          {sizes.map((size, index) => (
            <li
              key={index}
              className={activeSize === index ? 'active' : 'size'}
              onClick={() => setIndexSizeHandler(index)}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="handlerOrder">
        <p className="price">{price} р.</p>
        <button className="btnAddProducts">Добавить</button>
      </div>
    </div>
  );
};

export default Product;
