import React, { useState, useEffect } from 'react'
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Game from "./pages/Game";
import "./pages/style/style.css";
const App = () => {
    useEffect(() => {

    }, []);
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Game />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    )
}

export default App
