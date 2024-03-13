import React from 'react'

// Styles
import './Slider.css'

function Slider({ sliderInfo }) {
  return (
    <div className="slider">
      <div className="content">
        {Array.from({ length: sliderInfo.count }, (_, index) => (
          <h2 key={index} className="slider-item">{sliderInfo.content}</h2>
        ))}
        {Array.from({ length: sliderInfo.count }, (_, index) => (
          <h2 key={index} className="slider-item">{sliderInfo.content}</h2>
        ))}
      </div>
    </div>
  )
}

export default Slider