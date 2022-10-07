import { observer } from 'mobx-react-lite';
import React from 'react';
import pizzaData from '../../../store/pizza';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Categories from './Categories';
import './home.scss';
import Pagination from './Pagination';
import Product from './Product';

const Home = observer(() => {
  //state
  let categoryProducts;

  //const value
  const dough = ['традиционное', 'тонкое'];
  const categories = ['все', 'вегетарианская', 'острая', 'остальные'];
  const options = ['популярности', 'цене', 'по алфавиту'];

  //sorting
  const [activeCategories, setActiveCategories] = React.useState(0);
  const [currentCategory, setCurrentCategory] = React.useState('all');
  const [inputValue, setInputValue] = React.useState(null);

  //pagination
  const [currentPage, setCurrentPage] = React.useState(0);
  const limit = 4;
  let pages = [];

  const [sumPriceProduct, setSumPriceProduct] = React.useState(0);
  const [productsInBasket, setProductsInBasket] = React.useState([]);

  React.useEffect(() => {
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
    } else if (index === 3) {
      setCurrentCategory('other');
    }
  };

  const setSumInBasket = (id) => {};

  const setProductInBasket = (product) => {
    setProductsInBasket([...productsInBasket, product]);
  };
  console.log(productsInBasket);

  if (pizzaData.pizzaData.data) {
    if (currentCategory === 'all') {
      categoryProducts = pizzaData.pizzaData.data;
    } else if (currentCategory === 'veg') {
      categoryProducts = pizzaData.pizzaData.data.filter((item) => item.category === 5);
    } else if (currentCategory === 'hot') {
      categoryProducts = pizzaData.pizzaData.data.filter((item) => item.category === 2);
    } else {
      categoryProducts = pizzaData.pizzaData.data.filter(
        (item) => item.category !== 2 && item.category !== 5 && item.category !== 0,
      );
    }
  }

  //pagination
  let pagesCount = Math.ceil(categoryProducts.length / limit);
  let start = limit * currentPage;
  let end = start + limit;
  categoryProducts = categoryProducts.slice(start, end);
  for (let i = 0; i < pagesCount; i++) {
    pages.push(i);
  }

  return (
    <>
      <Header
        inputValueSearch={inputValueSearch}
        sumPriceProduct={sumPriceProduct}
        countProduct={productsInBasket.length}
      />
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
              {categoryProducts.map((product) => {
                return (
                  <Product
                    product={product}
                    key={product.id}
                    dough={dough}
                    setSumInBasket={setSumInBasket}
                    setProductInBasket={setProductInBasket}
                  />
                );
              })}
            </div>
          </div>
          <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      )}

      <Footer />
    </>
  );
});
export default Home;
