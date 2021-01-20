import React, { useState } from 'react'
import Response from './Response';

const Wheel = ({ setGameState }) => {
    const [styling, setStyling] = useState(false);
    const [styling2, setStyling2] = useState(true);
    const [prize, setPrize] = useState();
    const [prizeShow, setPrizeShow] = useState(false);
    const [btnActive, setBtnActive] = useState(true);
    const [prizes, setPrizes] = useState(ini);

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }
    const spin = () => {
        setBtnActive(false);
        setPrizes(shuffle(prizes));
        setPrize(prizes[6]);
        setStyling(!styling);
        setTimeout(() => {
            setStyling(false);
            setPrizeShow(true);
        }, 7000);
    };
    const changeState = () => {
        setStyling2(false);
        setTimeout(() => {
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

const ini = [
    100,
    1000,
    10000,
    9,
    40,
    8000,
    200000,
    1000000,
    1,
    "Bankrott",
    60,
    9999
]

export default Wheel;   
