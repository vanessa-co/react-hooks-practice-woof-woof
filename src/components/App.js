import React, { useState, useEffect } from "react";
import Pup from "./Pup";
import DogInfo from "./DogInfo";

function App() {
  const [pups, setPups] = useState([]);
  const [selectedPup, setSelectedPup] = useState(null);
  const [filterOn, setFilterOn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((resp) => resp.json())
      .then((data) => setPups(data));
  }, []);

  const handleClickPup = (pup) => {
    setSelectedPup(pup);
  };

  const handleClickGoodness = () => {
    fetch(`http://localhost:3001/pups/${selectedPup.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isGoodDog: !selectedPup.isGoodDog,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setSelectedPup(data);
        const updatedPups = pups.map((p) => (p.id === data.id ? data : p));
        setPups(updatedPups);
      });
  };

  const handleClickFilter = () => {
    setFilterOn(!filterOn);
  };

  const filteredPups = filterOn ? pups.filter((p) => p.isGoodDog) : pups;

  return (
    <div className="App">
      <div id="filter-div">
        <button onClick={handleClickFilter

    }>
      {filterOn ? "Filter good dogs: ON" : "Filter good dogs: OFF"}
    </button>
  </div>
  <div id="dog-bar">
    {filteredPups.map((pup) => (
      <Pup key={pup.id} pup={pup} onClick={handleClickPup} />
    ))}
  </div>
  {selectedPup && (
    <DogInfo pup={selectedPup} onClick={handleClickGoodness} />
  )}
</div>

); }

export default App;
