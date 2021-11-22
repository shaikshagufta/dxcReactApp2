import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {
    /* //pulling the transactions
    const { transactions } = useContext(GlobalContext);
 */
    // instaed we pull the deteteTransaction action
    const { deleteTransaction } = useContext(GlobalContext);
    //handling the ammount 
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        //handling border by making the className dynamic 
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
//we now added a delete action and added that functionality too