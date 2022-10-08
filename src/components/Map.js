
import React, { useRef } from 'react'
import Pixels from './Pixels';
import "./map.scss"


const Map = ({width, color}) => {
    let pixels = [];

    for (let i = 0; i < width; i++){
        pixels.push(<Pixels key={i} color={color}/>)
    }

    return (
        <div className='map'>
            {pixels}
        </div>
    )
}

export default Map