import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';

const App = () => {
  const [taskState, updateTaskState] = useState([]);

  const getTasks = () => {
    console.log('get tasks');
    updateTaskState([
      {
        id: 27,
        text: 'task 1',
        done: false,
      },
    ]);
  };

  useEffect(getTasks, []);

  const toggleTaskComplete = (id) => {
    const newTasks = taskState.map((task) => {
      if (task.id === id) {
        return {
          id: task.id,
          text: task.text,
          done: !task.done,
        };
      }
      return task;
    });

    updateTaskState(newTasks);
  };

  const deleteTask = (id) => {
    console.log(`Delete task ${id}`);
    // const newTasks = [];

    // for (let task of taskState) {
    //   if (task.id !== id) {
    //     newTasks.push(task);
    //   }
    // }

    const newTasks = taskState.filter((task) => task.id !== id);

    updateTaskState(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            completedCallback={toggleTaskComplete}
            deleteTaskCallback={deleteTask}
            tasks={taskState}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
