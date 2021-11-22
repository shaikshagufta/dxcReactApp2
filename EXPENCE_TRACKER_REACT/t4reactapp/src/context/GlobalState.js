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

    return (<GlobalContext.Provider value={{//object
        transactions: state.transactions,
    }}>
        {children}
    </GlobalContext.Provider>);
}