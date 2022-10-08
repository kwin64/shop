import { useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/header/logo.png';
import basket from '../../assets/header/basket.png';
import Search from './Search';
import pizzaData from '../../store/pizza';
import { observer } from 'mobx-react-lite';

const Header = observer(({ inputValueSearch, sumPriceProduct, countProduct }) => {
  const navigate = useNavigate();

  console.log(pizzaData.currentProductsInBasket.length);

  const handleClickRedirect = (path) => {
    navigate(path, { replace: true });
  };

  return (
    <div className="header">
      <div className="logo" onClick={() => handleClickRedirect('/')}>
        <img src={logo} alt="logo" />
      </div>
      <Search inputValueSearch={inputValueSearch} />
      <div className="basket" onClick={() => handleClickRedirect('/basket')}>
        <p>
          {sumPriceProduct}
          {'р.'}
        </p>
        <img src={basket} alt="basket" />
        <p>{pizzaData.currentProductsInBasket.length}</p>
      </div>
    </div>
  );
});
export default Header;
