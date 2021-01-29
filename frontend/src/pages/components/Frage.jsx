import React, { useState } from 'react'
import axios from "axios";
import styled, { keyframes } from 'styled-components';
import { slideInUp } from "react-animations";

const animation = keyframes`${slideInUp}`;

const AnimatedDiv = styled.div`
    animation: 1000ms ${animation};
`;

function Frage({ player, setPlayer, changeState, setShowFrage, frageList, setFrageList }) {
    const [betrag, setBetrag] = useState("");
    const [risikoState, setRisikoState] = useState(true);
    const [moneymessage, setMoneyMessage] = useState(null);
    const [frage, setFrage] = useState({});
    const [risikoAbgeschlossen, setAbgeschlossen] = useState(false);
    const [gewonnen, setGewonnen] = useState(false);
    const changeInput = (e) => {
        setBetrag(e.target.value)
    }
    const checkBetragZurFrage = () => {
        if (Number.isInteger(parseInt(betrag))) {
            if (betrag > player.betrag) {
                setMoneyMessage(<p className="warnung">Bitte geben Sie einen Betrag ein denn sie sich leisten können</p>);
            } else {
                getData();
            }
        } else {
            setMoneyMessage(<p className="warnung">Bitte geben Sie eine Zahl ein</p>);
        }
    }
    const getData = async () => {
        axios.get("http://localhost:8080/api/public/getNewFrage")
            .then((res) => {
                if (frageList.includes(res.data.frage)) {
                    getData();
                } else {
                    setFrage(res.data);
                    setFrageList([...frageList, res.data.frage]);
                    setRisikoState(false);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const ja = () => {
        if (frage.antwort === true) {
            setPlayer({ ...player, betrag: player.betrag + parseInt(betrag) })
            setGewonnen(true);
        } else {
            setPlayer({ ...player, betrag: player.betrag - parseInt(betrag) })
            setGewonnen(false);
        }
        setAbgeschlossen(true);
    }
    const nein = () => {
        if (frage.antwort === false) {
            setPlayer({ ...player, betrag: player.betrag + parseInt(betrag) })
            setGewonnen(true);
        } else {
            setPlayer({ ...player, betrag: player.betrag - parseInt(betrag) })
            setGewonnen(false);
        }
        setAbgeschlossen(true);
    }
    const weiter = () => {
        setShowFrage(false);
        changeState();
    }
    return (
        <AnimatedDiv className="risiko">
            {risikoState ? (
                <div className="inputMoney">
                    <h1>Risiko</h1>
                    <p>Wie viel Geld willst du setzen</p>
                    <input type="text" onChange={changeInput} />
                    <button onClick={checkBetragZurFrage}>Zur Frage</button>
                    {moneymessage}
                </div>
            ) : (
                    <div className="frage">
                        <h1>{frage.frage}</h1>
                        <p className="kategorie">Kategorie: {frage.kategorie}</p>
                        {risikoAbgeschlossen ? (
                            <div className="abschliessen">
                                <p>{gewonnen ? ("Richtig!!!") : ("Leider haben sie falsch getippt")}</p>
                                <button onClick={weiter}>Weiter</button>
                            </div>
                        ) : (
                                <div className="btn">
                                    <button className="ja" onClick={ja}>Ja</button>
                                    <button className="nein" onClick={nein}>Nein</button>
                                </div>
                            )
                        }
                    </div >
                )}
        </AnimatedDiv >
    )
}

export default Frage
