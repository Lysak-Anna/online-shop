import axios from 'axios';
axios.defaults.baseURL = `https://fakestoreapi.com/products`;

export const getProducts = async () => {
  const products = await axios();
  return products;
};
export const getProductsByCategory = async category => {
  const products = await axios(`/category/${category}`);
  return products;
};

export const getProductDetailById = async productId => {
  const product = await axios(`/${productId}`);
  return product;
};
