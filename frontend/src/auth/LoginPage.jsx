//Imports der Login Page
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Auth from "./auth";
import "./style/style.css"

export default function LoginPage({ setUserName, setPassword }) {
  //URL History und URL momentan
  let history = useHistory();
  let location = useLocation();
  //Username und Password und setter
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const changeusername = (e) => {
    setusername(e.target.value);
  };
  const changepassword = (e) => {
    setpassword(e.target.value);
  };
  //Holen uns von wo der Benutzer gekommen ist
  let { from } = location.state || { from: { pathname: "/" } };
  //Einloggen
  const login = () => {
    Auth.authenticate(
      () => {
        history.replace(from);
      },
      username,
      password
    );
    setUserName(username);
    setPassword(password);
  };
  const goBack = () => {
    history.push("/");
  }
  //Anzeige
  return (
    <div className="loginAdmin">
      <div className="holder">
        <div className="login">
          <h1>Admin Login</h1>
          <p>
            Geben Sie bitte Ihre Benutzerdaten ein um auf die Admin Page zu kommen
          </p>
          <br />
          <input
            type="text"
            placeholder="Benutzername"
            required
            autoComplete="off"
            onChange={changeusername}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            required
            autoComplete="off"
            onChange={changepassword}
          />
          <br />
          <button className="logOn" onClick={login}>Einloggen</button>
          <button className="goBack" onClick={goBack}>Zurück</button>
        </div>
      </div>
    </div>
  );
}
