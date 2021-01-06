import React, { useState, useEffect } from 'react'
import axios from "axios";
import Title from "./components/Title";
import "./style/style.css";
const Game = () => {
    const [wort, setWort] = useState("");
    const [chars, setChars] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/")
            .then((res) => {
                console.log(res.data);
                setWort(res.data);
                setChars([...res.data]);
                console.log([...res.data]);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div className="gamePage">
            <Title title={"Wheel of Fortune"} />
            <div className="wortFeld">
                <div className="holder">
                    {chars.map((item) => {
                        return (
                            <div className="char">{item}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Game
