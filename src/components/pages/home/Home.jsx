import { observer } from 'mobx-react-lite';
import React from 'react';
import pizzaData from '../../../store/pizza';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Categories from './Categories';
import './home.scss';
import Product from './Product';

const Home = observer(() => {
  const dough = ['традиционное', 'тонкое'];
  const categories = ['все', 'вегетарианская', 'острая'];
  const options = ['популярности', 'цене', 'по алфавиту'];
  let categoryProducts;

  const [activeDough, setActiveDough] = React.useState(null);
  const [activeSize, setActiveSize] = React.useState(null);
  const [activeCategories, setActiveCategories] = React.useState(0);

  const [currentCategory, setCurrentCategory] = React.useState('all');

  const onClickCategoryHandler = (index) => {
    setActiveDough(index);
  };

  const onClickSortedHandler = (filterValue) => {
    if (filterValue === 'по алфавиту') {
      categoryProducts = pizzaData.pizzaData.data.sort((x, y) => {
        if (x.title < y.title) {
          return -1;
        }
        if (x.title > y.title) {
          return 1;
        }
        return 0;
      });
    } else if (filterValue === 'цене') {
      categoryProducts = pizzaData.pizzaData.data.sort((x, y) => {
        if (x.price < y.price) {
          return -1;
        }
        if (x.title > y.title) {
          return 1;
        }
        return 0;
      });
    } else if (filterValue === 'популярности') {
      categoryProducts = pizzaData.pizzaData.data.sort((x, y) => {
        if (x.rating > y.rating) {
          return -1;
        }
        if (x.rating < y.rating) {
          return 1;
        }
        return 0;
      });
    }
  };

  const onClickSizeHandler = (index) => {
    setActiveSize(index);
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
      <Header />
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
                return (
                  <Product
                    product={product}
                    key={product.id}
                    dough={dough}
                    activeDoug={activeDough}
                    onClickCategoryHandler={onClickCategoryHandler}
                    activeSize={activeSize}
                    onClickSortHandler={onClickSizeHandler}
                  />
                );
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
