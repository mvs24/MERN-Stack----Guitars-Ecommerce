import { LOGIN_USER } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginSuccess: action.payload
      };
    default:
      return state;
  }
}
