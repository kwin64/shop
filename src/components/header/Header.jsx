import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import basket from '../../assets/header/basket.png';
import logo from '../../assets/header/logo.png';
import pizzaData from '../../store/pizza';
import './Header.scss';
import Search from './Search';

const Header = observer(({ inputValueSearch }) => {
  const [sumPriceProduct, setSumPriceProduct] = React.useState(0);
  const navigate = useNavigate();

  const handleClickRedirect = (path) => {
    navigate(path, { replace: true });
  };

  const sumPrices = pizzaData.currentProductsInBasket
    .map((product) => product.price)
    .reduce((sum, value) => sum + value, 0);

  return (
    <div className="header">
      <div className="logo" onClick={() => handleClickRedirect('/')}>
        <img src={logo} alt="logo" />
      </div>
      <Search inputValueSearch={inputValueSearch} />
      <div className="basket" onClick={() => handleClickRedirect('/basket')}>
        <p>
          {sumPrices}
          {'р.'}
        </p>
        <img src={basket} alt="basket" />
        <p>{pizzaData.currentProductsInBasket.length}</p>
      </div>
    </div>
  );
});
export default Header;
