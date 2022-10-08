
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './initialscreen.scss'

const InitialScreen = () => {
    const [drawButton, setDrawButton] = useState(false);
    const [dimensions, setDimensions] = useState(32);

    useEffect(() => {
        if (dimensions >= 8 && dimensions <= 32){
            setDrawButton(true);
            console.log(dimensions)
        }
        else{
            setDrawButton(false);
        }
    },[dimensions])

    return (
        <div className='editor'>
            <h1>Pixelton</h1>
            <h2>Enter the dimensions:</h2>
            <p>Note: The dimensions have to be of the same size.</p>
            <div className="options">
                <div className="button-div">
                    <button onClick={() => setDimensions(8)}>8x8</button>
                    <button onClick={() => setDimensions(16)}>16x16</button>
                    <button onClick={() => setDimensions(24)}>24x24</button>
                    <button onClick={() => setDimensions(32)}>32x32</button>
                </div>

                <div className="option">
                    <input type="number" value={dimensions} className='dimensionX' onChange={(e) => setDimensions(e.target.value)}/>
                    <h2>x</h2>
                    <input type="number" value={dimensions} className='dimensionY' onChange={(e) => setDimensions(e.target.value)}/>
                </div>

                {!drawButton && <h3>Error: Enter a positive value between 8 and 32!</h3>}

                {drawButton && <Link to={"/board/" + dimensions}style={{ textDecoration: 'none' }}> <div><button className="start-drawing">Start   Drawing!</button></div>
                </Link>
                }

            </div>
        </div>
    )
}

export default InitialScreen