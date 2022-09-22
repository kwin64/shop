import { useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/header/logo.png';
import basket from '../../assets/header/basket.png';

const Header = () => {
  const navigate = useNavigate();

  const handleClickRedirect = (path) => {
    console.log(1);
    navigate(path, { replace: true });
  };

  return (
    <div className="header">
      <div className="logo" onClick={() => handleClickRedirect('/')}>
        <img src={logo} alt="logo" />
      </div>
      <div className="basket" onClick={() => handleClickRedirect('/basket')}>
        <p>
          {20000}
          {'р.'}
        </p>
        <img src={basket} alt="basket" />
        <p>{100}</p>
      </div>
    </div>
  );
};
export default Header;
