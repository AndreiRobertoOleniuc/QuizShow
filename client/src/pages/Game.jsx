import React, { useState, useEffect } from 'react'
import Title from "./components/Title";
import Grid from "./components/Grid";
import Inputs from "./components/Inputs";

const Game = () => {
    const [input, setInput] = useState(null);
    return (
        <div className="gamePage">
            <Title title={"Wheel of Fortune"} />
            <Grid userinput={input} />
            <Inputs setInput={setInput} />
        </div>
    )
}

export default Game