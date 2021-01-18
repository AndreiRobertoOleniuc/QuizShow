import React, { useState, useEffect } from 'react'
import Title from "./components/Title";
import Grid from "./components/Grid";
import Inputs from "./components/Inputs";
import Wheel from "./components/Wheel";

const Game = () => {
    const [input, setInput] = useState(null);
    const [prize, setPrize] = useState();
    const [prizeSet, setPrizeSet] = useState(false);
    return (
        <div className="gamePage">
            <Title title={"Wheel of Fortune"} />
            <Grid userinput={input} />
            <div className="controlsAndWheel">
                <div className="holder">
                    <Inputs setInput={setInput} />
                    <Wheel setPrize={setPrize} setPrizeSet={setPrizeSet} />
                </div>
            </div>
            {prizeSet ? (
                <div id="prizeMsg"><h1>{prize}</h1></div>
            ) :
                (null)
            }
        </div>
    )
}

export default Game