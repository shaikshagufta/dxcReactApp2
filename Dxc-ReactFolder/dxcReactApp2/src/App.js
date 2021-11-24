import './App.css';
import React from 'react';
import ClickCounter from './components/heigherOrderComponents/ClickCounter';
import HoverCounter from './components/heigherOrderComponents/HoverCounter';


function App() {
  return (

    <div className="App">
      <ClickCounter />
      <HoverCounter />
    </div>

  );
}
export default App;