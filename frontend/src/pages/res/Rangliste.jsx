import React, { useEffect, useState } from 'react'
import axios from "axios";
import styled, { keyframes } from 'styled-components';
import { zoomInUp } from "react-animations";
import { useHistory } from "react-router-dom";

const animation = keyframes`${zoomInUp}`;

const AnimatedDiv = styled.div`
    animation: 1000ms ${animation};
`;

function Rangliste() {
    const [rangliste, setRangliste] = useState([]);
    let history = useHistory();
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        axios.get("http://andreinetwork.hopto.org//api/public/getRangliste")
            .then((res) => {
                setRangliste(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const zumStart = () => {
        history.push("/");
    }
    return (
        <div className="center">
            <AnimatedDiv className="rangliste">
                <h1>Rangliste</h1>
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
                        {rangliste.map((item, id) => (
                            <tr key={id}>
                                <td>{item.rang}</td>
                                <td>{item.name}</td>
                                <td>{item.geldbetrag}</td>
                                <td>{item.anzahlrunden}</td>
                                <td>{item.zeitpunkt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={zumStart}>Zurück zum Spiel</button>
            </AnimatedDiv>
        </div>
    )
}

export default Rangliste
