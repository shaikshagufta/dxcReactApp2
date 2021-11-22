import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: [
        // dummyTransactions 
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
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

//passing down the actions to the provider
//the delete button is in Transactions comp 
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}