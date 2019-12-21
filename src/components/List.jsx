import React from "react";

export default function List({ countryList }) {
  return (
    <div>
      <ul>
        {countryList.map(country => {
          return <li key={country.id}>{country.name}</li>; //TEMPLATE ON HOW TO map props to html items
        })}
      </ul>
    </div>
  );
}
