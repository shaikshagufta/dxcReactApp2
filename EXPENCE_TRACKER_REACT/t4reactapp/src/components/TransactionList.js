import React,{useContext, useState} from 'react';
import { GlobalContext } from '../components/context/GlobalState';

export const TransactionList = () => {
const context = useContext(GlobalContext);

 console.log(context)// to check the log if pulling is posible

    return (
        // later on the list is going to be replaced by the Transaction component
        <div>
            <h3>History</h3>
            <ul className="list">
                <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </div>
    )
}
