

import React, { useRef } from 'react'
import Map from './Map';
import "./board.scss"
import { Link } from 'react-router-dom';
import { exportComponentAsPNG } from "react-component-export-image";

const Board = ({width, height, color}) => {

    let map = [];

    const imgRef = useRef();

    for (let i = 0 ; i < height; i++){
      map.push(<Map key={i} width={width} color={color} />)
    }

    return (
      <div className='board'>
        <div className="board-div" ref={imgRef}>
          {map}
        </div>

        <div className="buttons">
            <Link to={"/"}><button>RESET</button></Link>
            <button onClick={() => exportComponentAsPNG(imgRef)}>Export</button>
        </div>
      </div>
    )
}

export default Board