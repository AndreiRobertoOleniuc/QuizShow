//Imports mit Icons
import React, { useState, useEffect } from 'react'
import axios from "axios";
import AddWort from "./inputs/AddWort";
import AddFrage from "./inputs/AddFrage";
import AddKategorie from "./inputs/AddKategorie";
import EditWord from "./edit/EditWord";

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
        axios.get(`http://andreinetwork.hopto.org/api/public/getWoerter`)
            .then((res) => {
                setWoerter(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        axios.get(`http://andreinetwork.hopto.org/api/public/getFragen`)
            .then((res) => {
                setFragen(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const deleteit = async (e) => {
        axios.delete(`http://andreinetwork.hopto.org/api/public/deleteWord?word=${e.target.value}`)
            .then((res) => {
                setTimeout(() => {
                    refresh();
                }, [500]);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const deleteitFrage = async (e) => {
        axios.delete(`http://andreinetwork.hopto.org/api/public/deleteFrage?frage=${e.target.value}`)
            .then((res) => {
                setTimeout(() => {
                    refresh();
                }, [500]);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const editFrage = (e) => {
    }
    const edit = (e) => {
        setPopUp(<EditWord wort={e.target.value} setPopUp={setPopUp} refresh={refresh} />)
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
                            <table className="woerter">
                                <thead>
                                    <tr>
                                        <th align="left">Wort</th>
                                        <th align="left">Kategorie</th>
                                        <th align="left">Edit</th>
                                        <th align="left">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {woerter.map((item, id) => (
                                        <tr key={id}>
                                            <td>{item.wort}</td>
                                            <td>{item.kategorie}</td>
                                            <td><button className="edit" value={item.wort} onClick={edit}>Edit</button></td>
                                            <td><button className="delete" value={item.wort} onClick={deleteit}>Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="frageTable">
                            <table className="fragen">
                                <thead>
                                    <tr>
                                        <th align="left">Frage</th>
                                        <th align="left">Kategorie</th>
                                        <th align="left">Antwort</th>
                                        <th align="left">Edit</th>
                                        <th align="left">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fragen.map((item, id) => (
                                        <tr key={id}>
                                            <td>{item.frage}</td>
                                            <td>{item.kategorie}</td>
                                            <td>{item.antwort ? "Ja" : "Nein"}</td>
                                            <td><button className="edit" value={item.frage} onClick={editFrage}>Edit</button></td>
                                            <td><button className="delete" value={item.frage} onClick={deleteitFrage}>Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {popUp}
        </div>
    )
}