import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import TaskList from './components/TaskList';

// const TASKS = [
//   {
//     id: 1,
//     text: 'Mow the lawn',
//     done: false,
//   },
//   {
//     id: 2,
//     text: 'Cook Pasta',
//     done: true,
//   },
// ];

const URL = 'https://adas-task-list.herokuapp.com/tasks';

const App = () => {
  const [taskState, updateTaskState] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const tasks = response.data;
        const newTasks = [];
        for (let task of tasks) {
          newTasks.push({
            id: task.id,
            text: task.title,
            description: task.description,
            done: task.is_complete,
          });
        }
        updateTaskState(newTasks);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteTask = (id) => {
    //const newTasks = taskState.filter((task) => task.id !== id);
    axios
      .delete(`${URL}/${id}`)
      .then(() => {
        const newTasks = [];
        for (let task of taskState) {
          if (task.id !== id) {
            newTasks.push(task);
          }
        }
        updateTaskState(newTasks);
        //console.log(`Task ${id} deleted`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleTaskComplete = (id) => {
    let action = 'complete';
    const newTasks = taskState.map((task) => {
      if (task.id === id) {
        if (task.done) {
          action = 'incomplete';
        }

        return {
          id: task.id,
          text: task.text,
          done: !task.done,
        };
      }
      return task;
    });
    axios
      .patch(`${URL}/${id}/${action}`)
      .then((response) => {
        console.log(`Marked ${action}`);
        updateTaskState(newTasks);
      })
      .catch((error) => console.log(error));
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
            deleteCallback={deleteTask}
            tasks={taskState}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
