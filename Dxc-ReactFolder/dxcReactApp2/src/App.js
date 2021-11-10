import './App.css';

import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Table from './components/Table';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <Form />
      <h1 className={styles.success}>success</h1>
      <h1 className='error'>error</h1>
      <StyleSheet enabled={true} />
      <Inline />
      <Table />
      <NameList />
      <UserGreeting />
      <ParentComponent />
      <EventBind />
    </div>
  );
}

export default App;
