import React from "react";

// Components
import Slider from "../Slider/Slider";

// Styles
import "./Loading.css";

function Loading() {
    const sliderInfo = {
        count: 5,
        content: "3 février de 9h à 17h30",
    };

    return (
        <div className="loading-page">
            <h1>Bienvenue sur le site des JPO</h1>
            <h2>Les JPO se dérouleront le</h2>
            <Slider sliderInfo={sliderInfo}/>
            <h2>à l'IUT de Chambéry</h2>
            <button className="redirectButton">Voir la carte</button>
        </div>
    );
}

export default Loading;