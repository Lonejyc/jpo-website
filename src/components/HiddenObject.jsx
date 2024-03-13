import React, { useState } from "react";

const HiddenObject = ({ id, position, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
    if (onClick) onClick(id);
  };

  return (
    isVisible && (
      <rect
        x={position.x}
        y={position.y}
        width="10"
        height="10"
        fill="#ff11ff"
        onClick={handleClick}
        cursor="pointer"
      />
    )
  );
};

export default HiddenObject;
