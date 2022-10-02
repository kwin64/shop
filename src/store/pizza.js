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

  setValueLoading(value) {
    this.loading = value;
  }

  async fetchDataPizza() {
    this.setValueLoading(true);
    try {
      const data = await pizzaServices.pizzaData();
      this.setDataPizza(data);
    } catch (error) {
    } finally {
      this.setValueLoading(false);
    }
  }
}
export default new Pizza();
