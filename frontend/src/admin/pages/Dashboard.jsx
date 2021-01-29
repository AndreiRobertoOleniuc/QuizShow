//Imports mit Icons
import React, { useState, useEffect } from 'react'
import axios from "axios";
import AddWort from "./inputs/AddWort";
import AddFrage from "./inputs/AddFrage";
import AddKategorie from "./inputs/AddKategorie";

export default function Dashboard({ userName, password }) {
    const [woerter, setWoerter] = useState([]);
    const [fragen, setFragen] = useState([]);
    const [popUp, setPopUp] = useState(null);
    const addWort = () => {
        setPopUp(<AddWort setPopUp={setPopUp} refresh={refresh} />);
    }
    const addFrage = () => {
        setPopUp(<AddFrage setPopUp={setPopUp} refresh={refresh} />);
    }
    const addKategorie = () => {
        setPopUp(<AddKategorie setPopUp={setPopUp} />);
    }
    const refresh = async () => {
        axios.get(`http://localhost:8080/api/public/getWoerter`)
            .then((res) => {
                setWoerter(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        axios.get(`http://localhost:8080/api/public/getFragen`)
            .then((res) => {
                setFragen(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        refresh();
    }, []);
    //Anzeige
    return (
        <div className="content">
            <div className="plate">
                <div className="dashBoardTitle">
                    <div className="title">
                        <h1>Dashboard</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="content1">
                        <div className="wortHinzu">
                            <button onClick={addWort}>Wort Hinzufügen</button>
                        </div>
                        <div className="frageHinzu">
                            <button onClick={addFrage}>
                                Frage Hinzufügen
                            </button>
                        </div>
                        <div className="kategorieHinzu">
                            <button onClick={addKategorie}>
                                Kategorie Hinzufügen
                            </button>
                        </div>
                    </div>
                    <div className="content2">
                        <div className="worterTable">
                            
                        </div>
                        <div className="frageTable"></div>
                    </div>
                </div>
            </div>
            {popUp}
        </div>
    )
}