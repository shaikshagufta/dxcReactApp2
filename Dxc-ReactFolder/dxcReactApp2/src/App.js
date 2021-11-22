import React from 'react';
import './App.css';
import './appStyles.css';
import ComponentA from './components/hooks1/contexthook/ComponentA';



export const UserContext = React.createContext()    //exporting a context
export const BatchContext = React.createContext()

function App() {
  return (
    <div className="App">

      <UserContext.Provider value={'ShaikShagufta'} >
        <BatchContext.Provider value={'dxc batch 2'}>
          <ComponentA />
        </BatchContext.Provider>
      </UserContext.Provider>

    </div>
  );
}

export default App;
