import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    //pulling the transactions
    const { transactions } = useContext(GlobalContext);
/*
cause each transaction is an object with 'id,text,ammount' 
we map through and get all amounts into an array
*/
    const amounts = transactions.map(transaction => transaction.amount);
//to calculate the total ammount -we use reduce to add the ammounts together and
//and we use toFixed to- get 2 decimal places
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
    return (
        // outputing the total
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}
