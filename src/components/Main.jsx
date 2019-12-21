import React, { useState, useEffect } from "react";
import List from "../components/List";

import axios from "axios";

export default function Main() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("/api/countries").then(res => setCountries(res.data));
  }, []);

  return (
    <div>
      <h1>FullStack BoilerPlate</h1>
      <List countryList={countries} />
    </div>
  );
}
