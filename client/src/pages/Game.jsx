import React, { useState, useEffect } from 'react'
import Title from "./components/Title";
import Grid from "./components/Grid";
import Inputs from "./components/Inputs";
import Wheel from "./components/Wheel";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";

const Game = () => {
    const [input, setInput] = useState("");
    const [prize, setPrize] = useState();
    const [prizeSet, setPrizeSet] = useState(false);
    const [player, setPlayer] = useState({});
    const [wort, setWort] = useState({});
    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(true);

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
    return (
        <div>
            {loading ?
                (<div className="center">
                    <PacmanLoader color="white" />
                </div>) :
                (
                    <div className="gamePage">
                        <Title title={"Wheel of Fortune"} />
                        <Grid userinput={input} chars={chars} setChars={setChars} wort={wort} />
                        <div className="controlsAndWheel">
                            <div className="holder">
                                <Inputs setInput={setInput} player={player} />
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
        </div>
    )
}

export default Game