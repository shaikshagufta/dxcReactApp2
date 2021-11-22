import React from 'react'

export const Transaction = ({ transaction }) => {
    //handling the ammount 
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
//handling border by making the className dynamic 
        <li className={transaction.amount <0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
        </li>
    )
}
//later on we shall add a delete action and add that functionality too