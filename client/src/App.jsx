import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Wheel from './pages/components/Wheel';
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
                    <Route exact path="/Wheel">
                        <Wheel />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    )
}

export default App
