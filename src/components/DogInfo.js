import React from "react";

function DogInfo({ pup, onClick }) {
  return (
    <div id="dog-summary-container">
      <img src={pup.image} alt={pup.name} />
      <h2>{pup.name}</h2>
      <button onClick={onClick}>
        {pup.isGoodDog ? "Good Dog!" : "Bad Dog!"}
      </button>
    </div>
  );
}

export default DogInfo;