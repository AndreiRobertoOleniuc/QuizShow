import React, { useState, useEffect } from 'react'

function Inputs({ setInput }) {
    const searchWord = (e) => {
        setInput(e.target.id);
    }
    return (
        <div className="inputs">
            <div className="plate">
                <div className="charBox">
                    <button id="a" onClick={searchWord}>a</button>
                    <button id="b" onClick={searchWord}>b</button>
                    <button id="c" onClick={searchWord}>c</button>
                    <button id="d" onClick={searchWord}>d</button>
                    <button id="e" onClick={searchWord}>e</button>
                    <button id="f" onClick={searchWord}>f</button>
                    <button id="g" onClick={searchWord}>g</button>
                    <button id="h" onClick={searchWord}>h</button>
                    <button id="i" onClick={searchWord}>i</button>
                    <button id="j" onClick={searchWord}>j</button>
                    <button id="k" onClick={searchWord}>k</button>
                    <button id="l" onClick={searchWord}>l</button>
                    <button id="m" onClick={searchWord}>m</button>
                    <button id="n" onClick={searchWord}>n</button>
                    <button id="o" onClick={searchWord}>o</button>
                    <button id="p" onClick={searchWord}>p</button>
                    <button id="q" onClick={searchWord}>q</button>
                    <button id="r" onClick={searchWord}>r</button>
                    <button id="s" onClick={searchWord}>s</button>
                    <button id="t" onClick={searchWord}>t</button>
                    <button id="u" onClick={searchWord}>u</button>
                    <button id="v" onClick={searchWord}>v</button>
                    <button id="w" onClick={searchWord}>w</button>
                    <button id="x" onClick={searchWord}>x</button>
                    <button id="y" onClick={searchWord}>y</button>
                    <button id="z" onClick={searchWord}>z</button>
                </div>
            </div>
        </div >
    )
}

export default Inputs
