import Modal from '../components/Modal';
import SearchTask from '../components/SearchTask';
import TaskCounter from '../components/TaskCounter';
import TaskList from '../components/TaskList';
import useTasks from '../hooks/useTasks';

const Home = () => {
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
    <div className='container h-full mx-auto flex justify-center items-center'>
      <div className='w-4/5 my-8 flex flex-col justify-center items-center bg-white shadow-xl p-8 rounded-2xl'>
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
          className='fixed p-1 bottom-5 right-5 bg-pink-600 rounded-full hover:bg-pink-800 hover:animate-bounce hover:ease-in-out hover:duration-300'
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
};

export default Home;
