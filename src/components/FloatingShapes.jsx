import React, { useState, useEffect } from "react";
import { svgShapes } from "../../constants.jsx";

const FloatingShape = ({ shape, initialPosition, direction = "vertical" }) => {
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    const moveShape = () => {
      if (direction === "vertical") {
        setPosition((prev) => ({
          ...prev,
          y: prev.y > -200 ? prev.y - 2 : window.innerHeight + 150,
        }));
      } else if (direction === "horizontal") {
        setPosition((prev) => ({
          ...prev,
          x: prev.x > -200 ? prev.x - 2 : window.innerWidth + 150,
        }));
      }
    };

    const interval = setInterval(moveShape, 10);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div
      className="absolute transition-transform"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `rotate(${position.rotation}deg)`,
        opacity: 0.7,
      }}
    >
      {shape}
    </div>
  );
};

const FloatingShapes = ({
  count = 8,
  backgroundColor = "transparent",
  direction = "vertical",
}) => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const getInitialPosition = () => {
      if (direction === "vertical") {
        return {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight * 1.5,
          rotation: Math.random() * 360,
        };
      } else if (direction === "horizontal") {
        return {
          x: Math.random() * window.innerWidth * 1.5 + window.innerWidth * 0.5,
          y: Math.random() * window.innerHeight,
          rotation: Math.random() * 360,
        };
      }
    };

    const newShapes = Array.from({ length: count }, (_, i) => ({
      id: i,
      shape: svgShapes[i % svgShapes.length],
      initialPosition: getInitialPosition(),
    }));

    setShapes(newShapes);
  }, [count, direction]);

  return (
    <div
      className={`w-full h-full absolute top-0 left-0 overflow-hidden ${
        backgroundColor !== "transparent" ? `bg-[${backgroundColor}]` : ""
      }`}
    >
      {shapes.map((shape) => (
        <FloatingShape
          key={shape.id}
          shape={shape.shape}
          initialPosition={shape.initialPosition}
          direction={direction}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
