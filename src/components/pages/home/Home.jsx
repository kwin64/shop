import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import pizzaData from '../../../store/pizza';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import './home.scss';

const Home = observer(() => {
  const [active, setActive] = useState(false);

  console.log(pizzaData.loading);

  return (
    <>
      <Header />
      {pizzaData.loading ? (
        <div>...Loading</div>
      ) : (
        <div className="main">
          <div className="nav">
            <ul className="typesPizza">
              <li
                className={active ? 'activeType' : 'type'}
                onClick={() => {
                  setActive(!active);
                }}>
                types pizza 1
              </li>
              <li
                className={active ? 'activeType' : 'type'}
                onClick={() => {
                  setActive(!active);
                }}>
                pizza 2
              </li>
              <li
                className={active ? 'activeType' : 'type'}
                onClick={() => {
                  setActive(!active);
                }}>
                pizza 3
              </li>
              <li
                className={active ? 'activeType' : 'type'}
                onClick={() => {
                  setActive(!active);
                }}>
                pizza 4
              </li>
              <li
                className={active ? 'activeType' : 'type'}
                onClick={() => {
                  setActive(!active);
                }}>
                pizza 5
              </li>
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

          <div className="wrapperAllProducts">
            <h1>All pizza</h1>
            <div className="allProducts">
              {pizzaData &&
                pizzaData.pizzaData?.data.map((product) => {
                  return (
                    <div className="product" key={product.id}>
                      <img src={product.imageUrl} alt="" />
                      <h2>{product.title}</h2>
                      <div className="specification">
                        <div className="wrapperDough">
                          {product.types.length > 0 ? (
                            <>
                              <div className="dough">тонкое</div>
                              <div className="dough">традиционное</div>
                            </>
                          ) : (
                            <div className="dough">традиционное</div>
                          )}
                        </div>
                        <div className="sizes">
                          {product.sizes.map((size, index) => (
                            <div key={index} className="size">
                              {size} см.
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="handlerOrder">
                        <p className="price">{product.price} р.</p>
                        <button className="btnAddProducts">Добавить</button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
});
export default Home;
