//to add component level states for inputs
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
    //pulling the transactions
    const { addTransaction } = useContext(GlobalContext);

    const [text, setText] = useState('');//a piece of state and function to manipulate the state
    const [amount, setAmount] = useState(0);//default state 0
    // connecting them to our inputs i.e, connecting conmponent controllers to the controlled components


    const onSubmit = e => {//event parameter
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),//to generate an id
            text,// equivalent to text: text
            amount: +amount// + to make ammount a number 
        }

        addTransaction(newTransaction);
    }
    //1 add onSubmit to the form and create the method/function
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
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
