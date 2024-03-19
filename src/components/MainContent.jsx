import React, { useState } from "react";
import HiddenObject from "./HiddenObject";
import PopupForm from "./PopupForm";
import PecEtage from "./Map/PecEtage";
import PecRDC from "./Map/PecRDC";
import PecPlein from "./Map/PecPlein";
import {
  Couloir,
  GacoEtage,
  GacoPlein,
  GacoRDC,
  MMIEtage,
  MMIPlein,
  MMIRDC,
  PecEtage,
  PecPlein,
  PecRDC,
  SGMEtage,
  SGMPlein,
  SGMRDC,
} from "./Map";



const MainContent = () => {
  const totalObjects = 1; // Total number of HiddenObject components
  const [clickedCount, setClickedCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleObjectClick = (id) => {
    setClickedCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === totalObjects) {
        setShowPopup(true);
      }
      return newCount;
    });
  };

  return (
    <div>
      <div id="main-content"> <Couloir />
        {/* Le contenu principal de votre site, y compris la carte SVG, ira ici. */}
        <svg
          width="516"
          height="316"
          viewBox="0 0 1440 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <PecPlein />
          <PecEtage />
          <PecRDC />
        </svg>

        {/* Vous pouvez inclure d'autres composants ici, comme un PopupForm ou des boutons de navigation. */}

        <div className="buttons">
          <a href="#" className="floor low">
            0
          </a>
          <a href="#" className="floor high">
            1
          </a>
        </div>
      </div>

      {/* HiddenObject instances here, passing handleObjectClick to each */}
      <HiddenObject
        id="obj1"
        position={{ x: 100, y: 200 }}
        onClick={handleObjectClick}
      />
      {/* Repeat for other HiddenObjects */}

      {showPopup && (
        <PopupForm isVisible={showPopup} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

export default MainContent;
