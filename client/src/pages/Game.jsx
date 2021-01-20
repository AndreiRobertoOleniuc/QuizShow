import React, { useState, useEffect } from 'react'
import Title from "./components/Title";
import Grid from "./components/Grid";
import Inputs from "./components/Inputs";
import Wheel from "./components/Wheel";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";

const Game = () => {
    const [input, setInput] = useState(null);
    const [player, setPlayer] = useState({});
    const [wort, setWort] = useState({});
    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(true);

    const [gameState, setGameState] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8080/startGame?name=Andrei")
            .then((res) => {
                setPlayer(res.data.player);
                setWort({
                    kategorie: res.data.wort.kategorie,
                    wort: res.data.wort.wort
                });
                setChars(res.data.wort.chars);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);
    const doResult = (res) => {
        console.log(res);
        if (res === "add") {
            setPlayer({ ...player, betrag: player.betrag + 0 });
        } else if (res === "sub") {
            setPlayer({ ...player, lebensPunkt: player.lebensPunkt - 1 })
        }
    }
    return (
        <div>
            {loading ?
                (<div className="center">
                    <PacmanLoader color="white" />
                </div>) :
                (
                    <div className="gamePage">
                        <Title title={"Wheel of Fortune"} />
                        <Grid userinput={input} chars={chars} setChars={setChars} wort={wort} doResult={doResult} />
                        <div className="controlsAndWheel">
                            <div className="holder">
                                {gameState ? (
                                    <Inputs
                                        setInput={setInput}
                                        player={player}
                                        setGameState={setGameState}
                                        gameState={gameState}
                                    />
                                ) : (
                                        <Wheel
                                            setGameState={setGameState}
                                        />
                                    )}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Game