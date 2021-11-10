import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import ClassClick from './components/ClassClick';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';


function App() {
  return (
    <div className="App">
      <ParentComponent />
      <EventBind />
    </div>
  );
}

export default App;
