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
import "./pages/style/style.css";
import Response from './pages/res/Response';
import Rangliste from './pages/res/Rangliste';
import PrivateRoutes from "./auth/PrivateRoute";
import Admin from './admin/Admin';
import Login from "./auth/LoginPage";
const App = () => {
    const [inputName, setInputName] = useState("");
    const [player, setPlayer] = useState({});
    const [anzahlRunden, setAnzahlRunden] = useState(1);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
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
                            anzahlRunden={anzahlRunden}
                            setAnzahlRunden={setAnzahlRunden}
                        />
                    </Route>
                    <Route exact path="/Response">
                        <Response
                            player={player}
                            anzahlRunden={anzahlRunden}
                            setAnzahlRunden={setAnzahlRunden}
                        />
                    </Route>
                    <PrivateRoutes exact path="/Admin">
                        <Admin userName={userName} password={password} />
                    </PrivateRoutes>
                    <Route path="/Login">
                        <Login setUserName={setUserName} setPassword={setPassword} />
                    </Route>
                    <Route exact path="/RangListe">
                        <Rangliste />
                    </Route>
                    <Route exact path="/Bankrott">
                        <Bankrrot setAnzahlRunden={setAnzahlRunden} />
                    </Route>
                    <Route exact path="/GameOver">
                        <LostMessage setAnzahlRunden={setAnzahlRunden} />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    )
}

export default App
