//  ACTION TYPES
export const APP_TYPES = {
  Products_To_Redux: 'Products_To_Redux'
};

// ACTION CREATORS
export const productsToReduxAC = products => ({
  type: APP_TYPES.Products_To_Redux,
  products
});
