import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';


function App() {
  return (
    <div className="App">
      <Message />

      <Greet name="Shaggu" college="IIT">
        <p> this is children property</p>
      </Greet>
      <Greet name="Shayi" college="Oxford" >
      <button>click me</button>
      </Greet >
      <Greet name="Shaik" />

      <Welcome name ="Shagufta" alias = "Shaggu"/>
    </div>
  );
}

export default App;
