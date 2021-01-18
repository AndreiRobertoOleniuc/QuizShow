import React, { useEffect, useState } from 'react'

const Inputs = ({ setInput, player, charBoxState, setCharBoxState, setWheelState, weiterSpielenState, setWeiterSpielenState, aufhoerenState, setAufhoerenState }) => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [vokalMode, setVokalMode] = useState(false);
    var searchWord = (e) => {
        setInput(e.target.id);
        setCharBoxState(false);
        setWeiterSpielenState(true);
        setAufhoerenState(true);
    };
    const rateVokal = () => {
        setVokalMode(!vokalMode);
    }
    const weiterSpielen = () => {
        setVokalMode(false);
        setCharBoxState(false);
        setWeiterSpielenState(false);
        setAufhoerenState(false);
        setWheelState(true);
    }
    return (
        <div className="inputs">
            <div className="plate">
                <div className="charBox">
                    {alphabet.map((item) => {
                        let vowelList = 'AEIOUaeiou'
                        if (charBoxState) {
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
                        } else {
                            return (<button className="nonWorking" key={item} id={item} onClick={null}>{item}</button>)
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
                    <div className={weiterSpielenState ? "actionBtn" : "nonFunc"} onClick={weiterSpielenState ? weiterSpielen : null}><button>Weiter Spielen</button></div>
                    <div className={aufhoerenState ? "actionBtn" : "nonFunc"}><button>Aufhören</button></div>
                    <div className={charBoxState ? "actionBtn" : "nonFunc"} onClick={charBoxState ? rateVokal : null}><button>Vokal Erraten</button></div>
                    <div className={charBoxState ? "actionBtn" : "nonFunc"}><button>Wort Erraten</button></div>
                </div>
            </div>
        </div >
    )
}

export default Inputs