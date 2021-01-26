import React from 'react'
import styled, { keyframes } from 'styled-components';
import { tada } from "react-animations";

const bounceAnimation = keyframes`${tada}`;

const BouncyDiv = styled.div`
    animation: 1000ms ${bounceAnimation};
`;

const Response = ({ res, changeState }) => {
    return (
        <BouncyDiv className="res">
            <h1>{res}!!!</h1>
            <button onClick={changeState}>Weiter</button>
        </BouncyDiv>
    )
}

export default Response
