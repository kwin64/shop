import instance from './instance';

const pizzaData = async () => {
  const data = await instance.get();
  console.log(data);
  return data;
};

export default { pizzaData };
