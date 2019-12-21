import {} from "../constants";

const initialState = [];

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getCountries = state => state.countries;
