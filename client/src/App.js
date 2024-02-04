import { Fragment } from 'react';
import './App.css';



// Components
import ListTodos from "./components/ListTodo";




function App() {
  return (
    <Fragment>
      <div className='container'>
        <ListTodos/>
      </div>
    </Fragment>
  );
}

export default App;
