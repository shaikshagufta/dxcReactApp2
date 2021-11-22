import React, { useState } from 'react'
//to add component level states for inputs

export const AddTransaction = () => {
    const [text, setText] = useState('');//a piece of state and function to manipulate the state
    const [amount, setAmount] = useState(0);//default state 0
    // connecting them to our inputs i.e, connecting conmponent controllers to the controlled components
    return (
        <div>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount
                        <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
