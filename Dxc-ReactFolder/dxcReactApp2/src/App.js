import './App.css';
import React from 'react';
import Counter1 from './components/customHooks/functionality/Counter1';
import Counter2 from './components/customHooks/functionality/Counter2';


function App() {
  return (

    <div className="App">
      <Counter1 />
      <Counter2 />
    </div>

  );
}
export default App;