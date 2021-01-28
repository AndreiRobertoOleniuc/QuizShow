import React, { useState, useEffect } from 'react'

function Grid({ userinput, chars, setChars, wort, doResult, guessed }) {
    const maxChars = 39;
    const items = new Array(maxChars).fill(null);
    let correctness = false;
    let iterator = -1;
    useEffect(() => {
        checkBuchStabe();
    }, [userinput]);
    const checkBuchStabe = () => {
        if (userinput == null) { }
        else {
            setChars(chars.map((item) => {
                if (userinput.char.toUpperCase() === item.symbol.toUpperCase()) {
                    correctness = true;
                    return {
                        ...item,
                        visible: true
                    }
                } else {
                    return {
                        ...item
                    }
                }
            }))
            if (correctness === true) {
                doResult("add");
            } else {
                doResult("sub");
                correctness = false;
            }
        }
    }
    return (
        <div className="wortFeld">
            <div className="holder">
                {items.map((item, id) => {
                    if (id === 0 || id === 9 || id === 30 || id === 39) {
                        return (
                            <div className="edge" key={id}></div>
                        )
                    } else {
                        iterator = iterator + 1;
                        if (chars[iterator] == null || chars[iterator].symbol === " " || chars[iterator].symbol === "") {
                            return (
                                <div className="charEmpty" key={id}></div>
                            )
                        } else {
                            if (guessed) {
                                return (
                                    <div className="char" key={id}>
                                        <p>{chars[iterator].symbol}</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="char" key={id}>{chars[iterator].visible ?
                                        (<p>{chars[iterator].symbol}</p>)
                                        :
                                        (<p></p>)}
                                    </div>
                                )
                            }
                        }
                    }
                })}
            </div>
            <div className="kategorie">
                <p>{wort.kategorie}</p>
            </div>
        </div>
    )
}

export default Grid
