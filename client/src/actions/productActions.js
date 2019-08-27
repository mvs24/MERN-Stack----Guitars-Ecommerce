import axios from "axios";
import {
  GET_PRODUCTS_BY_SELL,
  GET_BRANDS,
  GET_WOODS,
  GET_PRODUCTS_BY_ARRIVALS,
  GET_PRODUCTS_TO_SHOP
} from "./types";

import { PRODUCT_SERVER } from "../components/utils/helper";

export const getProductsBySell = () => {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
    .then(res => res.data);
  return {
    type: GET_PRODUCTS_BY_SELL,
    payload: request
  };
};

export const getProductsByArrival = () => {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
    .then(res => res.data);
  return {
    type: GET_PRODUCTS_BY_ARRIVALS,
    payload: request
  };
};

export const getBrands = () => {
  const request = axios.get(`${PRODUCT_SERVER}/brands`).then(res => res.data);
  return {
    type: GET_BRANDS,
    payload: request
  };
};
export const getWoods = () => {
  const request = axios.get(`${PRODUCT_SERVER}/woods`).then(res => res.data);
  return {
    type: GET_WOODS,
    payload: request
  };
};

export const getProductsToShop = (skip, limit, filters = [], previousState = []) => {
  const data = {
    limit,
    skip,
    filters
  };
  
  const request = axios
    .post(`${PRODUCT_SERVER}/shop`, data)
    .then(res => {
      return {
        size: res.data.size,
        articles: res.data.articles
      }
    });

  return {
    type: GET_PRODUCTS_TO_SHOP,
    payload: request
  };
};
