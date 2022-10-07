import React from 'react';
import Description from '../../modals/Description';

const Product = ({ product, dough, setSumInBasket, setProductInBasket }) => {
  const [activeDough, setActiveDough] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const [openModal, setOpenModal] = React.useState(true);

  const onClickSizeHandler = (index) => {
    setActiveSize(index);
  };
  const onClickDoughHandler = (index) => {
    setActiveDough(index);
  };

  const onClickAddProductInBasket = (id, product) => {
    setSumInBasket(id);
    setProductInBasket(product);
    setCount(count + 1);
  };

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
                  onClick={() => onClickDoughHandler(index)}>
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
        <button
          className="btnAddProducts"
          onClick={() => onClickAddProductInBasket(product.id, product)}>
          <h1>{count}</h1>
          <p>Добавить</p>
        </button>
      </div>
    </div>
  );
};

export default Product;
