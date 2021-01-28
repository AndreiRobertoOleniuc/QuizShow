import React from 'react'
import styled, { keyframes } from 'styled-components';
import { zoomInDown } from "react-animations";
import { useHistory } from "react-router-dom";

const bounceAnimation = keyframes`${zoomInDown}`;

const BouncyDiv = styled.div`
    animation: 1300ms ${bounceAnimation};
`;

function Bankrott() {
    let history = useHistory();
    return (
        <div className="center">
            <BouncyDiv className="tot">
                <h1>Game Over</h1>
                <p>Du bist Bankrott gegeganen</p>
                <button onClick={() => { history.push("/Game") }}>Neues spiel</button>
            </BouncyDiv>
        </div>
    )
}

export default Bankrott
