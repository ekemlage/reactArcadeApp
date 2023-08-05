import "./styling.css";
import TicTacToe from "./ticTacToe.js";
import Home from "./home.js";
import Mancala from "./mancala";
import { useState } from 'react';

export default function ShoeButton() {
    const [Feature, setFeature] = useState(<Home />);
    let features = [<Home />,<TicTacToe />,<Mancala />]


    const handleClick = (featureIndex) => {
        setFeature(features[featureIndex])
    }

    return (
       <div>
            <div id="navBar">
                <button onClick={() => handleClick(0)}>Home</button>
                <button onClick={() => handleClick(1)}>TicTacToe</button>
                <button onClick={() => handleClick(2)}>Mancala</button>
            </div>
            <div id="feature">
                {Feature}
            </div>
       </div>
    );
 }

 





