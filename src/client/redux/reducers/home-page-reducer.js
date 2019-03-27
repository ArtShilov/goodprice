import { APP_TYPES } from '../actions/home-page-actions';

const appReducerInitState = {
  products: [],
  cart: []
};

export default function appReducer(state = appReducerInitState, action) {
  switch (action.type) {
    case APP_TYPES.Products_To_Redux:
      return { ...state, products: action.products };
    case APP_TYPES.CART_TO_REDUX:
      return { ...state, cart: state.cart.concat(action.item) };
    default:
      return state;
  }
}
