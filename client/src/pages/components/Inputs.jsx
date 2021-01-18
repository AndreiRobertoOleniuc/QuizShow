import React, { useState, useEffect } from 'react'

const Inputs = ({ setInput }) => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const searchWord = (e) => {
        setInput(e.target.id);
    }
    return (
        <div className="inputs">
            <div className="plate">
                <div className="charBox">
                    {alphabet.map((item) => {
                        return (
                            <button key={item} id={item} onClick={searchWord}>{item}</button>
                        )
                    })}
                </div>
                <div className="spielerInfo">
                    <div className="kontostand">
                        Kontostand:
                    </div>
                    <div className="lebensPunkte">
                        Lebenspunkte:
                    </div>
                </div>
                <div className="buttonsActionen">
                    <div className="weiterSpielen"><button>Weiter Spielen</button></div>
                    <div className="aufhoeren"><button>Aufhören</button></div>
                    <div className="vokalErraten"><button>Vokal Erraten</button></div>
                    <div className="wortErraten"><button>Wort Erraten</button></div>
                </div>
            </div>
        </div >
    )
}

export default Inputs