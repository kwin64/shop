import { makeAutoObservable } from 'mobx';
import pizzaServices from '../services/pizza.services';

class Pizza {
  pizzaData = null;

  constructor() {
    makeAutoObservable(this);
  }

  setDataPizza(data) {
    this.pizzaData = data;
  }

  async fetchDataPizza() {
    try {
      const data = await pizzaServices.pizzaData();
      this.setDataPizza(data);
      console.log(data);
    } catch (error) {}
  }
}
export default new Pizza();
