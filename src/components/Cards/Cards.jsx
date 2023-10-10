import React from "react";
import "./Cards.css";
const Cards = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${monster.id}?set=set2`}
        alt={`monsert ${monster.name}`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Cards;
