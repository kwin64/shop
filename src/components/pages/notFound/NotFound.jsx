import { useNavigate } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  const navigate = useNavigate();
  const handleClickHomePage = () => {
    navigate('/', { replace: true });
  };
  return (
    <div className="WrapperNotFound">
      <h1>404</h1>
      <p>page not found</p>
      <button onClick={handleClickHomePage}>Home page</button>
    </div>
  );
};
export default NotFound;
