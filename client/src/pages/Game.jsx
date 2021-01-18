import React, { useState, useEffect } from 'react'
import Title from "./components/Title";
import Grid from "./components/Grid";
import Inputs from "./components/Inputs";
import Wheel from "./components/Wheel";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
import Response from './components/Response';

const Game = () => {
    const [input, setInput] = useState("");
    const [prize, setPrize] = useState();
    const [prizeSet, setPrizeSet] = useState(false);
    const [player, setPlayer] = useState({});
    const [wort, setWort] = useState({});
    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(true);

    //States
    const [charBoxState, setCharBoxState] = useState(false);
    const [wheelState, setWheelState] = useState(true);
    const [weiterSpielenState, setWeiterSpielenState] = useState(false);
    const [aufhoerenState, setAufhoerenState] = useState(false);
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
        if (res == "add") {
            setPlayer({ ...player, betrag: player.betrag + parseInt(prize) });
        } else if (res == "sub") {
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
                                <Inputs
                                    setInput={setInput}
                                    player={player}
                                    charBoxState={charBoxState}
                                    setCharBoxState={setCharBoxState}
                                    setWheelState={setWheelState}
                                    weiterSpielenState={weiterSpielenState}
                                    setWeiterSpielenState={setWeiterSpielenState}
                                    aufhoerenState={aufhoerenState}
                                    setAufhoerenState={setAufhoerenState}
                                />
                                <Wheel
                                    setPrize={setPrize}
                                    setPrizeSet={setPrizeSet}
                                    setCharBoxState={setCharBoxState}
                                    wheelState={wheelState}
                                    setWheelState={setWheelState}
                                />
                            </div>
                        </div>
                        {prizeSet ? (
                            <Response res={prize} />
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