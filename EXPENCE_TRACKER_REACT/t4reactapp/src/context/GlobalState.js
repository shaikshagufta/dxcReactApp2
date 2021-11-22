import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: []// removed dummyTransactions
}

// Create context
export const GlobalContext = createContext(initialState);

//in-order for other components to have access to the GlobalState

// Provider component
export const GlobalProvider = (/*using destructuring*/{ children })/*arrow function*/ => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //here inside the Provider component we will add Actions that will make calls to the reducer

    // Actions
    function deleteTransaction(id) {
        dispatch({//so we can dispacth to our reducer this object
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    //similarly ,instead of id here we take whole transaction
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    //passing down the actions to the provider
    //the delete button is in Transactions comp 
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}