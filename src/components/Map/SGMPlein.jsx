import * as React from "react";
const SvgComponent = (props) => (
  <g
    {...props}
  >
    <defs>
      <style>{".room{fill:#c72121;stroke:#000;stroke-miterlimit:10;}"}</style>
    </defs>
    <g id="Calque_2" data-name="Calque 2">
      <g id="Ailes">
        <path
          className="room"
          d="M260.79.5c-46.83,0-65.36,17-65.36,17V251.06H.5V386.29H195.43V510.9h23.23a13,13,0,0,0-13,13v11.24a13,13,0,0,0,13,13h84.25a13,13,0,0,0,13-13V523.92a13,13,0,0,0-13-13h23.23V443h0v-.07h0V375h0V375h0V274.62h0v-.08h0V242.05h0V119.11h0V17.53h0S307.62.5,260.79.5Z"
        />
      </g>
    </g>
  </g>
);
export default SvgComponent;
