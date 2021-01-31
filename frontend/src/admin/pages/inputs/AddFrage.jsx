import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled, { keyframes } from 'styled-components';
import { slideInUp } from "react-animations";

const animation = keyframes`${slideInUp}`;

const AnimatedDiv = styled.div`
    animation: 1000ms ${animation};
`;

function AddFrage({ setPopUp, refresh }) {
    const [input, setInput] = useState("");
    const [kategorie, setKategorie] = useState("Essen");
    const [kategorien, setKategorien] = useState([])
    const [antwort, setAntwort] = useState(false);
    useEffect(() => {
        getKategorien();
    }, []);
    const changeKategorie = (e) => {
        setKategorie(e.target.value);
    }
    const changeInput = (e) => {
        setInput(e.target.value)
    }
    const chooseAntwort = (e) => {
        setAntwort(e.target.value);
    }
    const getKategorien = async () => {
        axios.get(`http://andreinetwork.hopto.org//api/public/getKategorien`)
            .then((res) => {
                setKategorien(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const addFrage = async () => {
        axios.post(`http://andreinetwork.hopto.org//api/public/addFrage?frage=${input}&kategorie=${kategorie}&antwort=${antwort}`)
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
        <AnimatedDiv className="addFrage">
            <h1>Füge eine Frage hinzu</h1>
            <input type="text" onChange={changeInput} placeholder="Frage" />
            <div className="choiceboxes">
                <p>Kategorie:</p>
                <select onChange={changeKategorie}>
                    {kategorien.map((item, key) => (
                        <option key={key} value={item}>{item}</option>
                    ))}
                </select>
                <p>Antwort:</p>
                <select onChange={chooseAntwort}>
                    <option value={false}>Nein</option>
                    <option value={true}>Ja</option>
                </select>
            </div>
            <div className="btn">
                <button onClick={addFrage}>Eintragen</button>
                <button onClick={back}>Abbrechen</button>
            </div>
        </AnimatedDiv >
    )
}

export default AddFrage
