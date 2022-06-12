import { useState } from 'react';

const Modal = ({ onSubmitHandler, closeModal }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    if (title.trim() === '') {
      return;
    }

    const tarea = { title, completed };

    onSubmitHandler(tarea);

    setCompleted(false);
    setTitle('');
  };

  return (
    <div className='fixed top-0 left-0 z-50 flex flex-col bg-slate-500/75 w-screen h-screen justify-center items-center'>
      <div className='bg-white py-4 px-8 text-center rounded-3xl relative'>
        <figure className='bg-white w-16 h-16 absolute -top-8 left-[40%] rounded-full flex justify-center items-center'>
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
              d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
            />
          </svg>
        </figure>

        <h2 className='my-6 text-3xl'>Add task</h2>

        <form className='flex flex-col' onSubmit={handleSubmit}>
          <input
            className='border-2 mr-2 py-2 px-4 rounded-xl'
            onChange={event => setTitle(event.target.value)}
            value={title}
            type='title'
            name='task'
            placeholder='add task'
            autoComplete='false'
          />
          <div className='flex justify-center items-center gap-4 my-4'>
            <input
              className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              checked={completed}
              onChange={event => setCompleted(event.target.checked)}
              type='checkbox'
              id='topping'
              name='completed'
              value='Paneer'
            />
            <p>Completado</p>
          </div>
          <button
            type='submit'
            className='py-2 px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-800 font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            Add task
          </button>
        </form>
        <button className='py-2 px-4 mt-2' onClick={closeModal}>
          cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
