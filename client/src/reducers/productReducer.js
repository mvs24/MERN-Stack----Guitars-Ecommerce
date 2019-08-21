import {
  GET_PRODUCTS_BY_SELL,
  GET_PRODUCTS_BY_ARRIVALS,
  GET_BRANDS,
  GET_WOODS,
  GET_PRODUCTS_TO_SHOP
} from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_BY_SELL:
      return {
        ...state,
        bySell: action.payload
      };
    case GET_PRODUCTS_BY_ARRIVALS:
      return {
        ...state,
        byArrival: action.payload
      };
    case GET_BRANDS:
      return {
        ...state,
        brands: action.payload
      };
    case GET_WOODS:
      return {
        ...state,
        woods: action.payload
      };
    case GET_PRODUCTS_TO_SHOP:
      return {
        ...state,
        toShop: action.payload.articles,
        toShopSize: action.payload.size
      };
    default:
      return state;
  }
}
