import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import ClassClick from './components/ClassClick';
import FunctionClick from './components/FunctionClick';


function App() {
  return (
    <div className="App">
      <Message />

      <ClassClick />
      <FunctionClick />

      <Counter />

      <Greet name="Shaggu" college="IIT">
        <p> this is children property</p>
      </Greet>
      <Greet name="Shayi" college="Oxford" >
        <button>click me</button>
      </Greet >
      <Greet name="Shaik" />

      <Welcome name="Shagufta" alias="Shaggu" />
    </div>
  );
}

export default App;
