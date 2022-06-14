import { useState, useEffect } from 'react';

const taskslist = [
  { id: 1, title: 'Tarea de prueba 1', completed: false },
  {
    id: 2,
    title:
      'Esto es una tarea demasiado larga para probar la vista del componente xD',
    completed: true,
  },
  { id: 3, title: '... No se me ocurre que poner', completed: false },
];

const useTasks = () => {
  const [tasks, setTasks] = useState([...taskslist]);
  const [completed, setcompleted] = useState(0);
  const [modal, setmodal] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const count = tasks.filter(task => task.completed).length;
    setcompleted(count);
  }, [tasks]);

  const addTask = task => {
    const newTask = {
      id: new Date(),
      title: task.title,
      completed: task.completed,
    };
    setTasks([...tasks, newTask]);
    setmodal(false);
  };

  const toogleTask = task => {
    const newTasks = tasks.map(t =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const removeTask = task => {
    const newTasks = tasks.filter(t => t.id !== task);
    setTasks(newTasks);
  };

  const openModal = () => {
    setmodal(!modal);
  };

  const search = query => {
    setQuery(query);
  };

  return {
    tasks,
    addTask,
    toogleTask,
    removeTask,
    completed,
    modal,
    openModal,
    query,
    search,
  };
};

export default useTasks;
