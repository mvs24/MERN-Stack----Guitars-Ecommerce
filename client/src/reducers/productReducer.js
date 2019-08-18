import {
  GET_PRODUCTS_BY_SELL,
  GET_PRODUCTS_BY_ARRIVALS
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
    default:
      return state;
  }
}
