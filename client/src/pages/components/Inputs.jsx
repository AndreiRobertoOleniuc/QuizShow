import React, { useEffect, useState } from 'react'
import chars from "../data/Chars";

const Inputs = ({ setInput, player, setGameState, setChosenChars, chosenChars }) => {
    const alphabet = chars;
    const [vokalMode, setVokalMode] = useState(false);
    const [styling, setStyling] = useState(true);
    const [allowCharInput, setAllowCharInput] = useState(true);
    const [styleActionbtn, setStyleActionbtn] = useState(
        [
            {
                style: "nonFunc",
                btnStyle: false
            },
            {
                style: "nonFunc",
                btnStyle: false
            }, {
                style: "actionBtn",
                btnStyle: true
            }, {
                style: "actionBtn",
                btnStyle: true
            },
        ]);

    var searchWord = (e) => {
        setInput(e.target.id);
        setChosenChars([...chosenChars, e.target.id]);
        setAllowCharInput(false);
        setStyleActionbtn([
            {
                style: "actionBtn",
                btnStyle: true
            }, {
                style: "actionBtn",
                btnStyle: true
            },
            {
                style: "nonFunc",
                btnStyle: false
            },
            {
                style: "nonFunc",
                btnStyle: false
            },
        ])
    };
    const rateVokal = () => {
        setVokalMode(!vokalMode);
    }
    const weiterSpielen = () => {
        setVokalMode(false);
        setStyling(false);
        setTimeout(() => {
            setGameState(false);
        }, 500);
    }
    return (
        <div className={`inputs ${styling ? 'show' : 'hide'}`}>
            <div className="charBox">
                {alphabet.map((item) => {
                    let vowelList = 'AEIOUaeiou'
                    if (allowCharInput) {
                        if (vokalMode) {
                            if (vowelList.indexOf(item) !== -1) {
                                if (chosenChars.includes(item)) {
                                    return (
                                        <button className="nonWorking" key={item} id={item} onClick={null}>{item}</button>
                                    )
                                } else {
                                    return (
                                        <button className="working" key={item} id={item} onClick={searchWord}>{item}</button>
                                    )
                                }
                            } else {
                                return (
                                    <button className="nonWorking" key={item} id={item} onClick={null}>{item}</button>
                                )
                            }
                        } else {
                            if (vowelList.indexOf(item) !== -1) {
                                return (
                                    <button className="nonWorking" key={item} id={item} onClick={null}>{item}</button>
                                )
                            } else {
                                if (chosenChars.includes(item)) {
                                    return (
                                        <button className="nonWorking" key={item} id={item} onClick={null}>{item}</button>
                                    )
                                } else {
                                    return (
                                        <button className="working" key={item} id={item} onClick={searchWord}>{item}</button>
                                    )
                                }
                            }
                        }
                    } else {
                        return (
                            <button className="nonWorking" key={item} id={item} onClick={null}>{item}</button>
                        )
                    }
                })}
            </div>
            <div className="buttonsActionen">
                <div className={styleActionbtn[0].style} onClick={styleActionbtn[0].btnStyle ? weiterSpielen : null}><button>Weiter Spielen</button></div>
                <div className={styleActionbtn[1].style} ><button>Aufhören</button></div>
                <div className={styleActionbtn[2].style} onClick={styleActionbtn[2].btnStyle ? rateVokal : null}><button>Vokal Erraten</button></div>
                <div className={styleActionbtn[3].style} ><button>Wort Erraten</button></div>
            </div>
        </div>
    )
}

export default Inputs