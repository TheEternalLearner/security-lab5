import React, {useState} from "react";

import './Admin.css';

const Admin = (props) => {

    const [parameters, setParameters] = useState({
        max_attempts: true,
        pwd_management: true,
        pwd_policy: true
    });

    const submit = () => {
        console.log(parameters);
    };

    const update = (param, value) => {
        console.log(param, value);
        setParameters({
            ...parameters,
            [param]: value
        })
    };

    return (
        <div className="Admin">
            <h2>Admin</h2>
            <table>
                <thead>
                <tr>
                    <th>Option de sécurité</th>
                    <th>Activation</th>
                </tr>
                </thead>
                <tbody>
                {
                    Object.keys(parameters).map((item) => {
                        return (
                            <tr key={item}>
                                <td>{item}</td>
                                <td>
                                    <input type="checkbox" checked={parameters[item]}
                                           onChange={(e) => {update(item, e.target.checked)}}/>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <button className="Submit" onClick={submit}>Update</button>
        </div>
    )
};

export default Admin