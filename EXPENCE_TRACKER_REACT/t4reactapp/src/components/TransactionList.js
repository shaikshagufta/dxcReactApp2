import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    // Now the list is going to be replaced by the Transaction component
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} trasaction={transaction} />))}
            </ul>
        </>
    )
}
/*
bringing{ transactions } from Global state
mapping through- for eact transaction we render a Transaction component by passing a prop
this prop in this maping is called a list and this list needs a key wich needs to be unique
*/
