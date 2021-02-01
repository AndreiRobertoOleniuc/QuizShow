import React, { useEffect, useState } from 'react'
import chars from "../data/Chars";
import states from "../data/ActionBtnStates";
import RateVokal from './RateVokal';
import RateWort from './RateWort';
import { useHistory } from "react-router-dom";

const Inputs = ({ setInput, player, setPlayer, setGameState, setChosenChars, chosenChars, wort, setGuessed, guessed, newWord }) => {
    const alphabet = chars;
    const [vokalMode, setVokalMode] = useState(false);
    const [styling, setStyling] = useState(true);
    const [allowCharInput, setAllowCharInput] = useState(true);
    const [allowVokalInput, setAllowVokalInput] = useState(true);
    const [styleActionbtn, setStyleActionbtn] = useState(states[0]);
    const [rateVokalPopup, setRateVokalPopup] = useState(false);
    const [rateWortPopup, setRateWortPopup] = useState(false);
    let history = useHistory();

    var searchWord = (e) => {
        let vowelList = 'AEIOUaeiou'
        if (vowelList.includes(e.target.id)) {
            setInput({ char: e.target.id, vowel: true })
        } else {
            setInput({ char: e.target.id, vowel: false })
        }
        setChosenChars([...chosenChars, e.target.id]);
        setAllowCharInput(false);
        setStyleActionbtn(states[1]);
        if (!allowCharInput) {
            setAllowVokalInput(false);
            setStyleActionbtn(states[2]);
        }
    };
    const rateVokal = () => {
        setRateVokalPopup(true);
    }
    const weiterSpielen = () => {
        if (guessed) {
            setGuessed(false);
            setVokalMode(false);
            setStyling(false);
            setTimeout(() => {
                setGameState(false);
            }, 500);
            newWord();
        } else {
            setVokalMode(false);
            setStyling(false);
            setTimeout(() => {
                setGameState(false);
            }, 500);
        }
    }
    const finishGame = () => {
        history.push("/Response")
    }
    const wordGuessed = () => {
        setGuessed(true);
        setChosenChars([]);
    }
    return (
        <div className={`inputs ${styling ? 'show' : 'hide'}`}>
            <div className="charBox">
                {alphabet.map((item) => {
                    let vowelList = 'AEIOUaeiou'
                    if (vokalMode) {
                        if (allowVokalInput) {
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
                            return (
                                <button className="nonWorking" key={item} id={item} onClick={null}>{item}</button>
                            )
                        }
                    } else {
                        if (allowCharInput) {
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
                        } else {
                            return (
                                <button className="nonWorking" key={item} id={item} onClick={null}>{item}</button>
                            )
                        }
                    }
                })}
            </div>
            <div className="buttonsActionen">
                <div className={styleActionbtn[0].style} onClick={styleActionbtn[0].btnStyle ? weiterSpielen : null}><button>Weiter Spielen</button></div>
                <div className={styleActionbtn[1].style} onClick={styleActionbtn[1].btnStyle ? finishGame : null}><button>Aufhören</button></div>
                <div className={styleActionbtn[2].style} onClick={styleActionbtn[2].btnStyle ? rateVokal : null}><button>Vokal Erraten</button></div>
                <div className={styleActionbtn[3].style} onClick={styleActionbtn[3].btnStyle ? () => { setRateWortPopup(true) } : null}><button>Wort Erraten</button></div>
            </div>
            {rateVokalPopup ? (
                <RateVokal
                    player={player}
                    setPlayer={setPlayer}
                    setRateVokalPopup={setRateVokalPopup}
                    setVokalMode={setVokalMode}
                    setStyleActionbtn={setStyleActionbtn}
                />
            ) : (
                    null
                )}
            {rateWortPopup ? (
                <RateWort
                    wort={wort}
                    setRateWortPopup={setRateWortPopup}
                    wordGuessed={wordGuessed}
                    setStyleActionbtn={setStyleActionbtn}
                />
            ) : (null)}
        </div>
    )
}

export default Inputs

