import { useState } from "react";
import './App.css';

const RandomColor = () =>{
    const [color, setColor] = useState('#000')

    const getRGB = () => Math.floor(Math.random() * 256);

    const rgbToHex = (r, g, b) =>
        '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex < 10 ? '0' + hex : hex ;
        }).join('');

    const handleGenerate = () => {
         const color = {
            r: getRGB(),
            g: getRGB(),
            b: getRGB()
        };
         setColor(rgbToHex(color.r, color.g, color.b));
    };

    return (
        <div style={{backgroundColor: color}} className="container">
            <button style={{color}} onClick={handleGenerate}>
                {color}
            </button>
         </div>
    );
};

export default RandomColor;