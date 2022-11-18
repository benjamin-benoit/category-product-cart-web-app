import axios from 'axios';
import { Category, Product } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

const getCategories = () => {
  return instance.get<Category[]>('/categories').then(res => res.data);
};

const getCategory = (id: string) => {
  return instance.get<Category>(`/categories/${id}`).then(res => res.data);
};

const getProducts = () => {
  return instance.get<Product[]>('/products').then(res => res.data);
};

const getProduct = (id: string) => {
  return instance.get<Product>(`/products/${id}`).then(res => res.data);
};

const apiService = {
  getCategories,
  getCategory,
  getProducts,
  getProduct,
};

export default apiService;
