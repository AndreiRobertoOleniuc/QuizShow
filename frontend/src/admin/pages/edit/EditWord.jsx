import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled, { keyframes } from 'styled-components';
import { slideInUp } from "react-animations";

const animation = keyframes`${slideInUp}`;

const AnimatedDiv = styled.div`
    animation: 1000ms ${animation};
`;

function AddFrage({ setPopUp, refresh, wort }) {
    const [wortData, setWortData] = useState({});
    useEffect(() => {
        getWord();
    }, []);
    const getWord = async () => {
        axios.get(`http://localhost:8080/api/public/getSpecWord?wort=${wort}`)
            .then((res) => {
                setWortData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <AnimatedDiv className="editWort">
            <h1>Edit Wort</h1>
            <div className="wort">
                <p>Wort:</p>
                <input type="text" defaultValue={wortData.wort} />
            </div>
            <div className="kategorie">
                <p>Kategorie:</p>
                <input type="text" defaultValue={wortData.kategorie} />
            </div>
        </AnimatedDiv >
    )
}

export default AddFrage
