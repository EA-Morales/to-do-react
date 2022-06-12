import { useState, useEffect } from 'react';

const tasks = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
  { id: 3, title: 'Task 3', completed: false },
];

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(tasks);
  }, [todos]);

  const log = (a, b) => {
    console.log('Log', a, b);
  };

  const addtodos = todo => {
    console.log('todo', todo);
  };

  const toogletodo = (id, completed) => {
    console.log('toogletodo', id, completed);
  };

  const removetodo = id => {
    console.log('removetodo', id);
  };

  return [todos, addtodos, toogletodo, removetodo, log];
};
export default useTodos;
