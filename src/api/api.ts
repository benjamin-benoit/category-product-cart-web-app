import axios from "axios";
import { Category, Product } from "./types";

const instance = axios.create({
    baseURL: 'localhost:3000',
})

const getCategories = () => {
  return instance.get<Category[]>("/categories");
};

const getCategory = (id: string) => {
  return instance.get<Category>(`/categories/${id}`);
};

const getProducts = () => {
  return instance.get<Product[]>("/categories");
};

const getProduct = (id: string) => {
  return instance.get<Product>(`/categories/${id}`);
};

const todoService = {
  getCategories,
  getCategory,
  getProducts,
  getProduct,
};

export default todoService;