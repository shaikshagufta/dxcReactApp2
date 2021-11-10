import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      <Greet name="Shaggu" college="IIT">
        <p> this is children property</p>
      </Greet>
      <Greet name="Shayi" college="Oxford" />
      <Greet name="Shaik" />

      <Welcome />
    </div>
  );
}

export default App;
