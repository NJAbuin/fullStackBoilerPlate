import {} from "../constants";

const initialState = [];

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getProducts = state => state.products;
