import instance from './instance';

const pizzaData = async () => {
  const data = await instance.get();
  return data;
};

export default { pizzaData };
