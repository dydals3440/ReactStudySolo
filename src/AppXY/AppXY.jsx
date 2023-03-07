import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="container"
      onMouseMove={(e) => {
        setPosition((prev) => ({ x: e.clientX, y: prev.y }));
      }}
    >
      <div
        className="pointer"
        style={{
          transform: `translate(${position.x - 25}px, ${position.y - 25}px)`,
        }}
      ></div>
    </div>
  );
}
