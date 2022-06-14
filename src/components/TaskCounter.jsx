const TaskCounter = ({ completed }) => {
  return (
    <div className='mb-4 text-center'>
      <p className='text-3xl'>
        Tienes completadas <br />
        <span className='font-bold text-green-600'>{completed}</span>
      </p>
    </div>
  );
};

export default TaskCounter;
