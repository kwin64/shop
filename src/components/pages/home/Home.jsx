import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import pizzaData from '../../../store/pizza';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Categories from './Categories';
import './home.scss';
import Pagination from './Pagination';
import Product from './Product';

const Home = observer(() => {
  const dough = ['традиционное', 'тонкое'];
  const categories = ['все', 'вегетарианская', 'острая'];
  const options = ['популярности', 'цене', 'по алфавиту'];
  let categoryProducts;

  const [activeCategories, setActiveCategories] = React.useState(0);
  const [currentCategory, setCurrentCategory] = React.useState('all');
  const [inputValue, setInputValue] = React.useState(null);

  useEffect(() => {
    pizzaData.fetchDataPizza(inputValue);
  }, [inputValue]);

  const inputValueSearch = (value) => {
    setInputValue(value);
  };

  const onClickSortedHandler = (filterValue) => {
    if (filterValue === 'по алфавиту') {
      categoryProducts = pizzaData.pizzaData.data.sort((x, y) => (x.title < y.title ? -1 : 1));
    } else if (filterValue === 'цене') {
      categoryProducts = pizzaData.pizzaData.data.sort((x, y) => (x.price < y.price ? -1 : 1));
    } else if (filterValue === 'популярности') {
      categoryProducts = pizzaData.pizzaData.data.sort((x, y) => (x.rating > y.rating ? -1 : 1));
    }
  };

  const setIndexCategoriesHandler = (index) => {
    setActiveCategories(index);
    if (index === 0) {
      setCurrentCategory('all');
    } else if (index === 1) {
      setCurrentCategory('veg');
    } else if (index === 2) {
      setCurrentCategory('hot');
    }
  };

  if (pizzaData.pizzaData?.data) {
    if (currentCategory === 'all') {
      categoryProducts = pizzaData.pizzaData.data;
    } else if (currentCategory === 'veg') {
      categoryProducts = pizzaData.pizzaData.data.filter((item) => item.category === 1);
    } else if (currentCategory === 'hot') {
      categoryProducts = pizzaData.pizzaData.data.filter((item) => item.category === 2);
    }
  }
  return (
    <>
      <Header inputValueSearch={inputValueSearch} />
      {pizzaData.loading ? (
        <div>...Loading</div>
      ) : (
        <div className="main">
          <Categories
            categories={categories}
            options={options}
            activeCategories={activeCategories}
            setIndexCategoriesHandler={setIndexCategoriesHandler}
            onClickSortedHandler={onClickSortedHandler}
          />
          <div className="wrapperAllProducts">
            <div className="allProducts">
              {categoryProducts?.map((product) => {
                return <Product product={product} key={product.id} dough={dough} />;
              })}
            </div>
          </div>
          <Pagination data={categoryProducts} limit={4} />
        </div>
      )}

      <Footer />
    </>
  );
});
export default Home;
