import React from "react";

export default function List({ productList }) {
  return (
    <div>
      <ul>
        {productList.map(e => {
          return <li key={e.id}>{e.name}</li>; //TEMPLATE ON HOW TO map props to html items
        })}
      </ul>
    </div>
  );
}
