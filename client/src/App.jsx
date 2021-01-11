import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Game from "./pages/Game";
import "./pages/style/style.css";
const App = () => {
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
