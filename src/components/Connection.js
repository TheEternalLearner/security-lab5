import React, {useState} from "react";

import './Connection.css'

import {setUserType, userTypes} from "./Auth";

const Connection = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = (event) => {
        event.preventDefault();
        if (username === 'res') {
            setUserType(userTypes.RESIDENTIAL_REPRESENTATIVE);
        }
        else if (username === "bus") {
            setUserType(userTypes.BUSINESS_REPRESENTATIVE);
        }
        else {
            setUserType(userTypes.ADMIN);
        }
        props.setChange();
    };

    return (
        <div className="Connection">
            <h2>Connection</h2>
            <form onSubmit={submit}>
                <div className="infoArea"/>
                <p className="formP">Username</p>
                <input className="formInput" type="text" id="username"
                       value={username} onChange={(e) => setUsername(e.target.value)}/>
                <p className="formP">Password</p>
                <input className="formInput" type="password" id="password"
                       value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div>Mot de passe oublié ?</div>
                <input className="formSubmit" type="submit" value="Se connecter"/>
            </form>
        </div>
    )
};

export default Connection