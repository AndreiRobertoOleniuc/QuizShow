import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { zoomInDown } from "react-animations";
import { useHistory } from "react-router-dom";

const animation = keyframes`${zoomInDown}`;

const ZoomInDiv = styled.div`
    animation: 1200ms ${animation};
`;


function Startingpoint({ setInputName }) {
    let history = useHistory();
    const [input, setInput] = useState("");
    const changeInput = (e) => {
        setInput(e.target.value)
    }
    const startGame = () => {
        setInputName(input);
        history.push("/Game");
    }
    return (
        <div className="center">
            <ZoomInDiv className="entrypoint">
                <p>Wheel of Fortune</p>
                <input type="text" name="Inputs" placeholder="Dein Name" onChange={changeInput} />
                <button onClick={startGame}>Starte Spiel</button>
            </ZoomInDiv>
        </div>
    )
}

export default Startingpoint
