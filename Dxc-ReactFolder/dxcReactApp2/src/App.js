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
import FocusInput from './components/refs/FocusInput';
import FrParentInput from './components/refs/FrParentInput';
import PortalsDemo from './components/portals/PortalsDemo';
import ClassCounter from './components/hooks/ClassCounter';
import HookCounter from './components/hooks/HookCounter';
import HookCounter2 from './components/hooks/HookCounter2';
import HooksCounter3 from './components/hooks/HooksCounter3';
import ClassCounter1 from './components/hooks1/useeffect/ClassCounter1';
import CounterHook1 from './components/hooks1/useeffect/CounterHook1';



function App() {
  return (
    <div className="App">
      <CounterHook1 />
      <HooksCounter3 />
      <HookCounter2 />
      <HookCounter />
      <FrParentInput />
      <PortalsDemo />

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
