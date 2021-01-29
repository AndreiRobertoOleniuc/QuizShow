import React, { useEffect, useState } from 'react'
import axios from "axios";
import styled, { keyframes } from 'styled-components';
import { zoomInUp } from "react-animations";
import { useHistory } from "react-router-dom";

const animation = keyframes`${zoomInUp}`;

const AnimatedDiv = styled.div`
    animation: 1000ms ${animation};
`;

function Response({ player, anzahlRunden }) {
    const [rangListenEintrag, setRangListenEintrag] = useState({});
    let history = useHistory();

    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        axios.post("http://localhost:8080/saveGame", {
            name: player.name,
            betrag: player.betrag,
            anzahlrunden: anzahlRunden
        })
            .then((res) => {
                setRangListenEintrag(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const toStart = () => {
        history.push("/");
    }
    const toRang = () => {
        history.push("/RangListe");
    }
    return (
        <div className="center">
            <AnimatedDiv className="gameDone">
                <h1>Gut gemacht</h1>
                <p>Du bist Rang: {rangListenEintrag.rang}</p>
                <table className="testErg">
                    <thead>
                        <tr>
                            <th align="left">Rang</th>
                            <th align="left">Name</th>
                            <th align="left">Geld Betrag</th>
                            <th align="left">Anzahl Runden</th>
                            <th align="left">Spielzeit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{rangListenEintrag.rang}</td>
                            <td>{rangListenEintrag.name}</td>
                            <td>{rangListenEintrag.geldbetrag}</td>
                            <td>{rangListenEintrag.anzahlrunden}</td>
                            <td>{rangListenEintrag.zeitpunkt}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="controls">
                    <button onClick={toRang}>Zur Rangliste</button>
                    <button onClick={toStart}>Zur Startseite</button>
                </div>
            </AnimatedDiv>
        </div>
    )
}

export default Response
