import React from 'react'
import styled, { keyframes } from 'styled-components';
import { rollIn } from "react-animations";

const bounceAnimation = keyframes`${rollIn}`;

const BouncyDiv = styled.div`
    animation: 1000ms ${bounceAnimation};
`;

function LostMessage() {
    return (
        <div className="center">
            <BouncyDiv className="tot">
                <h1>Game Over</h1>
                <p>Du hast all deine Leben verloren</p>
                <button>Neues spiel</button>
            </BouncyDiv>
        </div>
    )
}

export default LostMessage
