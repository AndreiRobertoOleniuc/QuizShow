import React, { useState } from 'react';
import states from "../data/ActionBtnStates";
import styled, { keyframes } from 'styled-components';
import { rotateIn } from "react-animations";

const animation = keyframes`${rotateIn}`;

const AnimatedDiv = styled.div`
    animation: 1000ms ${animation};
`;

const RateWort = () => {
    const [notEnoughMoney, setNotEnoughMoney] = useState(false);
    return (
        <AnimatedDiv className="vokalPopup">
            <h1>Welches Wort suchen wir ?</h1>

            {notEnoughMoney ? (
                <p>Leider hast du nicht genung Geld für den Kauf</p>
            ) : (null)}
        </AnimatedDiv>
    )
}

export default RateWort
