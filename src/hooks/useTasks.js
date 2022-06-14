import { useState, useEffect } from 'react';

const taskslist = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
  { id: 3, title: 'Task 3', completed: false },
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
      completed: tasks.completed,
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
