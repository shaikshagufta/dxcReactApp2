import React,{useReducer} from 'react';
import './App.css';
import './appStyles.css';
import ComponentA from './components/hooks1/contexthook/ComponentA';
import CompA from './components/hooks1/contextNreducer/CompA';
import CompB from './components/hooks1/contextNreducer/CompB';
import CompC from './components/hooks1/contextNreducer/CompC';
import CounterOne from './components/hooks1/reducerhook/CounterOne';
import CounterThree from './components/hooks1/reducerhook/CounterThree';
import CounterTwo from './components/hooks1/reducerhook/CounterTwo';



export const UserContext = React.createContext()    //exporting a context
export const BatchContext = React.createContext()


export const CountContext = React.createContext()
const initialState = 0

const reducer = (state,action) => {
  switch(action){
      case 'increment': return state+1
      case 'decrement': return state-1
      case 'reset': return initialState
      default: return state
  }
}

function App() {
  const [count,dispatch] = useReducer(reducer,initialState)// defining const and dispatch
  return (
    // embedding in a provider passing an object as value 
    <CountContext.Provider
    value = {  
      {countState: count, countDispatch: dispatch} //object
     }>
    
    <div className="App">
    Count in app.js is {count}

      <CompA />
      <CompB />
      <CompC />

    </div>
    </CountContext.Provider>
  );
}

export default App;
