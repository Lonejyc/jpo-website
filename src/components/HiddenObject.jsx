import React, { useState } from "react";

const HiddenObject = ({ id, position, onClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
    if (onClick) onClick(id);
  };

  return (
    isVisible && (
      <svg>
        <rect
          x={position.x}
          y={position.y}
          width="50"
          height="50"
          fill="#ff11ff"
          onClick={handleClick}
          cursor="pointer"
        />
      </svg>
    )
  );
};

export default HiddenObject;
