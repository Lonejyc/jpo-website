import React, { useRef, useState } from "react";

// Components
import Slider from "../Slider/Slider";
import Loader from "../Loader/Loader";

// Styles
import "./Loading.css";
import cn from "mxcn";

function Loading({ onLoad }) {
    const sliderInfo = {
        count: 5,
        content: "3 février de 9h à 17h30",
    };

    const [ showLoader, setShowLoader ] = useState(false);

    const handleRedirect = () => {
        setShowLoader(true);

        setTimeout(() => {
            setShowLoader(false);
            onLoad();
        }, 4000);    
    }

    return (
        <>
            <div className={cn('loading-page', { 'hidden': showLoader })}>
                <h1>Bienvenue sur le site des JPO</h1>
                <h2>Les JPO se dérouleront le</h2>
                <Slider sliderInfo={sliderInfo}/>
                <h2>à l'IUT de Chambéry</h2>
                <button className="redirectButton" onClick={handleRedirect}>Voir la carte</button>
            </div>
            <div className={cn("loader", { 'hidden': !showLoader})}>
                <Loader />
            </div>
        </>
    );
}

export default Loading;