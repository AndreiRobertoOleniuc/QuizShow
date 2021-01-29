import React, { useState, useEffect } from 'react'
import Title from "./components/Title";
import Grid from "./components/Grid";
import Inputs from "./components/Inputs";
import Wheel from "./components/Wheel";
import axios from "axios";
import SpielInfo from './components/SpielInfo';
import PacmanLoader from "react-spinners/PacmanLoader";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from "react-animations";

const fade = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
    animation: 1000ms ${fade};
`;

const Game = ({ inputName, setPlayer, player, anzahlRunden, setAnzahlRunden }) => {
    //Player und Input
    const [input, setInput] = useState(null);
    //Wort und Chars
    const [wordList, setWordList] = useState([]);
    const [wort, setWort] = useState({});
    const [chars, setChars] = useState([]);
    const [frageList, setFrageList] = useState([]);
    //Loading
    const [loading, setLoading] = useState(true);
    //Game State
    const [gameState, setGameState] = useState(false);
    //Prize
    const [wheelprize, setWheelPrize] = useState();

    const [chosenChars, setChosenChars] = useState([]);
    const [guessed, setGuessed] = useState(false);
    let history = useHistory();

    useEffect(() => {
        startGame();
        return () => {
            setInput(null);
            setWordList(null);
            setWort(null);
            setChars(null);
            setGameState(false);
            setWheelPrize(null);
            setChosenChars(null);
            setAnzahlRunden(0);
            setGuessed(false);
        }
    }, []);
    const startGame = async () => {
        axios.get(`http://localhost:8080/startGame?name=${inputName}`)
            .then((res) => {
                setPlayer(res.data.player);
                setWort({
                    kategorie: res.data.wort.kategorie,
                    wort: res.data.wort.wort
                });
                setChars(res.data.wort.chars);
                setLoading(false);
                setWordList([...wordList, res.data.wort.wort]);
            })
            .catch((err) => {
                console.error(err);
            })
    }
    const doResult = (res) => {
        if (!input.vowel) {
            if (res === "add") {
                setPlayer({ ...player, betrag: player.betrag + wheelprize });
            } else if (res === "sub") {
                setPlayer({ ...player, lebensPunkt: player.lebensPunkt - 1 })
            }
        } else {
            if (res === "sub") {
                setPlayer({ ...player, lebensPunkt: player.lebensPunkt - 1 })
            }
        }
    }
    const newWord = async () => {
        axios.get(`http://localhost:8080/getNewWord`)
            .then((res) => {
                setWort({
                    kategorie: res.data.kategorie,
                    wort: res.data.wort
                });
                setChars(res.data.chars);
                if (wordList.includes(res.data.wort)) {
                    newWord();
                } else {
                    setAnzahlRunden(anzahlRunden + 1);
                    setWordList([...wordList, res.data.wort]);
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }
    useEffect(() => {
        if (player === null ? null : player.lebensPunkt === 0) {
            setPlayer(null);
            history.push("/GameOver");
        }
    }, [player === null ? null : player.lebensPunkt === 0]);
    return (
        <FadeInDiv>
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
                                guessed={guessed}
                            />
                            <div className="controlsAndWheel">
                                <div className="holder">
                                    {gameState ? (
                                        <Inputs
                                            setInput={setInput}
                                            player={player}
                                            setPlayer={setPlayer}
                                            setGameState={setGameState}
                                            gameState={gameState}
                                            wheelprize={wheelprize}
                                            chosenChars={chosenChars}
                                            setChosenChars={setChosenChars}
                                            wort={wort}
                                            setGuessed={setGuessed}
                                            guessed={guessed}
                                            newWord={newWord}
                                        />
                                    ) : (
                                            <Wheel
                                                setGameState={setGameState}
                                                setWheelPrize={setWheelPrize}
                                                player={player}
                                                setPlayer={setPlayer}
                                                setFrageList={setFrageList}
                                                frageList={frageList}
                                            />
                                        )}
                                    <SpielInfo
                                        player={player}
                                        anzahlRunden={anzahlRunden}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </FadeInDiv>
    )
}

export default Game