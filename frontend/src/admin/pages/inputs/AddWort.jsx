import React from 'react';
import axios from "axios";
import styled, { keyframes } from 'styled-components';
import { slideInUp } from "react-animations";

const animation = keyframes`${slideInUp}`;

const AnimatedDiv = styled.div`
    animation: 1000ms ${animation};
`;

function AddWort({ setPopUp }) {
    return (
        <AnimatedDiv className="addWort">

        </AnimatedDiv>
    )
}

export default AddWort
