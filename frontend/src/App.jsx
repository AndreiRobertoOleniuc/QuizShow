import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Game from "./pages/Game";
import Bankrrot from './pages/messages/Bankrott';
import LostMessage from "./pages/messages/LostMessage";
import Startingpoint from './pages/Startingpoint';
import { useHistory } from "react-router-dom";
import "./pages/style/style.css";

const App = () => {
    const [inputName, setInputName] = useState("");
    const [player, setPlayer] = useState({});
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Startingpoint setInputName={setInputName} />
                    </Route>
                    <Route exact path="/Game">
                        <Game
                            inputName={inputName}
                            setPlayer={setPlayer}
                            player={player}
                        />
                    </Route>
                    <Route exact path="/Bankrott">
                        <Bankrrot />
                    </Route>
                    <Route exact path="/GameOver">
                        <LostMessage />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    )
}

export default App
