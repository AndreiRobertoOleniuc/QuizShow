import React, { useState, useEffect } from 'react'

const Wheel = ({ setPrize, setPrizeSet, setCharBoxState, wheelState, setWheelState }) => {
    const [styling, setStyling] = useState(false);
    const [prizes, setPrizes] = useState([
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
    ]);
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    const spin = () => {
        setPrizes(shuffle(prizes));
        console.log(prizes[6]);
        setStyling(!styling);
        setTimeout(() => {
            setPrize(prizes[6]);
            setPrizeSet(true);
            setStyling(false);
            setCharBoxState(true);
            setWheelState(false);
        }, 7000);
    };
    return (
        <div className="wheel">
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
                <button id={wheelState ? "spin" : "nonFunc"} onClick={wheelState ? spin : null}>Spin</button>
            </div>
        </div>
    )
}

export default Wheel;   