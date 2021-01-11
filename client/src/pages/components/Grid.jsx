import React, { useState, useEffect } from 'react'
import axios from "axios";

function Grid({ userinput }) {
    const [chars, setChars] = useState([]);
    const maxChars = 39;
    const items = new Array(maxChars).fill(null);
    let iterator = -1;
    useEffect(() => {
        axios.get("http://localhost:8080/getWort")
            .then((res) => {
                setChars(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    useEffect(() => {
        checkBuchStabe(userinput);
    }, [userinput]);
    const checkBuchStabe = (wert) => {
        setChars(chars.map((item) => {
            if (wert.toUpperCase() == item.symbol.toUpperCase()) {
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
                        if (chars[iterator] == null || chars[iterator].symbol == " " || chars[iterator].symbol == "") {
                            return (
                                <div className="charEmpty" key={id}></div>
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
                })}
            </div>
        </div>
    )
}

export default Grid
