import React from 'react'

/* 
we need to catch the props in the TransactionList
we can use props and write in <li> as props.transaction.list 
or we can destructure it as follows
*/

export const Transaction = ({ transaction }) => {
    return (

        <li className="minus">
            {transaction.text} <span>-$400</span><button className="delete-btn">x</button>
        </li>

    )
}
