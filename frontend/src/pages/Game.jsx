import React, { useState, useEffect } from 'react'
import Title from "./components/Title";
import Grid from "./components/Grid";
import Inputs from "./components/Inputs";
import Wheel from "./components/Wheel";
import axios from "axios";
import SpielInfo from './components/SpielInfo';
import PacmanLoader from "react-spinners/PacmanLoader";
import { useHistory } from "react-router-dom";

const Game = () => {
    //Player und Input
    const [input, setInput] = useState(null);
    const [player, setPlayer] = useState({});
    //Wort und Chars
    const [wort, setWort] = useState({});
    const [chars, setChars] = useState([]);
    //Loading
    const [loading, setLoading] = useState(true);
    //Game State
    const [gameState, setGameState] = useState(false);
    //Prize
    const [wheelprize, setWheelPrize] = useState();

    const [chosenChars, setChosenChars] = useState([]);
    const [zuegeCounter, setZuegeCounter] = useState(0);
    const history = useHistory();

    useEffect(() => {
        startGame();
    }, []);
    const startGame = async () => {
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
    }
    const doResult = (res) => {
        console.log(res);
        if (res === "add") {
            setPlayer({ ...player, betrag: player.betrag + wheelprize });
        } else if (res === "sub") {
            setPlayer({ ...player, lebensPunkt: player.lebensPunkt - 1 })
        }
        setZuegeCounter(zuegeCounter + 1);
    }
    useEffect(() => {
        if (player.lebensPunkt === 0) {
            setGameLost(true);
            history.push("/GameOver");
        }
    }, [player.lebensPunkt]);
    return (
        <div>
            {loading ?
                (<div className="center">
                    <PacmanLoader color="white" />
                </div>) :
                (
                    <div className="gamePage">
                        <div>
                            <Title title={"Wheel of Fortune"} />
                            <Grid
                                userinput={input}
                                chars={chars}
                                setChars={setChars}
                                wort={wort}
                                doResult={doResult}
                            />
                            <div className="controlsAndWheel">
                                <div className="holder">
                                    {gameState ? (
                                        <Inputs
                                            setInput={setInput}
                                            player={player}
                                            setGameState={setGameState}
                                            gameState={gameState}
                                            wheelprize={wheelprize}
                                            chosenChars={chosenChars}
                                            setChosenChars={setChosenChars}
                                        />
                                    ) : (
                                            <Wheel
                                                setGameState={setGameState}
                                                setWheelPrize={setWheelPrize}
                                                player={player}
                                                setPlayer={setPlayer}
                                            />
                                        )}
                                    <SpielInfo
                                        player={player}
                                        zuegeCounter={zuegeCounter}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Game