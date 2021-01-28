import React, { useState } from 'react';
import states from "../data/ActionBtnStates";
import styled, { keyframes } from 'styled-components';
import { rotateIn } from "react-animations";

const animation = keyframes`${rotateIn}`;

const AnimatedDiv = styled.div`
    animation: 1000ms ${animation};
`;

const RateVokal = ({ player, setPlayer, setRateVokalPopup, setVokalMode, setStyleActionbtn }) => {
    const [notEnoughMoney, setNotEnoughMoney] = useState(false);
    const ja = () => {
        if (player.betrag > 500) {
            setPlayer({ ...player, betrag: player.betrag - 200 })
            setVokalMode(true);
            setRateVokalPopup(false);
            setStyleActionbtn(states[2]);
        } else {
            setNotEnoughMoney(true);
        }
    }
    const nein = () => {
        setRateVokalPopup(false);
    }
    return (
        <AnimatedDiv className="vokalPopup">
            <h1>Wilst du für 500 ein Vokal Kaufen</h1>
            <div className="input">
                <button onClick={ja} id="ja">Ja</button>
                <button onClick={nein} id="nein">Nein</button>
            </div>
            {notEnoughMoney ? (
                <p>Leider hast du nicht genung Geld für den Kauf</p>
            ) : (null)}
        </AnimatedDiv>
    )
}

export default RateVokal
