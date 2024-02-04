import { Fragment } from 'react';
import './App.css';



// Components
import ListTodos from "./components/ListTodo";
import InputTodo from './components/InputTodo';




function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo/>
        <ListTodos/>
      </div>
    </Fragment>
  );
}

export default App;
