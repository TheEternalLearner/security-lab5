import React from "react";

import './CustomerPage.css'
import {getUserType} from "./Auth";

const CustomerPage = () => {
    const customerList = [{
        firstName: "Rodolphe",
        lastName: "Martin",
        type: "Résidential"
    }, {
        firstName: "Jean-Luc",
        lastName: "Dupont",
        type: "Résidential"
    }];

    return (
        <div className="CustomerPage">
            <h2>{getUserType()} Customer Management</h2>
            <table>
                <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Client Type</th>
                </tr>
                </thead>
                <tbody>
                {
                    customerList.map((client, index) => {
                        return (
                            <tr key={index}>
                                <td>{client.firstName}</td>
                                <td>{client.lastName}</td>
                                <td>{client.type}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default CustomerPage