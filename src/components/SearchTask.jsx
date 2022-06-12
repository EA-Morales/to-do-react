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
      <input
        onChange={event => setQuery(event.target.value)}
        className='py-2 px-4 border-2 mb-2 rounded-2xl'
        autoFocus={true}
        autoComplete='false'
        type='text'
        placeholder='Buscar tarea...'
      />
    </>
  );
};

export default SearchTask;
