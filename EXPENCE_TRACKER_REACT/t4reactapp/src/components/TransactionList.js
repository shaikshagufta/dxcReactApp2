import React from 'react'

export const TransactionList = () => {
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
