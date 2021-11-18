import React from "react";
import List from "./List";

const data = require("./data.json");

export default function Board() {
  let array = Array(data.C.y)
    .fill("")
    .map(() => new Array(data.C.x).fill("*"));

  const fillMountains = () => {
    data.M.map((mountain) => array[mountain.y].splice(mountain.x, 1, "M"));
  };

  const fillTreasures = () => {
    data.T.map((treasure) =>
      array[treasure.y].splice(treasure.x, 1, "T(" + treasure.quantity + ")")
    );
  };

  const fillAdventurers = () => {
    data.A.map((adventurer) =>
      array[adventurer.y].splice(adventurer.x, 1, "A(" + adventurer.name + ")")
    );
  };
  fillMountains();
  fillTreasures();
  fillAdventurers();

  return (
    <div>
      <List array={array} />
    </div>
  );
}
