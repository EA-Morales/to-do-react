const TaskItem = ({ task, mostrar }) => {
  const { title, completed } = task;

  return (
    <li
      onClick={() => {
        mostrar();
      }}
      className='mx-auto mb-2 py-2 px-4'>
      <p className={completed ? 'line-through text-xl' : 'text-xl'}>{title}</p>
    </li>
  );
};

export default TaskItem;
