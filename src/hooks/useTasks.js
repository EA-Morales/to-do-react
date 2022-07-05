import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [completed, setcompleted] = useState(0);
  const [modal, setmodal] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (tasks) {
      const count = tasks.filter(task => task.completed).length;
      setcompleted(count);
    }
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
