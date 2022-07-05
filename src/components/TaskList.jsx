import TaskItem from './TaskItem';

const TaskList = ({ query, tasks, toogleTask, removeTask }) => {
  const filteredTasks = tasks
    ? tasks.filter(task => {
        return task.title.toLowerCase().includes(query.toLowerCase());
      })
    : [];

  return (
    <div className='w-5/6 py-2 px-4'>
      {filteredTasks &&
        filteredTasks.map(task => (
          <ul className='flex justify-between items-center gap-4' key={task.id}>
            {task.completed && (
              <p className='text-green-500'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </p>
            )}
            <TaskItem task={task} mostrar={() => toogleTask(task)} />
            <button
              className='p-1 bg-pink-600 text-white rounded-xl hover:bg-pink-800 font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
              onClick={() => removeTask(task.id)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                />
              </svg>
            </button>
          </ul>
        ))}
    </div>
  );
};

export default TaskList;

/*
  const filteredTasks = tasks.filter(task => {
    return task.title.toLowerCase().includes(query.toLowerCase());
  });
*/
