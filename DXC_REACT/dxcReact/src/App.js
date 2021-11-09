import './App.css';

import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';


function App() {
  return (
    <div className="App">
      <EventBind />
      <ParentComponent />
      <UserGreetings />

    </div>
  );
}

export default App;
