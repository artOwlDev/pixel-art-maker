

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./drawproperties.scss"
import { CirclePicker } from 'react-color'
import Board from './Board'




const DrawProperties = () => {
    const [dimensions, setDimensions] = useState(16);
    const [color, setColor] = useState("")
    const params = useParams();


    const changeColor = (color) => {
        setColor(color.hex)
    }


    useEffect(() => {
        setDimensions(params.dimension)
    },[params.dimension])


    return (
        <div className='draw-properties'>
            
            <div className="color-component">
                <CirclePicker color={color} onChangeComplete={changeColor} colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#426899", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#e2c396", "#795548", "#000000", "#FFFFFF"]}/>
            </div>
            <div className="board-component">
                <Board width={dimensions} height={dimensions} color={color}/>   
            </div>

        </div>
    )


}

export default DrawProperties