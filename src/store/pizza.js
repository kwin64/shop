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
      this.setDataPizza(data);
    } catch (error) {
    } finally {
      this.loading = false;
    }
  }
}
export default new Pizza();
