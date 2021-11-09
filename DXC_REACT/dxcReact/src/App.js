import './App.css';

import EventBind from './components/EventBind';
import NameList from './components/NameLists';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';


function App() {
  return (
    <div className="App">
      <NameList />
      <EventBind />
      <ParentComponent />
      <UserGreetings />

    </div>
  );
}

export default App;
