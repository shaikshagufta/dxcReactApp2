import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    //pulling the transactions
    const { transactions } = useContext(GlobalContext);
    /*
    cause each transaction is an object with 'id,text,ammount' 
    we map through and get all amounts into an array
    */
    const amounts = transactions.map(transaction => transaction.amount);
    /*
    For income we,
    filter through and get positive numbers
    add them all together using reduce 
    and add a limit to decimal using toFix
    */
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    /*
    For expence we,
    filter through and get negative numbers
    add them all together using reduce 
    and add a limit to decimal using toFix
    */
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);
    // outputing income and expenses
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expense}</p>
            </div>
        </div>
    )
}
