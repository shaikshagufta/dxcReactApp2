import React from 'react';
import './App.css';
import './appStyles.css';
import ComponentA from './components/hooks1/contexthook/ComponentA';
import CounterOne from './components/hooks1/reducerhook/CounterOne';
import CounterThree from './components/hooks1/reducerhook/CounterThree';
import CounterTwo from './components/hooks1/reducerhook/CounterTwo';



export const UserContext = React.createContext()    //exporting a context
export const BatchContext = React.createContext()

function App() {
  return (
    <div className="App">

      <CounterThree />

    </div>
  );
}

export default App;
