import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import pizzaData from '../../../store/pizza';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Categories from './Categories';
import './home.scss';
import Product from './Product';

const Home = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [listPerPage, setListPerPage] = useState(4);

  const indexOfLastList = currentPage * listPerPage;
  const indexOfFirstList = indexOfLastList - listPerPage;
  const currentLists = pizzaData.pizzaData?.data.slice(indexOfFirstList, indexOfLastList);

  return (
    <>
      <Header />
      {pizzaData.loading ? (
        <div>...Loading</div>
      ) : (
        <div className="main">
          <Categories />
          <div className="wrapperAllProducts">
            <h1>All pizza</h1>
            <div className="allProducts">
              {pizzaData &&
                pizzaData.pizzaData?.data.map((product) => {
                  return <Product {...product} />;
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
