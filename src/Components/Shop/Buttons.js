import React from "react";

function Buttons({ filteredPlants }) {
  return (
    <div className="cont">
      <button className="change" onClick={() => filteredPlants("small")}>
        small
      </button>
      <button className="change" onClick={() => filteredPlants("medium")}>
        medium
      </button>
      <button className="change" onClick={() => filteredPlants("large")}>
        large
      </button>
    </div>
  );
}

export default Buttons;
