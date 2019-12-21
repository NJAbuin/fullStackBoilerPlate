import axios from "axios";
import {} from "../constants";

export const getCountries = () => dispatch => {
  //   axios
  //     .get(`/api/countries`)
  //     .then(res => res.data)
  //     .then(response => {
  //       return dispatch(countryAction(response));
  //     });
};

const countryAction = payload => {
  return { type: "", payload };
};
