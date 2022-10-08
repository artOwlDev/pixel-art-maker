

import React, { useState } from 'react'
import "./pixels.scss"

const Pixels = ({color}) => {

    const [pixelColor, setPixelColor] = useState("#fff");
    const [oldColor, setOldColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);

    const applyColor = () => {
        setPixelColor(color);
        setCanChangeColor(false);
    }

    const hoverColor = () => {
        setOldColor(pixelColor);
        setPixelColor(color);
    }

    const leaveColor = () => {
        if (canChangeColor){
            setPixelColor(oldColor);
        }

        setCanChangeColor(true);
    }

    return (
        <div className="pixels" style={{ backgroundColor: pixelColor }} onClick={applyColor} onMouseEnter={hoverColor} onMouseLeave={leaveColor}>

        </div>
    )
}

export default Pixels