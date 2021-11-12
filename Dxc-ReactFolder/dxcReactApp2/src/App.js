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
import { Fragment } from 'react';
import Fragments from './components/Fragments';
import NewTable from './components/NewTable';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/refs/RefsDemo';


function App() {
  return (
    <div className="App">
      <RefsDemo />

      <ParentComp />
      <NewTable />
      <Form />
      <Fragments />
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
