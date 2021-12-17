import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TaskList from './components/TaskList';

const URL = 'https://adas-task-list.herokuapp.com';

const App = () => {
  const [taskState, updateTaskState] = useState([]);

  const getTasks = () => {
    console.log('get tasks');
    // Get stuff from API
    axios
      .get(`${URL}/tasks`)
      .then((response) => {
        console.log(response.data);
        const newTasks = response.data.map((task) => {
          return {
            id: task.id,
            text: task.title,
            done: task.is_complete,
          };
        });

        updateTaskState(newTasks);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(getTasks, []);

  const updateApi = (task) => {
    const completeOrIncomplete = task.done ? 'incomplete' : 'complete';

    axios
      .patch(`${URL}/tasks/${task.id}/${completeOrIncomplete}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const toggleTaskComplete = (id) => {
    const newTasks = taskState.map((task) => {
      if (task.id === id) {
        updateApi(task);
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
    axios
      .delete(`${URL}/tasks/${id}`)
      .then((response) => {
        console.log(response.data);
        getTasks();
        // const newTasks = taskState.filter((task) => task.id !== id);

        // updateTaskState(newTasks);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
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
