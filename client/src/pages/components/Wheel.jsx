import React from 'react'

export default function Wheel() {
    const [styling, setStyling] = React.useState(false);
    const [styling2, setStyling2] = React.useState(false);
    const [prizes, setPrizes] = React.useState([
        100,
        1000,
        10000,
        20,
        40,
        8000,
        200000,
        1000000,
        1,
        0,
        60,
        9999
    ]);
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }
    const spin = () => {
        setPrizes(shuffle(prizes));
        console.log(prizes);
        setStyling(!styling);
        setStyling2(!styling2);
    }
    return (
        <div className="wheel">
            <div className="plate">
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
                    <div className={styling2 ? "content-container activated" : "content-container"}>
                        <div className="pre">
                            <button id="spin" onClick={spin}>Spin</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
