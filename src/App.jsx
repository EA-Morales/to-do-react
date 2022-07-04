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
    <div className='container h-full mx-auto'>
      <div className='image h-[200px] bg-no-repeat bg-cover bg-center px-6'>
        <h1 className='pt-12 pb-9 text-4xl text-white font-bold'>TODO</h1>
        <SearchTask search={search} />
      </div>
      <div className='w-4/5 my-8 flex flex-col justify-center items-center bg-white shadow-xl p-8 rounded-2xl '>
        <form>
          <input className='pepe' type='checkbox' />
        </form>
        <TaskList
          query={query}
          tasks={tasks}
          toogleTask={toogleTask}
          removeTask={removeTask}
        />

        <TaskCounter completed={completed} />
        {modal && <Modal onSubmitHandler={addTask} closeModal={openModal} />}

        <button
          className='fixed p-1 bottom-5 right-5 bg-pink-600 rounded-full hover:bg-pink-800 hover:animate-bounce hover:duration-300'
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
    </div>
  );
}

export default App;
