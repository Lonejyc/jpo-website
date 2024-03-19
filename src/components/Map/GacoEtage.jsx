import * as React from "react";
const SvgComponent = (props) => (
  <g {...props}>
    <defs>
      <style>{".room{fill:#66afe1;stroke:#000;stroke-miterlimit:10}"}</style>
    </defs>
    <g id="Calque_2" data-name="Calque 2">
      <g id="GACO_1" data-name="GACO 1">
        <path d="M.55.5H133.6v325.24H.55z" className="room" />
        <path
          d="M80.82 225.36h52.78v100.48H80.82zM80.82 127.77h52.78v97.59H80.82z"
          className="room"
        />
        <path
          d="M80.82 64.04h52.78v63.73H80.82zM.5 225.36h56.02v100.48H.5zM.5 177.16h56.02v48.2H.5zM.5 150.4h48.25v26.76H.5zM.5 84.68h56.02v18.39H.5zM.5 45.71h56.02v38.97H.5zM35.4 5.48h66.92v30.67H35.4z"
          className="room"
        />
        <rect
          width={110.3}
          height={37.28}
          x={11.9}
          y={325.84}
          className="room"
          rx={13.02}
        />
      </g>
    </g>
  </g>
);
export default SvgComponent;
