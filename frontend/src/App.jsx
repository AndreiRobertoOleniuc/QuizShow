import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Game from "./pages/Game";
import Bankrrot from './pages/messages/Bankrott';
import LostMessage from "./pages/messages/LostMessage";
import "./pages/style/style.css";

const App = () => {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Game />
                    </Route>
                    <Route exact path="/Bankrrot">
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
