const TaskCounter = ({ completed }) => {
  return (
    <div className='mb-4'>
      <p className='text-xl'>
        Tienes completadas{' '}
        <span className='font-bold text-green-600'>{completed}</span>
      </p>
    </div>
  );
};

export default TaskCounter;
