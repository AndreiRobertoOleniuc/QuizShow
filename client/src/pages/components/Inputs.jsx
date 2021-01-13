import React, { useState, useEffect } from 'react'

function Inputs({ setInput }) {
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
            </div>
        </div >
    )
}

export default Inputs