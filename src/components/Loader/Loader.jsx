import React, { useRef } from 'react'
import './Loader.css'

function Loader() {

  return (
    <>
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__ball"></div>
    </>
  )
}

export default Loader