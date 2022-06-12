const TaskItem = ({ task, mostrar }) => {
  const { title, completed } = task;

  return (
    <li
      onClick={() => {
        mostrar();
      }}
      className='flex mb-2 py-2 px-4 w-4/5 bg-slate-300'>
      {completed && (
        <p className='text-green-500 text-left'>
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

      <p className={completed ? 'line-through text-xl' : 'text-xl'}>{title}</p>
    </li>
  );
};

export default TaskItem;
