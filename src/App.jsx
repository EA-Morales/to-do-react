import { useState } from 'react';
import './App.css';
import { TaskItem } from './components/TaskItem';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(['apple', 'banana', 'orange']);

  function onHandleChange(event) {
    setTask(event.target.value);
  }

  function onSubmitHandler() {
    setTasks([...tasks, task]);
  }

  const onDelete = task => {
    const newTasks = tasks.filter(t => t !== task);
    setTasks(newTasks);
  };

  return (
    <div className='container mx-auto flex flex-col justify-center items-center'>
      <h1 className='text-center text-3xl mt-24 mb-4'>To-do List</h1>

      <div className='text-center'>
        <input
          className='border-2 mr-2 py-2 px-4 rounded-xl'
          onChange={onHandleChange}
          type='text'
          name='task'
          placeholder='add task'
        />
        <button
          className='py-2 px-4 bg-indigo-800 text-white rounded-xl'
          onClick={onSubmitHandler}>
          add task
        </button>
      </div>

      <div className=''>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
