import { useState, useEffect } from 'react';
import './App.css';
import Modal from './components/Modal';
import TaskList from './components/TaskList';
import SearchTask from './components/SearchTask';
import TaskCounter from './components/TaskCounter';
import useTodos from './hooks/useTodos';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
  ]);
  const [todos, addtodos, toogletodo, removetodo, log] = useTodos();

  const [query, setQuery] = useState('');
  const [completed, setcompleted] = useState(0);
  const [modal, setmodal] = useState(false);

  useEffect(() => {
    const count = tasks.filter(task => task.completed).length;
    setcompleted(count);
  }, [completed, tasks]);

  function onSubmitHandler(props) {
    setTasks([...tasks, { id: Date.now(), ...props }]);
    setmodal(false);
  }

  const search = query => {
    setQuery(query);
  };

  const onDelete = task => {
    const newTasks = tasks.filter(t => t.id !== task);
    setTasks(newTasks);
  };

  const onToogle = task => {
    const newTasks = tasks.map(t =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const closeModal = () => {
    setmodal(false);
  };

  return (
    <div className='container h-screen mx-auto flex flex-col justify-center items-center'>
      <TaskCounter completed={completed} />

      <SearchTask search={search} />

      <button onClick={() => log('hola', 'mundo')}>prueba</button>

      <TaskList
        tasks={tasks}
        onDelete={onDelete}
        query={query}
        onToogle={onToogle}
      />

      {modal && (
        <Modal onSubmitHandler={onSubmitHandler} closeModal={closeModal} />
      )}

      <button
        className='fixed p-1 bottom-5 bg-indigo-600 rounded-full hover:bg-indigo-800 hover:animate-bounce hover:ease-in-out hover:duration-300'
        onClick={() => setmodal(!modal)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 4v16m8-8H4'
          />
        </svg>
      </button>
    </div>
  );
}

export default App;
