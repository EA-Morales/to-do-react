import { useEffect, useState } from 'react';

const SearchTask = ({ search }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.length >= 0) {
      search(query);
    }
  }, [query]);

  return (
    <>
      <label className='relative block'>
        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-slate-300'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </span>
        <input
          onChange={event => setQuery(event.target.value)}
          className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          placeholder='Search task...'
          type='text'
          name='search'
          value={query}
          autoFocus={true}
          autoComplete='false'
        />
        {query.length > 0 && (
          <button
            onClick={() => setQuery('')}
            className='absolute inset-y-0 right-3 flex items-center pl-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-slate-300'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        )}
      </label>
    </>
  );
};

export default SearchTask;
