import React, { useState } from 'react';
import './ColorBox.scss'

ColorBox.propTypes = {

};

function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'red', 'black']
    const ramdomIndex = Math.trunc(Math.random() * 5)
    return COLOR_LIST[ramdomIndex]
}

function ColorBox() {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'deeppink'
        console.log(initColor)
        return initColor
    })

    function handleBoxClick() {
        const newColor = getRandomColor()
        setColor(newColor)
        localStorage.setItem('box-color', newColor)
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
            Color Box
        </div>
    );
}

export default ColorBox;