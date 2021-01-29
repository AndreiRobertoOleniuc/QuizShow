import React, { useState } from 'react';
import axios from "axios";
import styled, { keyframes } from 'styled-components';
import { slideInUp } from "react-animations";

const animation = keyframes`${slideInUp}`;

const AnimatedDiv = styled.div`
    animation: 1000ms ${animation};
`;

function AddKategorie({ setPopUp }) {
    const [input, setInput] = useState("");
    const changeInput = (e) => {
        setInput(e.target.value)
    }
    const addKategorie = async () => {
        axios.post(`http://localhost:8080/api/public/addKategorie?kategorie=${input}`)
            .then((res) => {
                if (res.data === true) {
                    setPopUp(null);
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
        <AnimatedDiv className="addKategorie">
            <h1>Füge eine Kategorie hinzu</h1>
            <input type="text" onChange={changeInput} />
            <div className="btn">
                <button onClick={addKategorie}>Eintragen</button>
                <button onClick={back}>Abbrechen</button>
            </div>
        </AnimatedDiv>
    )
}

export default AddKategorie
