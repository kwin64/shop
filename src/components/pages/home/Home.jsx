import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import './home.scss';
import { useState } from 'react';
import pizzaImg from '../../../assets/image 2.png';

const Home = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Header />
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
            <div className="product">
              <img src={pizzaImg} alt="" />
              <h2>Чизбургер-пицца</h2>
              <div className="specification">
                <div className="wrapperDough">
                  <div className="dough">тонкое</div>
                  <div className="dough">традиционное</div>
                </div>
                <div className="sizes">
                  <div className="size">26 см</div>
                  <div className="size">30 см</div>
                  <div className="size">40 см</div>
                </div>
              </div>
              <div className="handlerOrder">
                <p className="price">100 p.</p>
                <button className="btnAddProducts">Добавить</button>
              </div>
            </div>

            <div className="product">
              <img src={pizzaImg} alt="" />
              <h2>Чизбургер-пицца</h2>
              <div className="specification">
                <div className="wrapperDough">
                  <div className="dough">тонкое</div>
                  <div className="dough">традиционное</div>
                </div>
                <div className="sizes">
                  <div className="size">26 см</div>
                  <div className="size">30 см</div>
                  <div className="size">40 см</div>
                </div>
              </div>
              <div className="handlerOrder">
                <p className="price">100 p.</p>
                <button className="btnAddProducts">Добавить</button>
              </div>
            </div>

            <div className="product">
              <img src={pizzaImg} alt="" />
              <h2>Чизбургер-пицца</h2>
              <div className="specification">
                <div className="wrapperDough">
                  <div className="dough">тонкое</div>
                  <div className="dough">традиционное</div>
                </div>
                <div className="sizes">
                  <div className="size">26 см</div>
                  <div className="size">30 см</div>
                  <div className="size">40 см</div>
                </div>
              </div>
              <div className="handlerOrder">
                <p className="price">100 p.</p>
                <button className="btnAddProducts">Добавить</button>
              </div>
            </div>

            <div className="product">
              <img src={pizzaImg} alt="" />
              <h2>Чизбургер-пицца</h2>
              <div className="specification">
                <div className="wrapperDough">
                  <div className="dough">тонкое</div>
                  <div className="dough">традиционное</div>
                </div>
                <div className="sizes">
                  <div className="size">26 см</div>
                  <div className="size">30 см</div>
                  <div className="size">40 см</div>
                </div>
              </div>
              <div className="handlerOrder">
                <p className="price">100 p.</p>
                <button className="btnAddProducts">Добавить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
