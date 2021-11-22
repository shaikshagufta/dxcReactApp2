import React, { useContext, useState } from 'react';
import { GlobalContext } from '../components/context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    //insted of "console.log(context)" we can use destructuring like above// to check the log if pulling is posible
    /* 
    here transactions is an array so we map through it and output each transaction 
    this we shall do it in a different component 
    but for now we add an expression as follows
    */
    return (
        // later on the list is going to be replaced by the Transaction component
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transactions => (
                    <li className="minus">
                        {transactions.text} <span>-$400</span><button className="delete-btn">x</button>
                    </li>//becoz now we have the access to transaction values here
                ))}
                {/* <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn">x</button>
                </li> */}
            </ul>
        </div>
    )
}
