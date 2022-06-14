import './App.css';
import Modal from './components/Modal';
import TaskList from './components/TaskList';
import SearchTask from './components/SearchTask';
import TaskCounter from './components/TaskCounter';
import useTasks from './hooks/useTasks';

function App() {
  const {
    tasks,
    addTask,
    toogleTask,
    removeTask,
    completed,
    modal,
    openModal,
    query,
    search,
  } = useTasks();

  return (
    <div className='container h-screen mx-auto flex flex-col justify-center items-center'>
      <TaskCounter completed={completed} />

      <SearchTask search={search} />

      <TaskList
        query={query}
        tasks={tasks}
        toogleTask={toogleTask}
        removeTask={removeTask}
      />

      {modal && <Modal onSubmitHandler={addTask} closeModal={openModal} />}

      <button
        className='fixed p-1 bottom-5 bg-pink-600 rounded-full hover:bg-pink-800 hover:animate-bounce hover:ease-in-out hover:duration-300'
        onClick={() => openModal()}>
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
