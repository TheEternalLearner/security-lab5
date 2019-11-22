import React, {useState} from 'react';

import './App.css';

import {userTypes, setUserType, getUserType} from "./components/Auth";
import Connection from "./components/Connection";
import Admin from "./components/Admin";
import CustomerPage from "./components/CustomerPage";

function App() {

    const [status, setStatus] = useState(true);

    let componentToDisplay;

    switch (getUserType()) {
        case userTypes.GUEST:
            componentToDisplay = <Connection connect={setUserType} setChange={() => setStatus(!status)}/>;
            break;
        case userTypes.ADMIN:
            componentToDisplay = <Admin/>;
            break;
        default:
            componentToDisplay = <CustomerPage/>;
    }

    const disconnect = () => {
        setUserType(userTypes.GUEST);
        setStatus(!status);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>GTI619 - Module d'authentification</h1>
            </header>
            {componentToDisplay}
            {
                getUserType() !== userTypes.GUEST &&
                <button className="LogOut" onClick={disconnect}>Disconnect</button>
            }
        </div>
    );
}

export default App;
