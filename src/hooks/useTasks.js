import { useState } from 'react';

const taskslist = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
  { id: 3, title: 'Task 3', completed: false },
];

const useTasks = () => {
  const [tasks, setTasks] = useState([...taskslist]);

  console.log(tasks);

  const addTask = task => {
    console.log(task);
  };

  const toogleTask = () => {
    console.log(tasks);
  };

  const removeTask = id => {
    console.log(id);
  };

  return [tasks, addTask, toogleTask, removeTask];
};

export default useTasks;
