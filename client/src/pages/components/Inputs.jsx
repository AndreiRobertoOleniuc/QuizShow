import React, { useEffect, useState } from 'react'

const Inputs = ({ setInput, player, setGameState }) => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [vokalMode, setVokalMode] = useState(false);
    const [styling, setStyling] = useState(true);
    var searchWord = (e) => {
        setInput(e.target.id);
    };
    const rateVokal = () => {
        setVokalMode(!vokalMode);
    }
    const weiterSpielen = () => {
        setVokalMode(false);
        //Fade out
        setStyling(false);
        setTimeout(() => {
            setGameState(false);
        }, 500);
    }
    return (
        <div className={`inputs ${styling ? 'show' : 'hide'}`}>
            <div className="plate">
                <div className="charBox">
                    {alphabet.map((item) => {
                        let vowelList = 'AEIOUaeiou'
                        if (vokalMode) {
                            if (vowelList.indexOf(item) !== -1) {
                                return (
                                    <button className="working" key={item} id={item} onClick={searchWord}>{item}</button>
                                )
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
                                return (
                                    <button className="working" key={item} id={item} onClick={searchWord}>{item}</button>
                                )
                            }
                        }
                    })}
                </div>
                <div className="spielerInfo">
                    <div className="kontostand">
                        Kontostand: {player.betrag}
                    </div>
                    <div className="lebensPunkte">
                        Lebenspunkte:{player.lebensPunkt}
                    </div>
                </div>
                <div className="buttonsActionen">
                    <div className="actionBtn" onClick={weiterSpielen}><button>Weiter Spielen</button></div>
                    <div className="actionBtn" ><button>Aufhören</button></div>
                    <div className="actionBtn" onClick={rateVokal}><button>Vokal Erraten</button></div>
                    <div className="actionBtn" ><button>Wort Erraten</button></div>
                </div>
            </div>
        </div >
    )
}

export default Inputs