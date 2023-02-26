import React from "react";

function Pup({ pup, onClick }) {
  return (
    <span onClick={() => onClick(pup)}>
      {pup.name}
    </span>
  );
}

export default Pup;