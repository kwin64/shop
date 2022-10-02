import React from 'react';

const Product = ({
  product,
  dough,
  activeDough,
  onClickCategoryHandler,
  activeSize,
  onClickSizeHandler,
}) => {
  return (
    <div className="product" key={product.id}>
      <img src={product.imageUrl} alt="" />
      <h2>{product.title}</h2>
      <div className="specification">
        <ul className="wrapperDough">
          {product.types.length > 0 ? (
            <>
              {dough.map((type, index) => (
                <li
                  key={index}
                  className={activeDough === index ? 'active' : 'dough'}
                  onClick={() => onClickCategoryHandler(index, product.category)}>
                  {type}
                </li>
              ))}
            </>
          ) : (
            <li className="dough">традиционное</li>
          )}
        </ul>
        <ul className="sizes">
          {product.sizes.map((size, index) => (
            <li
              key={index}
              className={activeSize === index ? 'active' : 'size'}
              onClick={() => onClickSizeHandler(index)}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="handlerOrder">
        <p className="price">{product.price} р.</p>
        <button className="btnAddProducts">Добавить</button>
      </div>
    </div>
  );
};

export default Product;
