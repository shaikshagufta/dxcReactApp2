/*
Reducer is used to specify the app's state changes in response to certain actions 
or a way to change a state and send it down our app
here we create a new state and send it down now
*/

export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,//spreadOperator used to send the current state
        transactions: //changing transactions value
        state.transactions.filter(transaction => transaction.id !== //seting to send all the transactions except the deleted ones
          action.payload)//filtering by payload(id) as in dipatch of function deleteTransaction by id
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }

    default:
      return state;
  }
}