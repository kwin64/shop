import Header from '../../header/Header';
import './Basket.scss';
import basket from '../../../assets/header/basket.png';
import removeLogo from '../../../assets/trash.svg';

const Basket = () => {
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
            <div>
              <img src="" alt="" />
              <div>
                <p>Чизбургер-пицца</p>
                <p>тонкое тесто, 30 см.</p>
              </div>
              <div>
                <div>-</div>
                <p>2</p>
                <div>+</div>
              </div>
              <div>40p.</div>
              <div>x</div>
            </div>
          </div>

          <div className="countProducts">
            <p>Всего пицц: 3шт.</p>
          </div>

          <div className="priceProducts">
            <p>Сумма заказа: 120p.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Basket;
