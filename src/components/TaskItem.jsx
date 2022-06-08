export const TaskItem = ({ onDelete, task }) => {
  return (
    <>
      <ul className='flex gap-4'>
        <li>{task}</li>
        <button onClick={() => onDelete(task)}>x</button>
      </ul>
    </>
  );
};
