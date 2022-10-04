import instance from './instance';

const pizzaData = async (value) => {
  let data;
  if (value) {
    data = await instance.get(`?title=${value}`);
  } else {
    data = await instance.get();
  }
  return data;
};

export default { pizzaData };
