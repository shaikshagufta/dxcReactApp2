import React from 'react';
import './App.css';
import './appStyles.css';
import ComponentA from './components/contexthook/ComponentA';



export const UserContext = React.createContext()


function App() {
  return (
    <div className="App">

      <UserContext.Provider value={'Shagufta'} >
        <ComponentA />
      </UserContext.Provider>

    </div>
  );
}

export default App;
