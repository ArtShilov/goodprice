import { APP_TYPES } from '../actions/home-page-actions';

const appReducerInitState = {
};

export default function appReducer(state = appReducerInitState, action) {
  switch (action.type) {
    case APP_TYPES.Products_To_Redux:
      return { ...state, products: action.products };
    default:
      return state;
  }
}
