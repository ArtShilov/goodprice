//  ACTION TYPES
export const APP_TYPES = {
  CART_TO_REDUX: 'CART_TO_REDUX',
  Products_To_Redux: 'Products_To_Redux'
};

// ACTION CREATORS
export const productsToReduxAC = products => ({
  type: APP_TYPES.Products_To_Redux,
  products
});

export const cartToReduxAC = item => ({
  type: APP_TYPES.CART_TO_REDUX,
  item
});
