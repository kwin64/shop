import { observer } from 'mobx-react-lite';
import basket from '../../../assets/header/basket.png';
import pizza1 from '../../../assets/image 5.png';
import removeLogo from '../../../assets/trash.svg';
import Header from '../../header/Header';
import './Basket.scss';

const Basket = observer(() => {
  return (
    <>
      <Header />
      <div className="wrapperProducts">
        <div className="basketProducts">
          <div className="wrapperHeader">
            <div className="wrapperBasket">
              <img src={basket} alt="basket" />
              <p>Корзина</p>
            </div>
            <div className="wrapperRemove">
              <img src={removeLogo} alt="remove logo" />
              <p>Очистить корзину</p>
            </div>
          </div>

          <div className="products">
            <img src={pizza1} alt="" />
            <div className="description">
              <p className="title">Чизбургер-пицца</p>
              <p className="compound">тонкое тесто, 30 см.</p>
            </div>
            <div className="amount">
              <div className="mark">-</div>
              <p>2</p>
              <div className="mark">+</div>
            </div>
            <div className="price">40p.</div>
            <div className="delete">X</div>
          </div>

          <div className="products">
            <img src={pizza1} alt="" />
            <div className="description">
              <p className="title">Чизбургер-пицца</p>
              <p className="compound">тонкое тесто, 30 см.</p>
            </div>
            <div className="amount">
              <div className="mark">-</div>
              <p>2</p>
              <div className="mark">+</div>
            </div>
            <div className="price">40p.</div>
            <div className="delete">X</div>
          </div>

          <div className="products">
            <img src={pizza1} alt="" />
            <div className="description">
              <p className="title">Чизбургер-пицца</p>
              <p className="compound">тонкое тесто, 30 см.</p>
            </div>
            <div className="amount">
              <div className="mark">-</div>
              <p>2</p>
              <div className="mark">+</div>
            </div>
            <div className="price">40p.</div>
            <div className="delete">X</div>
          </div>

          <div className="products">
            <img src={pizza1} alt="" />
            <div className="description">
              <p className="title">Чизбургер-пицца</p>
              <p className="compound">тонкое тесто, 30 см.</p>
            </div>
            <div className="amount">
              <div className="mark">-</div>
              <p>2</p>
              <div className="mark">+</div>
            </div>
            <div className="price">40p.</div>
            <div className="delete">X</div>
          </div>

          <div className="totals">
            <div className="countProducts">
              <p>Всего пицц: 3шт.</p>
            </div>
            <div className="priceProducts">
              <p>Сумма заказа: 120p.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
export default Basket;
