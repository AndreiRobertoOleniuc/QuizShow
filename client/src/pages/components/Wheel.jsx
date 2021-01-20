import React, { useState } from 'react'
import Response from './Response';
import ini from "../data/Preise";

const Wheel = ({ setGameState, setWheelPrize }) => {
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
    const changeState = () => {
        //Ausblende
        setStyling2(false);
        setTimeout(() => {
            //Preis setzten hauptklasse
            setWheelPrize(prizes[6]);
            //Zurück zu dem Inputs
            setGameState(true);
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
            <Response res={prize} changeState={changeState} style={prizeShow ? 'show' : 'hide'} />
        </div>
    )
}


export default Wheel;   
