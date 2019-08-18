import axios from "axios";
import { GET_PRODUCTS_BY_SELL, GET_PRODUCTS_BY_ARRIVALS } from "./types";

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