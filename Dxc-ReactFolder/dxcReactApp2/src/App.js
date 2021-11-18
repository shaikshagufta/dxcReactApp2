import './App.css';
import './appStyles.css';
import DataFetching from './components/hooks1/DataFetching';
import ClassMouse from './components/hooks1/useeffect/ClassMouse';
import HookMouse from './components/hooks1/useeffect/HookMouse';
import MouseContainer from './components/hooks1/useeffect/MouseContainer';



function App() {
  return (
    <div className="App">
      <DataFetching />
      
    </div>
  );
}

export default App;
