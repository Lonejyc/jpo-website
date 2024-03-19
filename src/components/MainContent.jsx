import React, { useEffect, useRef, useState } from "react";
import HiddenObject from "./HiddenObject";
import PopupForm from "./PopupForm";
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
  const svgContainerRef = useRef(null);

  const handleObjectClick = (id) => {
    setClickedCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === totalObjects) {
        setShowPopup(true);
      }
      return newCount;
    });
  };
  const handleClickRoom = (e) => {
    console.log('room clicked !', e.target);
  };

  useEffect(() => {
    const element = svgContainerRef.current;
    element.querySelectorAll(".room").forEach((svgEl) => {
      svgEl.addEventListener("click", handleClickRoom);
    });

    return () => {
      element.querySelectorAll(".room").forEach((svgEl) => {
        svgEl.removeEventListener("click", handleClickRoom);
      });
    }
  }, []);

  return (
    <div>
      <div id="main-content">
        <svg width="1440" height="1080" ref={svgContainerRef}>
          <Couloir width={200} />
          {/* Le contenu principal de votre site, y compris la carte SVG, ira ici. */}
          <PecPlein width={200} />
          <PecEtage width={200} />
          <PecRDC width={200} />
          <GacoPlein width={200} />
          <GacoEtage width={200} />
          <GacoRDC width={200} />
          <MMIPlein width={200} />
          <MMIEtage width={200} />
          <MMIRDC width={200} />
          <SGMPlein width={200} />
          <SGMEtage width={200} />
          <SGMRDC width={200} />
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
