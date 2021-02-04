import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled, { keyframes } from 'styled-components';
import { slideInUp } from "react-animations";

const animation = keyframes`${slideInUp}`;

const AnimatedDiv = styled.div`
    animation: 1000ms ${animation};
`;

function AddWort({ setPopUp, refresh }) {
    const [input, setInput] = useState("");
    const [kategorie, setKategorie] = useState("Essen");
    const [kategorien, setKategorien] = useState([])
    useEffect(() => {
        getKategorien();
    }, []);
    const changeKategorie = (e) => {
        setKategorie(e.target.value);
    }
    const changeInput = (e) => {
        setInput(e.target.value)
    }
    const getKategorien = async () => {
        axios.get(`http://andreinetwork.hopto.org/api/public/getKategorien`)
            .then((res) => {
                setKategorien(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const addWort = async () => {
        axios.post(`http://andreinetwork.hopto.org/api/public/addWort?wort=${input}&kategorie=${kategorie}`)
            .then((res) => {
                if (res.data === true) {
                    setPopUp(null);
                    refresh();
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const back = () => {
        setPopUp(false);
    }
    return (
        <AnimatedDiv className="addWort">
            <h1>Füge eine Wort hinzu</h1>
            <input type="text" onChange={changeInput} placeholder="Wort" />
            <div className="choiceBox">
                <p>Kategorie:</p>
                <select onChange={changeKategorie}>
                    {kategorien.map((item, key) => (
                        <option key={key} value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div className="btn">
                <button onClick={addWort}>Eintragen</button>
                <button onClick={back}>Abbrechen</button>
            </div>
        </AnimatedDiv >
    )
}

export default AddWort
