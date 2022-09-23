import axios from 'axios';
import instance from './axiosInstance';

const pizzaData = async () => {
  const data = await instance.get();
  console.log(data);
  return data;
};

export default { pizzaData };
