import React, { useState } from 'react'
import Response from './Response';
import Frage from "./Frage";
import ini from "../data/Preise";

const Wheel = ({ player, setPlayer, setGameState, setWheelPrize, frageList, setFrageList }) => {
    //Dreht sich Style
    const [styling, setStyling] = useState(false);
    //Animations Style
    const [styling2, setStyling2] = useState(true);
    //Preis intern
    const [prize, setPrize] = useState();
    const [prizeShow, setPrizeShow] = useState(false);
    //Btn zustand
    const [btnActive, setBtnActive] = useState(true);
    //Preise
    const [prizes, setPrizes] = useState(ini);
    const [showFrage, setShowFrage] = useState(false);
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }
    const spin = () => {
        //Schalte Button aus
        setBtnActive(false);
        //Setzte die Preise neu
        setPrizes(shuffle(prizes));
        //Setzte den Preis
        setPrize(prizes[6]);
        //Rad soll drehen
        setStyling(!styling);
        setTimeout(() => {
            //Rad Stoppt
            setStyling(false);
            //Zeige Preis
            setPrizeShow(true);
        }, 7000);
    };
    const acceptPrize = () => {
        if (prizes[6] == "Risiko") {
            setPrizeShow(false);
            setShowFrage(true);
        } else {
            //Ausblende
            setStyling2(false);
            setTimeout(() => {
                //Preis setzten hauptklasse
                setWheelPrize(prizes[6]);
                //Zurück zu dem Inputs
                setGameState(true);
                if (prizes[6] == "Bankrott") {
                    setPlayer({
                        ...player,
                        betrag: 0
                    })
                }
            }, 500);
        }
    }
    const changeState = () => {
        setStyling2(true);
        setBtnActive(true);
        setTimeout(() => {
            //Preis setzten hauptklasse
            setWheelPrize(prizes[6]);
            //Zurück zu dem Inputs
            setGameState(false);
        }, 500);
    }
    return (
        <div className={`wheel ${styling2 ? 'show' : 'hide'}`}>
            <div className="container">
                <div className="board">
                    <div className="spinner-table">
                        <div className={styling ? "dial spinning" : "dial"}>
                            {prizes.map((item) => {
                                return (
                                    <div key={item} className="slice"><div className="label">{item}</div></div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="arrow">
                        <span className="pointer"></span>
                    </div>
                </div>
                <button id={btnActive ? 'spin' : 'nonFunc'} onClick={btnActive ? spin : null}>Spin</button>
            </div>
            {prizeShow ? (
                <Response res={prize} changeState={acceptPrize} />
            ) : (null)}
            {showFrage ? (
                <Frage
                    player={player}
                    setPlayer={setPlayer}
                    changeState={changeState}
                    setShowFrage={setShowFrage}
                    frageList={frageList}
                    setFrageList={setFrageList}
                />
            ) : (null)}
        </div>
    )
}


export default Wheel;   
