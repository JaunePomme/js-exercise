import React from "react";
import Box from "./Box";

export default function List({ array }) {
  return (
    <div>
      {array.map((item, y) => (
        <div key={y} className="board-row">
          {item.map((item, x) => (
            <Box key={x} content={item} x={x} y={y} />
          ))}
        </div>
      ))}
    </div>
  );
}
