import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import { rollIn } from "react-animations";
import { useHistory } from "react-router-dom";

const bounceAnimation = keyframes`${rollIn}`;

const BouncyDiv = styled.div`
    animation: 1000ms ${bounceAnimation};
`;

function LostMessage({ setAnzahlRunden }) {
    useEffect(() => {
        setAnzahlRunden(1);
    }, []);
    let history = useHistory();
    return (
        <div className="center">
            <BouncyDiv className="tot">
                <h1>Game Over</h1>
                <p>Du hast all deine Leben verloren</p>
                <button onClick={() => { history.push("/Game") }}>Neues spiel</button>
            </BouncyDiv>
        </div>
    )
}

export default LostMessage
