import { makeAutoObservable } from 'mobx';
import pizzaServices from '../services/pizza.services';

class Pizza {
  pizzaData = [];
  loading = false;
  currentPizzaInBasket = [];
  descriptionPizza = '';
  currentProductsInBasket = [];

  constructor() {
    makeAutoObservable(this);
  }

  setDataPizza(data) {
    this.pizzaData = data;
  }

  setValueLoading(value) {
    this.loading = value;
  }

  setDescription(data) {
    this.descriptionPizza = data;
  }

  setProductsInBasket(data) {
    this.currentProductsInBasket = [...this.currentProductsInBasket, data];
    console.log(this.currentProductsInBasket);
  }

  setCurrentPizzaInBasket(data) {
    this.currentPizzaInBasket = data;
  }

  async fetchDataPizza(value) {
    this.setValueLoading(true);
    if (value) {
      try {
        const data = await pizzaServices.pizzaData(value);
        this.setDataPizza(data);
      } catch (error) {
      } finally {
        this.setValueLoading(false);
      }
    } else {
      try {
        const data = await pizzaServices.pizzaData();
        this.setDataPizza(data);
      } catch (error) {
      } finally {
        this.setValueLoading(false);
      }
    }
  }
}
export default new Pizza();
