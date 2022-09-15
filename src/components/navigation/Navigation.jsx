import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Basket from '../pages/basket/Basket';
import NotFound from '../pages/notFound/NotFound';

const Navigation = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/basket" element={<Basket />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
export default Navigation;
