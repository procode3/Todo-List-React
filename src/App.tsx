import React, {useState} from 'react';

import Todolist from './components/Todolist';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model' 

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {id: Math.random().toString(), text: text}
    ]);
  };
  
  const todoDeletehandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    } );
  };
  return <div className='App'>
    <NewTodo onAddTodo={todoAddHandler} />
    <Todolist items={todos} onDeleteTodo={todoDeletehandler}/>
  </div>;
};

export default App;
