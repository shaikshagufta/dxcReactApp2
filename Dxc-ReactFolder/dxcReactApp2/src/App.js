import React from 'react';
import './App.css';
import './appStyles.css';
import ComponentA from './components/hooks1/contexthook/ComponentA';
import CounterOne from './components/hooks1/reducerhook/CounterOne';



export const UserContext = React.createContext()    //exporting a context
export const BatchContext = React.createContext()

function App() {
  return (
    <div className="App">

      <CounterOne />

    </div>
  );
}

export default App;
