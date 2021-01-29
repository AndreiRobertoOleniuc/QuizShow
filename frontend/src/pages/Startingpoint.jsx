import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { zoomInDown } from "react-animations";
import { useHistory } from "react-router-dom";

const animation = keyframes`${zoomInDown}`;

const ZoomInDiv = styled.div`
    animation: 1200ms ${animation};
`;

function Startingpoint({ setInputName }) {
    //URL History und URL momentan
    let history = useHistory();
    const [input, setInput] = useState("");
    const changeInput = (e) => {
        setInput(e.target.value)
    }
    const startGame = () => {
        if (input === "") {
            alert("Bitte geben Sie einen Namen ein");
        } else {
            setInputName(input);
            history.push("/Game");
        }
    }
    const goToLogin = () => {
        history.push("/Admin")
    }
    return (
        <div className="center">
            <ZoomInDiv className="entrypoint">
                <p>Wheel of Fortune</p>
                <input type="text" name="Inputs" placeholder="Dein Name" onChange={changeInput} />
                <button className="start" onClick={startGame}>Starte Spiel</button>
                <button className="toLogin" onClick={goToLogin}>Zum Login</button>
            </ZoomInDiv>
        </div>
    )
}

export default Startingpoint
