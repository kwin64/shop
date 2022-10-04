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
