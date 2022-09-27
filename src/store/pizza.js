import { makeAutoObservable } from 'mobx';
import pizzaServices from '../services/pizza.services';

class Pizza {
  pizzaData = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setDataPizza(data) {
    this.pizzaData = data;
  }

  async fetchDataPizza() {
    this.loading = true;
    try {
      const data = await pizzaServices.pizzaData();
      this.loading = false;
      this.setDataPizza(data);
    } catch (error) {}
  }
}
export default new Pizza();
