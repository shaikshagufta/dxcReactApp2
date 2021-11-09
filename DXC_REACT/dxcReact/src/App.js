import './App.css';

import EventBind from './components/EventBind';
<<<<<<< HEAD
import NameList from './components/NameLists';
=======
import NameList from './components/NameList';
>>>>>>> 9f884f8a5cc5c0742fab706eeac6e04a67b732a1
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
