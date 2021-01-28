import React, { useState } from 'react';
import states from "../data/ActionBtnStates";
import styled, { keyframes } from 'styled-components';
import { slideInUp } from "react-animations";

const animation = keyframes`${slideInUp}`;

const AnimatedDiv = styled.div`
    animation: 1000ms ${animation};
`;

const RateWort = ({ wort, setRateWortPopup, wordGuessed, setStyleActionbtn }) => {
    const [input, setInput] = useState("");
    const changeInput = (e) => {
        setInput(e.target.value)
    }
    const checkWord = () => {
        if (wort.wort === input) {
            wordGuessed();
            setRateWortPopup(false);
            setStyleActionbtn(states[3]);
        } else {
            setRateWortPopup(false);
        }
    }
    return (
        <AnimatedDiv className="wortPopup">
            <h1>Welches Wort suchen wir ?</h1>
            <input type="text" onChange={changeInput} />
            <button onClick={checkWord}>Bestätigen</button>
        </AnimatedDiv>
    )
}

export default RateWort
